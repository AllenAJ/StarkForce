// src/agents/interfaces/agent.interface.ts

import type { AgentExecutor } from "langchain/agents";
import { AccountManager } from "../../lib/utils/account/AccountManager";
import { TransactionMonitor } from "../../lib/utils/monitoring/TransactionMonitor";
import { ContractInteractor } from "../../lib/utils/contract/ContractInteractor";
import { StarknetAgentConfig } from "../../lib/agent/starknetAgent";

export interface StarknetAgentInterface {
  readonly walletPrivateKey: string;
  readonly AgentExecutor: AgentExecutor;
  readonly anthropicApiKey: string;
  readonly accountManager: AccountManager;
  readonly transactionMonitor: TransactionMonitor;
  readonly contractInteractor: ContractInteractor;
  
  execute(input: string): Promise<unknown>;
  getCredentials(): {
    walletPrivateKey: string;
    anthropicApiKey: string;
  };
}

// This is the actual class implementation interface
export interface StarknetAgentClass extends StarknetAgentInterface {
  new (config: StarknetAgentConfig): StarknetAgentInterface;
  validateConfig(config: StarknetAgentConfig): void;
}

// Keep the existing IAgent interface for backward compatibility
export interface IAgent {
  execute(input: string): Promise<unknown>;
  getCredentials(): {
    walletPrivateKey: string;
    anthropicApiKey: string;
  };
}