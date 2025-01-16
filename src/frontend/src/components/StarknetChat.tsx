import React, { useState, useRef, useEffect, FormEvent, ReactNode } from 'react';
import { MessagesSquare, LogIn, Sun, Smartphone, ChevronDown, Users2, Send, X, Loader2 } from 'lucide-react';

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [publicAddress, setPublicAddress] = useState<string>('');


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
    <div className="min-h-screen bg-black text-gray-100 flex">
{/* Sidebar */}
<div className="w-64 bg-[#0A0A0A] border-r border-gray-800/50 flex flex-col">
  {/* Logo area */}
  <div className="p-4 flex items-center justify-between border-b border-gray-800">
    <div className="flex items-center space-x-2">
      <span className="text-2xl">⚡</span>
      <span className="font-semibold">StarkAgent</span>
    </div>
    <div className="flex items-center space-x-2">
      <Sun className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-200" />
      <Smartphone className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-200" />
    </div>
  </div>

  {/* Command Categories */}
  <div className="flex-1 overflow-y-auto p-4 space-y-4">
    {Object.entries(commandCategories).map(([category, commands]) => (
      <div key={category} className="space-y-2">
        <button
          onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
          className="w-full flex items-center justify-between text-gray-400 hover:text-white"
        >
          <span className="text-sm font-medium">{category}</span>
          <ChevronDown className={`w-4 h-4 transform transition-transform ${
            selectedCategory === category ? 'rotate-180' : ''
          }`} />
        </button>
        
        {selectedCategory === category && (
          <div className="space-y-1 ml-2">
            {commands.map((cmd, idx) => (
              <button
                key={idx}
                onClick={() => handleCommand(cmd)}
                className="w-full text-left text-sm text-gray-500 hover:text-white py-1 px-2 rounded transition-colors hover:bg-gray-800/50"
              >
                {cmd.label}
              </button>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Bottom section - Public Address */}
  <div className="p-4 border-t border-gray-800">
    <div className="bg-gray-900/50 rounded-lg p-3">
      <div className="text-xs text-gray-500 mb-1">Connected Address:</div>
      <div className="font-mono text-xs text-gray-300 break-all">
        {publicAddress || 'Loading...'}
      </div>
    </div>
  </div>
</div>

{/* Main chat area */}
<div className="flex-1 flex flex-col">
  {/* Messages area */}
  <div className="flex-1 overflow-y-auto p-4 space-y-4">
    {messages.length === 0 ? (
      <div className="h-full flex flex-col items-center justify-center text-center p-8">
        <div className="text-4xl mb-4">⚡</div>
        <h1 className="text-3xl font-bold mb-2">
          Welcome to <span className="text-blue-500">StarkAgent</span>
        </h1>
        <p className="text-gray-400 mb-8 max-w-md">
          Your AI assistant for Starknet operations. Ask me anything about accounts, 
          transactions, or network status.
        </p>
      </div>
    ) : (
      messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] p-4 rounded-lg ${
              message.type === 'user'
                ? 'bg-blue-600 text-white'
                : message.type === 'error'
                ? 'bg-red-500/20 text-red-200 border border-red-500/40'
                : 'bg-gray-800 text-gray-100'
            }`}
          >
            {formatMessageContent(message.content)}
            <div className="text-xs opacity-60 mt-2">
              {new Date(message.timestamp).toLocaleTimeString()}
            </div>
          </div>
        </div>
      ))
    )}
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

  {/* Input area */}
  <div className="p-4 border-t border-gray-800 bg-[#141414]">
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !inputMessage.trim()}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  </div>
</div>

{/* Address Modal */}
{showAddressPrompt && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-[#141414] rounded-lg p-6 max-w-md w-full border border-gray-800">
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
          className="text-gray-400 hover:text-gray-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <input
        type="text"
        value={addressInput}
        onChange={(e) => setAddressInput(e.target.value)}
        placeholder="0x..."
        className="w-full bg-gray-900 text-white rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => {
            setShowAddressPrompt(false);
            setAddressInput('');
            setSelectedCommand(null);
          }}
          className="px-4 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={handleAddressSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          disabled={!addressInput.trim()}
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
)}
</div>
);
};

export default StarknetChat;