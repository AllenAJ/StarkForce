// src/config/env.validation.ts

import { z } from "zod";

export const envSchema = z.object({
  // Server configuration
  PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default("3000"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  API_KEY: z.string().min(1, "API key is missing"),

  // Starknet configuration
  STARKNET_PRIVATE_KEY: z.string().min(1, "Starknet private key is required"),
  PUBLIC_ADDRESS: z.string().min(1, "Public address is required"),
  RPC_URL: z.string().url("Invalid RPC URL"),

  // Service configuration
  ANTHROPIC_API_KEY: z.string().min(1, "Anthropic API key is required"),

  // Pragma configuration
  PRAGMA_CONTRACT_ADDRESS: z
    .string()
    .default("0x2a85bd616f912537c50a49a4076db02c00b29b2cdc8a197ce92ed1837fa875b"),
  PRAGMA_API_KEY: z
    .string()
    .optional()
    .default(""),
  
  // Optional configurations with defaults
  NETWORK: z
    .enum(["mainnet", "testnet", "devnet"])
    .default("testnet"),
  DEBUG: z
    .string()
    .transform((val) => val === "true")
    .default("false"),

  // Optional service URLs
  SERVICE_URL: z
    .string()
    .url("Invalid service URL")
    .optional(),
});

export type EnvConfig = z.infer<typeof envSchema>;