import React, { useState, useRef, useEffect, FormEvent, ReactNode } from 'react';
import { Send, Loader2, ChevronDown, X } from 'lucide-react';

// Types
interface ApiResponse {
  output?: Array<{
    text: string;
    type: string;
    index: number;
  }>;
}

interface ChatMessage {
  type: 'user' | 'agent' | 'error';
  content: string;
  timestamp: string;
}

interface QuickCommand {
  label: string;
  command: string;
  requiresAddress?: boolean;
  addressPrompt?: string;
  group?: string;
  description?: string;
}

const StarknetChat = () => {
  // Type guard for QuickCommand
  const hasRequiresAddress = (cmd: QuickCommand): cmd is QuickCommand & { requiresAddress: boolean } => {
    return 'requiresAddress' in cmd && cmd.requiresAddress === true;
  };

  // Format message content with better styling
  const formatMessageContent = (content: string): ReactNode => {
    try {
      // Try to parse the content if it's JSON
      const parsed = JSON.parse(content);
      
      // If it's in our standard API response format
      if (parsed.input && parsed.output?.[0]?.text) {
        let text = parsed.output[0].text.trim();
        
        // Check if the text contains key-value pairs we want to highlight
        if (text.includes("Public Key:") || text.includes("Address:") || text.includes("Transaction Hash:")) {
          // Split the text into lines
          const lines = text.split('\n').map((line: string): ReactNode => {
            // Highlight specific data points
            if (line.includes("Public Key:") || 
                line.includes("Address:") || 
                line.includes("Private Key:") ||
                line.includes("Transaction Hash:") ||
                line.includes("Precalculated Address:")) {
              const [label, value] = line.split(':').map((s: string): string => s.trim());
              if (value) {
                return (
                  <div key={label} className="my-2 p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-gray-400 text-sm mb-1">{label}:</div>
                    <div className="font-mono text-sm break-all text-blue-400">{value}</div>
                  </div>
                );
              }
            }
            
            // Format numbered lists
            if (/^\d+\./.test(line)) {
              return <div key={line} className="ml-4 my-1">{line}</div>;
            }
            
            // Format bullet points
            if (line.startsWith('-')) {
              return (
                <div key={line} className="ml-4 my-1 flex items-center">
                  <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                  {line.slice(1).trim()}
                </div>
              );
            }
            
            // Section headers
            if (line.toLowerCase().includes('next steps:')) {
              return (
                <div key={line} className="text-blue-400 font-semibold mt-4 mb-2">
                  {line}
                </div>
              );
            }
            
            // Default line formatting
            return <div key={line} className="my-1">{line}</div>;
          });
          
          return <div className="space-y-1">{lines}</div>;
        }
        
        // Return the raw text if no special formatting is needed
        return text;
      }
      
      // Return the original content if it doesn't match our format
      return content;
    } catch {
      // If parsing fails, return the original content
      return content;
    }
  };

  // State management
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAddressPrompt, setShowAddressPrompt] = useState(false);
  const [addressInput, setAddressInput] = useState('');
  const [selectedCommand, setSelectedCommand] = useState<QuickCommand | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>('Account');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Command categories
  const commandCategories = {
    "Account": [
      { label: "Create Argent Account", command: "Create a new Argent account" },
      { label: "Create OZ Account", command: "Create a new OpenZeppelin account" },
      { label: "Deploy Argent Account", command: "Deploy my Argent account" },
      { label: "Deploy OZ Account", command: "Deploy my OpenZeppelin account" },
      { label: "Get My Address", command: "What is my wallet address?" },
    ],
    "Balances": [
      { label: "Check ETH Balance", command: "What is my ETH balance?" },
      { label: "Check USDC Balance", command: "What is my USDC balance?" },
      { label: "Check USDT Balance", command: "What is my USDT balance?" },
      { label: "Check STRK Balance", command: "What is my STRK balance?" },
      { 
        label: "Check Other Wallet", 
        command: "Get ETH balance of {address}",
        requiresAddress: true,
        addressPrompt: "Enter the wallet address to check:"
      },
    ],
    "Transactions": [
      { label: "Swap ETH to USDC", command: "Swap 0.1 ETH for USDC" },
      { label: "Swap USDC to ETH", command: "Swap 100 USDC for ETH" },
      { 
        label: "Transfer ETH", 
        command: "Transfer 0.1 ETH to {address}",
        requiresAddress: true,
        addressPrompt: "Enter the recipient's address:"
      },
      { 
        label: "Transfer USDC", 
        command: "Transfer 100 USDC to {address}",
        requiresAddress: true,
        addressPrompt: "Enter the recipient's address:"
      },
      { 
        label: "Simulate Transfer", 
        command: "Simulate transferring 0.1 ETH to {address}",
        requiresAddress: true,
        addressPrompt: "Enter the recipient's address for simulation:"
      },
      { label: "Estimate Deploy Fee", command: "Estimate account deployment fee" },
    ],
    "Network": [
      { label: "Latest Block", command: "Get the latest block number" },
      { label: "Chain ID", command: "Get the chain ID" },
      { label: "Syncing Status", command: "Check network syncing status" },
      { label: "Spec Version", command: "Get the spec version" },
    ],
    "Block Info": [
      { label: "Latest Block Info", command: "Get the latest block with transactions" },
      { label: "Block State Update", command: "Get the latest block state update" },
      { label: "Block Receipts", command: "Get the latest block with receipts" },
      { label: "Block Traces", command: "Get the latest block transactions traces" },
      { label: "Transaction Count", command: "Get the latest block transaction count" },
    ],
    "Contract Info": [
      { 
        label: "Get Storage", 
        command: "Get storage at address {address}",
        requiresAddress: true,
        addressPrompt: "Enter the contract address:"
      },
      { 
        label: "Get Class", 
        command: "Get class at address {address}",
        requiresAddress: true,
        addressPrompt: "Enter the contract address:"
      },
      { 
        label: "Get Class Hash", 
        command: "Get class hash at address {address}",
        requiresAddress: true,
        addressPrompt: "Enter the contract address:"
      },
      { 
        label: "Get Nonce", 
        command: "Get nonce for address {address}",
        requiresAddress: true,
        addressPrompt: "Enter the address:"
      },
    ]
  };

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle command selection
  const handleCommand = (command: QuickCommand) => {
    if (command.requiresAddress) {
      setSelectedCommand(command);
      setShowAddressPrompt(true);
    } else {
      handleSubmit(undefined, command.command);
    }
  };

  // Handle address submission
  const handleAddressSubmit = () => {
    if (selectedCommand && addressInput) {
      const finalCommand = selectedCommand.command.replace('{address}', addressInput);
      setShowAddressPrompt(false);
      setAddressInput('');
      setSelectedCommand(null);
      handleSubmit(undefined, finalCommand);
    }
  };

  // Main submit handler
  const handleSubmit = async (e?: FormEvent<HTMLFormElement>, commandOverride?: string) => {
    if (e) e.preventDefault();
    const messageToSend = commandOverride || inputMessage;
    if (!messageToSend.trim()) return;

    const userMessage: ChatMessage = {
      type: 'user',
      content: messageToSend,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      if (!apiKey) {
        throw new Error('API key is not configured');
      }

      const response = await fetch('/api/agent/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify({ request: messageToSend })
      });
      
      const data: ApiResponse = await response.json();
      
      const agentMessage: ChatMessage = {
        type: 'agent',
        content: data.output?.[0]?.text || 'Sorry, I encountered an error processing your request.',
        timestamp: new Date().toISOString(),
      };

      setMessages(prev => [...prev, agentMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        type: 'error',
        content: error instanceof Error ? error.message : 'An error occurred',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100">
      <div className="flex flex-col h-screen max-w-7xl mx-auto bg-gradient-to-b from-black to-[#0A0A0A]">
        {/* Header */}
        <div className="p-6 border-b border-gray-800/50 backdrop-blur-sm bg-black/30">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                Starknet Agent
              </h1>
              <p className="text-sm text-gray-400 mt-1 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Your AI assistant for Starknet operations
              </p>
            </div>
          </div>
        </div>

        {/* Command Categories */}
        <div className="p-6 border-b border-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
            {Object.entries(commandCategories).map(([category, commands]) => (
              <div 
                key={category} 
                className="bg-gradient-to-b from-gray-900/90 to-gray-800/50 rounded-xl overflow-hidden border border-gray-700/30 
                  hover:border-blue-500/30 transition-all duration-300 shadow-lg h-fit"
              >
                <button
                  onClick={() => setOpenCategory(openCategory === category ? null : category)}
                  className={`w-full px-5 py-4 flex justify-between items-center text-gray-100 
                    transition-all duration-300 ${openCategory === category ? 'bg-blue-500/10' : 'hover:bg-gray-800/50'}`}
                >
                  <span className="font-semibold tracking-wide">{category}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 text-blue-400
                      ${openCategory === category ? 'transform rotate-180' : ''}`}
                  />
                </button>
                {openCategory === category && (
                  <div className="border-t border-gray-700/30 bg-gray-900/50">
                    <div className="p-3 space-y-1">
                      {commands.map((cmd, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleCommand(cmd)}
                          className={`w-full px-4 py-3 text-left text-sm text-gray-300 rounded-lg
                            transition-all duration-200 group relative
                            ${isLoading ? 'opacity-50 cursor-not-allowed' : 
                              'hover:bg-blue-500/10 hover:text-white active:scale-98'}`}
                          disabled={isLoading}
                        >
                          <div className="flex items-center">
                            <span className="flex-grow">{cmd.label}</span>
                            {hasRequiresAddress(cmd) && (
                              <span className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-400 ml-2">
                                Requires Address
                              </span>
                            )}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 
                            opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-500" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg backdrop-blur-sm ${
                  message.type === 'user'
                    ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-500/20'
                    : message.type === 'error'
                    ? 'bg-red-500/20 text-red-200 border border-red-500/40'
                    : 'bg-gray-800/70 text-gray-100 border border-gray-700/50'
                } animate-slide-in`}
              >
                <div className="whitespace-pre-wrap">{formatMessageContent(message.content)}</div>
                <span className="text-xs opacity-60 mt-2 block">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-800 bg-gray-900/30">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-4 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 border border-gray-700/50 
                focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all backdrop-blur-sm
                hover:border-gray-600/50 hover:bg-gray-800/70"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Address Modal */}
        {showAddressPrompt && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-100">
                  {selectedCommand?.addressPrompt}
                </h3>
                <button
                  onClick={() => {
                    setShowAddressPrompt(false);
                    setAddressInput('');
                    setSelectedCommand(null);
                  }}
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <input
                type="text"
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
                placeholder="0x..."
                className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    setShowAddressPrompt(false);
                    setAddressInput('');
                    setSelectedCommand(null);
                  }}
                  className="px-4 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddressSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  disabled={!addressInput.trim()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StarknetChat;