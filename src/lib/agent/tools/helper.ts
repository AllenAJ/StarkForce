// src/lib/agent/tools/helper.ts

import { StarknetAgent } from "../starknetAgent";
import { StarknetAgentInterface } from "../../../agents/interfaces/agent.interface";

/**
 * Type guard to check if an agent implements the full StarknetAgent class
 */
export function isStarknetAgentClass(agent: StarknetAgentInterface | StarknetAgent): agent is StarknetAgent {
  return 'validateConfig' in agent;
}

/**
 * Wraps a function to inject the wallet private key from the agent
 */
export const withWalletKey = <T>(
  fn: (params: T, privateKey: string) => Promise<any>,
  agent: StarknetAgentInterface | StarknetAgent,
) => {
  return (params: T) => fn(params, agent.getCredentials().walletPrivateKey);
};