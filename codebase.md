# .eslintrc.json

```json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
}

```

# .gitignore

```
# Dependencies
node_modules/
**/node_modules/
src/frontend/node_modules/

# Build outputs
dist/
build/
**/dist/
**/build/
src/frontend/.next/
*.tgz

# Environment files
.env
.env.local
.env.*.local
.env.development
.env.test
.env.production

# Debug logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# IDE and editor files
.idea/
.vscode/
*.swp
*.swo
.DS_Store
*.sublime-workspace
*.sublime-project
.project
.classpath
.settings/
.vs/

# Testing
coverage/
.nyc_output/
junit.xml

# Cache and temporary files
.npm/
.eslintcache
.stylelintcache
*.tsbuildinfo
.cache/
tmp/
temp/

# Yarn & npm
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
.pnp.*
.npmrc

# Next.js
.next/
.vercel/
next-env.d.ts
```

# .npmignore

```
src/
test/
tsconfig.json
tsconfig.build.json
.gitignore
.env
.env.example
nest-cli.json
coverage/
.github/
.vscode/
*.log
*.tgz
```

# eslint.config.mjs

```mjs
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
];

```

# LICENSE

```
MIT License

Copyright (c) 2025 Kasar Labs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

# module.d.ts

```ts
declare namespace NodeJS {
  export interface ProcessEnv {
    STARKNET_PRIVATE_KEY: string;
    PUBLIC_ADDRESS: string;
    ANTHROPIC_API_KEY: string;
    RPC_URL: string;
    API_KEY: string;
  }
}

```

# nest-cli.json

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "webpack": false
  },
  "generateOptions": {
    "spec": false
  },
  "exclude": [
    "src/frontend/**/*"
  ]
}
```

# package.json

```json
{
  "name": "starknet-agent-kit",
  "version": "0.0.1",
  "description": "A toolkit for creating AI agents that can interact with the Starknet blockchain",
  "author": "Kasar Labs",
  "license": "MIT",
  "main": "dist/main.js",
  "types": "dist/main.d.ts",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kasarlabs/starknet-agent-kit.git"
  },
  "keywords": [
    "starknet",
    "blockchain",
    "AI",
    "agent",
    "nestjs"
  ],
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "build": "rimraf dist && nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest --passWithNoTests",
    "prepare": "npm run build",
    "prepublishOnly": "npm test",
    "version": "npm run format && git add -A src",
    "postversion": "git push && git push --tags"
  },
  "dependencies": {
    "@avnu/avnu-sdk": "^3.0.0",
    "@langchain/anthropic": "^0.3.11",
    "@langchain/core": "^0.3.27",
    "@nestjs/common": "^10.0.0",
    "@nestjs/config": "^3.3.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/platform-fastify": "^10.4.15",
    "@pragmaoracle/solidity-sdk": "^1.0.1",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.1",
    "dotenv": "^16.4.7",
    "ethers": "^6.13.5",
    "helmet": "^8.0.0",
    "langchain": "^0.3.10",
    "reflect-metadata": "^0.2.0",
    "rxjs": "^7.8.1",
    "starknet": "^6.11.0",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.0.0",
    "@nestjs/schematics": "^10.0.0",
    "@nestjs/testing": "^10.0.0",
    "@types/express": "^5.0.0",
    "@types/jest": "^29.5.2",
    "@types/node": "^20.17.12",
    "@types/supertest": "^6.0.0",
    "@typescript-eslint/eslint-plugin": "^8.0.0",
    "@typescript-eslint/parser": "^8.0.0",
    "eslint": "^8.57.1",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "globals": "^15.14.0",
    "jest": "^29.5.0",
    "prettier": "^3.0.0",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.1.0",
    "ts-loader": "^9.4.3",
    "ts-node": "^10.9.1",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.1.3",
    "typescript-eslint": "^8.19.1"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}

```

# README.md

```md
<h1 align="center">
  <img src="https://pbs.twimg.com/profile_images/1834202903189618688/N4J8emeY_400x400.png" width="50"><br>
  StarkAgent 
</h1>

<!-- <p align="center">
  <a href="https://www.npmjs.com/package/starknet-agent-kit">
    <img src="https://img.shields.io/npm/v/starknet-agent-kit.svg" alt="NPM Version" />
  </a>
  <a href="https://github.com/kasarlabs/starknet-agent-kit/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/starknet-agent-kit.svg" alt="License" />
  </a>
  <a href="https://github.com/kasarlabs/starknet-agent-kit/stargazers">
    <img src="https://img.shields.io/github/stars/kasarlabs/starknet-agent-kit.svg" alt="GitHub Stars" />
  </a>
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/node/v/starknet-agent-kit.svg" alt="Node Version" />
  </a>
</p>

A NestJS-based toolkit for creating AI agents that can interact with the Starknet blockchain.

> ⚠️ **Warning**: This kit is currently under development. Please note that sharing sensitive information (private keys, personal data, etc.) with AI models involves inherent security risks.

## Getting Started

\`\`\`bash
npm install @nestjs/common @nestjs/core @nestjs/platform-fastify starknet @langchain/anthropic
\`\`\`

You will need two things:

- A Starknet wallet private key (you can get one from [Argent X](https://www.argent.xyz/argent-x))
- An Anthropic API key

### Basic Usage

\`\`\`typescript
import { StarknetAgent } from "starknet-agent-kit";

const agent = new StarknetAgent({
  anthropicApiKey: process.env.ANTHROPIC_API_KEY,
  walletPrivateKey: process.env.STARKNET_PRIVATE_KEY,
});

// Execute commands in natural language
await agent.execute("transfer 0.1 ETH to 0x123...");

// Get balance
await agent.execute("What is my ETH balance?");

// Swap tokens
await agent.execute("Swap 5 USDC for ETH");

// Create account
await agent.execute("Create a new Argent account");
\`\`\`

## Features

- Retrieve account infos (Balance, public key, etc)
- Create one or multiple accounts (Argent & OpenZeppelin)
- transfer assets between accounts
- Play with DeFi (Swap on Avnu)
- Play with dApps (Create a .stark domain)
- All RPC read methods supported (getBlockNumber, getStorageAt, etc.)

## Environment Variables

Create a `.env` file with the following variables:

\`\`\`env
# Your Starknet wallet private key (required)
STARKNET_PRIVATE_KEY=your_private_key

# Your Starknet public address (required)
PUBLIC_ADDRESS=your_public_address

# Your Anthropic API key for AI functionality (required)
# Get it from: https://console.anthropic.com/
ANTHROPIC_API_KEY=your_anthropic_api_key

# Your Starknet RPC URL (required)
# You can use public endpoints or get a dedicated one from providers like Infura
RPC_URL=your_rpc_url

# Your custom API key for securing the endpoints (required)
# Generate a strong random string to protect your API endpoints
# This key must be included in the x-api-key header when making requests to your API
# You can generate a secure random string using these commands:
#   - Linux/macOS: openssl rand -hex 32
#   - Windows (PowerShell): -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
API_KEY=your_api_key
\`\`\`

## Local Development

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/starknet-agent-kit.git
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Start the development server:

\`\`\`bash
npm run start:dev
\`\`\`

The API will be available at `http://localhost:3000/api`.

## API Endpoints

### POST /api/agent/request

Make requests to the Starknet agent.

Request body:

\`\`\`json
{
  "request": "Your natural language request here"
}
\`\`\`

Headers:

\`\`\`
x-api-key: your_api_key
\`\`\`

## Tools

All Langchain tools are available to be imported and used directly:

\`\`\`typescript
import { getBalance, transfer, swapTokens } from "starknet-agent-kit";
\`\`\`

## Testing

To run tests:

\`\`\`bash
npm run test
\`\`\`

For E2E tests:

\`\`\`bash
npm run test:e2e
\`\`\` -->

```

# src/agents/agents.controller.ts

```ts
import {
  Body,
  Controller,
  Get,
  OnModuleInit,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { AgentRequestDTO } from "./dto/agents";
import { StarknetAgent } from "../lib/agent/starknetAgent";
import { AgentService } from "./services/agent.service";
import { ConfigurationService } from "../config/configuration";
import { AgentResponseInterceptor } from "src/lib/interceptors/response";

@Controller("agent")
@UseInterceptors(AgentResponseInterceptor)
export class AgentsController implements OnModuleInit {
  private agent: StarknetAgent;

  constructor(
    private readonly agentService: AgentService,
    private readonly config: ConfigurationService,
  ) {}

  onModuleInit() {
    this.agent = new StarknetAgent({
      anthropicApiKey: this.config.anthropic.apiKey,
      walletPrivateKey: this.config.starknet.privateKey,
    });
  }

  @Post("request")
  async handleUserRequest(@Body() userRequest: AgentRequestDTO) {
    return await this.agentService.handleUserRequest(this.agent, userRequest);
  }

  @Get("status")
  async getAgentStatus() {
    return await this.agentService.getAgentStatus(this.agent);
  }

  
}

```

# src/agents/agents.module.ts

```ts
import { Module } from "@nestjs/common";
import { AgentService } from "./services/agent.service";
import { AgentsController } from "./agents.controller";
import { ConfigModule } from "../config/config.module";

@Module({
  imports: [ConfigModule],
  providers: [AgentService],
  controllers: [AgentsController],
  exports: [AgentService],
})
export class AgentsModule {}

```

# src/agents/controllers/pragma.controller.ts

```ts
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ConfigurationService } from '../../config/configuration';
import { AgentResponseInterceptor } from '../../lib/interceptors/response';

@Controller('pragma')
@UseInterceptors(AgentResponseInterceptor)
export class PragmaController {
  constructor(private readonly config: ConfigurationService) {}

  @Get('price')
  async getPriceFeeds() {
    try {
      // Mock data for now - you'll need to add the actual Pragma integration
      const mockPrices = [
        {
          pair: 'BTC/USD',
          price: '34500.00',
          timestamp: Date.now(),
        },
        {
          pair: 'ETH/USD',
          price: '1850.00',
          timestamp: Date.now(),
        }
      ];

      return {
        status: "success",
        data: mockPrices
      };

    } catch (error) {
      console.error('Error fetching Pragma price feeds:', error);
      throw error;
    }
  }
}
```

# src/agents/dto/agents.ts

```ts
import { IsNotEmpty } from "class-validator";

export class AgentRequestDTO {
  @IsNotEmpty()
  request: string;
}

```

# src/agents/dto/createAgent.ts

```ts
import { IsNotEmpty } from "class-validator";

export class CreateAgentDTO {
  @IsNotEmpty()
  walletPrivateKey: string;
  @IsNotEmpty()
  anthropicApiKey: string;
  @IsNotEmpty()
  agentName: string;
}

```

# src/agents/interfaces/agent-service.interface.ts

```ts
import { AgentRequestDTO } from "../dto/agents";
import { IAgent } from "./agent.interface";

export interface AgentExecutionResponse {
  status: "success" | "failure";
  data?: unknown;
  error?: {
    message: string;
    code?: string;
    details?: unknown;
  };
}

export interface IAgentService {
  handleUserRequest(
    agent: IAgent,
    userRequest: AgentRequestDTO,
  ): Promise<AgentExecutionResponse>;
  getAgentStatus(agent: IAgent): Promise<{
    isReady: boolean;
    walletConnected: boolean;
    apiKeyValid: boolean;
  }>;
}

```

# src/agents/interfaces/agent.interface.ts

```ts
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
```

# src/agents/services/agent.service.ts

```ts
import { Injectable, Logger } from "@nestjs/common";
import { ConfigurationService } from "../../config/configuration";
import {
  AgentExecutionError,
  StarknetTransactionError,
} from "../../common/errors";
import {
  IAgentService,
  AgentExecutionResponse,
} from "../interfaces/agent-service.interface";
import { IAgent } from "../interfaces/agent.interface";
import { AgentRequestDTO } from "../dto/agents";

@Injectable()
export class AgentService implements IAgentService {
  private readonly logger = new Logger(AgentService.name);

  constructor(private readonly config: ConfigurationService) {}

  async handleUserRequest(
    agent: IAgent,
    userRequest: AgentRequestDTO,
  ): Promise<AgentExecutionResponse> {
    this.logger.debug({
      message: "Processing agent request",
      request: userRequest.request,
    });

    try {
      const result = await agent.execute(userRequest.request);

      this.logger.debug({
        message: "Agent request processed successfully",
        result,
      });

      return {
        status: "success",
        data: result,
      };
    } catch (error) {
      this.logger.error("Error processing agent request", {
        error,
        request: userRequest.request,
      });

      if (error.message?.includes("transaction")) {
        throw new StarknetTransactionError("Failed to execute transaction", {
          originalError: error.message,
        });
      }

      throw new AgentExecutionError("Failed to process agent request", {
        originalError: error.message,
      });
    }
  }

  async getAgentStatus(agent: IAgent): Promise<{
    isReady: boolean;
    walletConnected: boolean;
    apiKeyValid: boolean;
  }> {
    try {
      const credentials = agent.getCredentials();

      return {
        isReady: Boolean(
          credentials.walletPrivateKey && credentials.anthropicApiKey,
        ),
        walletConnected: Boolean(credentials.walletPrivateKey),
        apiKeyValid: Boolean(credentials.anthropicApiKey),
      };
    } catch (error) {
      this.logger.error("Error checking agent status", error);
      return {
        isReady: false,
        walletConnected: false,
        apiKeyValid: false,
      };
    }
  }
}

```

# src/app.module.ts

```ts
import { Module } from "@nestjs/common";
import { AgentsModule } from "./agents/agents.module";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { AgentResponseInterceptor } from "./lib/interceptors/response";
import { ApiKeyGuard } from "./lib/guard/ApikeyGuard";
import { ConfigModule } from "./config/config.module";
import { PragmaController } from './agents/controllers/pragma.controller';

@Module({
  imports: [ConfigModule, AgentsModule],
  controllers: [
    PragmaController
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: AgentResponseInterceptor,
    },
  ],
})
export class AppModule {}

```

# src/common/errors/agent.errors.ts

```ts
import { BaseError } from "./base.error";
import { ErrorType, ErrorMetadata } from "./error.types";

export class AgentExecutionError extends BaseError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorType.AGENT_EXECUTION_ERROR, message, metadata);
  }
}

export class AgentInitializationError extends BaseError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorType.AGENT_INITIALIZATION_ERROR, message, metadata);
  }
}

```

# src/common/errors/application.errors.ts

```ts
import { BaseError } from "./base.error";
import { ErrorType, ErrorMetadata } from "./error.types";

export class ValidationError extends BaseError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorType.VALIDATION_ERROR, message, metadata);
  }
}

export class NotFoundError extends BaseError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorType.NOT_FOUND, message, metadata);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorType.UNAUTHORIZED, message, metadata);
  }
}

export class ForbiddenError extends BaseError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorType.FORBIDDEN, message, metadata);
  }
}

```

# src/common/errors/base.error.ts

```ts
import { ErrorType, ErrorMetadata, ErrorResponse } from "./error.types";

export class BaseError extends Error {
  constructor(
    public readonly type: ErrorType,
    message: string,
    public readonly metadata?: ErrorMetadata,
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON(): ErrorResponse {
    return {
      type: this.type,
      message: this.message,
      metadata: this.metadata,
    };
  }
}

```

# src/common/errors/error.types.ts

```ts
export enum ErrorType {
  // Application Errors
  VALIDATION_ERROR = "VALIDATION_ERROR",
  NOT_FOUND = "NOT_FOUND",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",

  // Starknet Errors
  STARKNET_TRANSACTION_ERROR = "STARKNET_TRANSACTION_ERROR",
  STARKNET_RPC_ERROR = "STARKNET_RPC_ERROR",

  // Agent Errors
  AGENT_EXECUTION_ERROR = "AGENT_EXECUTION_ERROR",
  AGENT_INITIALIZATION_ERROR = "AGENT_INITIALIZATION_ERROR",
}

export interface ErrorMetadata {
  [key: string]: unknown;
}

export interface ErrorResponse {
  type: ErrorType;
  message: string;
  metadata?: ErrorMetadata;
}

```

# src/common/errors/index.ts

```ts
export * from "./error.types";
export * from "./base.error";
export * from "./application.errors";
export * from "./starknet.errors";
export * from "./agent.errors";

```

# src/common/errors/starknet.errors.ts

```ts
import { BaseError } from "./base.error";
import { ErrorType, ErrorMetadata } from "./error.types";

export class StarknetTransactionError extends BaseError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorType.STARKNET_TRANSACTION_ERROR, message, metadata);
  }
}

export class StarknetRpcError extends BaseError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorType.STARKNET_RPC_ERROR, message, metadata);
  }
}

```

# src/common/filters/exception.filter.ts

```ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { FastifyReply } from "fastify";
import { BaseError } from "../errors/base.error";
import { ConfigurationService } from "../../config/configuration";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  constructor(private readonly config: ConfigurationService) {}

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();

    this.logger.error("Exception caught:", {
      name: exception.name,
      message: exception.message,
      stack: exception.stack,
    });

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      return response.status(status).send({
        statusCode: status,
        message: exception.message,
        error: exception.name,
      });
    }

    if (exception instanceof BaseError) {
      const errorResponse = exception.toJSON();
      return response.status(HttpStatus.BAD_REQUEST).send({
        ...errorResponse,
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }

    // Default error response for unhandled errors
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: this.config.isDevelopment
        ? exception.message
        : "Internal server error",
      error: exception.name,
    });
  }
}

```

# src/common/interceptors/error-logging.interceptor.ts

```ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ErrorLoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        this.logger.error("Error caught in interceptor:", {
          name: error.name,
          message: error.message,
          stack: error.stack,
        });

        return throwError(() => error);
      }),
    );
  }
}

export default ErrorLoggingInterceptor;

```

# src/config/config.module.ts

```ts
import { Global, Module } from "@nestjs/common";
import { ConfigurationService } from "./configuration";

@Global()
@Module({
  providers: [
    {
      provide: ConfigurationService,
      useValue: new ConfigurationService(process.env),
    },
  ],
  exports: [ConfigurationService],
})
export class ConfigModule {}

```

# src/config/configuration.ts

```ts
// src/config/configuration.ts

import { envSchema, type EnvConfig } from "./env.validation";

export class ConfigurationService {
  private readonly config: EnvConfig;

  constructor(env: Record<string, unknown>) {
    const result = envSchema.safeParse(env);

    if (!result.success) {
      console.error(
        "❌ Invalid environment variables:",
        JSON.stringify(result.error.format(), null, 2),
      );
      throw new Error("Invalid environment variables");
    }

    this.config = result.data;
  }

  get port(): number {
    return this.config.PORT;
  }

  get nodeEnv(): string {
    return this.config.NODE_ENV;
  }

  get apiKey(): string {
    return this.config.API_KEY;
  }

  get starknet() {
    return {
      privateKey: this.config.STARKNET_PRIVATE_KEY,
      publicAddress: this.config.PUBLIC_ADDRESS,
      rpcUrl: this.config.RPC_URL,
    };
  }

  get anthropic() {
    return {
      apiKey: this.config.ANTHROPIC_API_KEY,
    };
  }

  get pragmaConfig() {
    return {
      contractAddress: this.config.PRAGMA_CONTRACT_ADDRESS,
      apiKey: this.config.PRAGMA_API_KEY,
      network: this.config.NETWORK
    };
  }

  get pragmaContractAddress(): string {
    return this.config.PRAGMA_CONTRACT_ADDRESS;
  }

  get isDevelopment(): boolean {
    return this.config.NODE_ENV === "development";
  }

  get isProduction(): boolean {
    return this.config.NODE_ENV === "production";
  }

  get isTest(): boolean {
    return this.config.NODE_ENV === "test";
  }

  get debug(): boolean {
    return this.config.DEBUG;
  }

  get serviceUrl(): string | undefined {
    return this.config.SERVICE_URL;
  }

  get network(): string {
    return this.config.NETWORK;
  }

  get fullConfig(): EnvConfig {
    return this.config;
  }

  // Helper method to validate configuration
  validate(): boolean {
    if (!this.config.API_KEY) {
      throw new Error("API_KEY is required");
    }
    if (!this.config.STARKNET_PRIVATE_KEY) {
      throw new Error("STARKNET_PRIVATE_KEY is required");
    }
    if (!this.config.PUBLIC_ADDRESS) {
      throw new Error("PUBLIC_ADDRESS is required");
    }
    if (!this.config.RPC_URL) {
      throw new Error("RPC_URL is required");
    }
    if (!this.config.ANTHROPIC_API_KEY) {
      throw new Error("ANTHROPIC_API_KEY is required");
    }
    return true;
  }

  // Helper method to get a specific config value with type safety
  get<K extends keyof EnvConfig>(key: K): EnvConfig[K] {
    return this.config[key];
  }

  // Helper method to check if a configuration exists
  has(key: keyof EnvConfig): boolean {
    return key in this.config;
  }

  // Format configuration for logging (hiding sensitive values)
  toSafeLog(): Record<string, unknown> {
    return {
      PORT: this.port,
      NODE_ENV: this.nodeEnv,
      API_KEY: "***",
      STARKNET_PRIVATE_KEY: "***",
      PUBLIC_ADDRESS: this.config.PUBLIC_ADDRESS,
      RPC_URL: this.config.RPC_URL,
      ANTHROPIC_API_KEY: "***",
      PRAGMA_CONTRACT_ADDRESS: this.config.PRAGMA_CONTRACT_ADDRESS,
      PRAGMA_API_KEY: "***",
      NETWORK: this.config.NETWORK,
      DEBUG: this.config.DEBUG,
      SERVICE_URL: this.config.SERVICE_URL,
    };
  }
}
```

# src/config/env.validation.ts

```ts
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
```

# src/frontend/next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

# src/frontend/next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:3000/api/:path*',
      },
    ]
  }
}

module.exports = nextConfig
```

# src/frontend/package.json

```json
{
    "name": "starknet-agent-frontend",
    "version": "0.1.0",
    "private": true,
    "scripts": {
        "dev": "next dev -p 3001",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    },
    "dependencies": {
        "@radix-ui/react-dialog": "^1.1.4",
        "@radix-ui/react-dropdown-menu": "^2.1.4",
        "lucide-react": "^0.330.0",
        "next": "14.1.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "recharts": "^2.15.0",
        "starknet": "^6.11.0"
    },
    "devDependencies": {
        "@types/node": "^20.17.12",
        "@types/react": "^18.2.48",
        "@types/react-dom": "^18.2.18",
        "@typescript-eslint/eslint-plugin": "^6.20.0",
        "@typescript-eslint/parser": "^6.20.0",
        "autoprefixer": "^10.4.17",
        "postcss": "^8.4.35",
        "tailwindcss": "^3.4.1",
        "typescript": "^5.3.3"
    }
}

```

# src/frontend/postcss.config.js

```js
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

# src/frontend/public/assets/char1.png

This is a binary file of the type: Image

# src/frontend/public/assets/char2.png

This is a binary file of the type: Image

# src/frontend/public/assets/char3.png

This is a binary file of the type: Image

# src/frontend/public/assets/char4.png

This is a binary file of the type: Image

# src/frontend/public/assets/char5.png

This is a binary file of the type: Image

# src/frontend/public/assets/char6.png

This is a binary file of the type: Image

# src/frontend/src/components/AppLayout.tsx

```tsx
import React, { useState } from 'react';
import { Layout, MessageCircle } from 'lucide-react';
import StarknetChat from './StarknetChat';
import StarknetDashboard from './StarknetChat';

const AppLayout = () => {
  const [viewMode, setViewMode] = useState('dashboard'); // or 'chat'

  return (
    <div className="min-h-screen bg-black">
      {/* Mode Toggle */}


      {/* View Content */}
      <div className="transition-all duration-300">
        {viewMode === 'dashboard' ? (
          <StarknetDashboard />
        ) : (
          <StarknetChat />
        )}
      </div>
    </div>
  );
};

export default AppLayout;
```

# src/frontend/src/components/StarknetChat.tsx

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { Settings, Wallet, Send, LineChart, X, ChevronDown } from 'lucide-react';
import { Contract, RpcProvider } from 'starknet';

// Types from original codebase
interface ChatMessage {
  type: 'user' | 'agent' | 'error';
  content: string;
  timestamp: string;
  metadata?: {
    agentType?: string;
    subType?: string;
  };
}

interface QuickCommand {
  label: string;
  command: string;
  requiresAddress?: boolean;
  addressPrompt?: string;
  group?: string;
  description?: string;
}

interface SystemEvent {
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'error';
}



// Format message content with better styling
const formatMessageContent = (content: string): React.ReactNode => {
  try {
    // Try to parse the content if it's JSON
    const parsed = JSON.parse(content);
    
    // If it's in our standard API response format
    if (parsed.input && parsed.output?.[0]?.text) {
      let text = parsed.output[0].text.trim();
      
      // Check if the text contains key-value pairs we want to highlight
      if (text.includes("Public Key:") || text.includes("Address:") || text.includes("Transaction Hash:")) {
        // Split the text into lines
        const lines = text.split('\n').map((line: string): React.ReactNode => {
          // Highlight specific data points
          if (line.includes("Public Key:") || 
              line.includes("Address:") || 
              line.includes("Private Key:") ||
              line.includes("Transaction Hash:") ||
              line.includes("Precalculated Address:")) {
            const [label, value] = line.split(':').map((s: string) => s.trim());
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
    
    // If it's a structured response from our API
    if (parsed.status === "success") {
      return (
        <div>
          {parsed.transaction_hash && (
            <div className="my-2 p-3 bg-gray-800/50 rounded-lg">
              <div className="text-gray-400 text-sm mb-1">Transaction Hash:</div>
              <a 
                href={`https://starkscan.co/tx/${parsed.transaction_hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-blue-400 hover:underline break-all"
              >
                {parsed.transaction_hash}
              </a>
            </div>
          )}
          {parsed.message && (
            <div className="my-2">{parsed.message}</div>
          )}
        </div>
      );
    }
    
    // Return the original content if it doesn't match our format
    return content;
  } catch {
    // If parsing fails, return the original content
    return content;
  }
};

const StarknetChat = () => {
  // State management
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAddressPrompt, setShowAddressPrompt] = useState(false);
  const [addressInput, setAddressInput] = useState('');
  const [selectedCommand, setSelectedCommand] = useState<QuickCommand | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Account');
  const [publicAddress, setPublicAddress] = useState<string>('');
  const [systemEvents, setSystemEvents] = useState<SystemEvent[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  // Command categories from original codebase
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
    ],
    "Network": [
      { label: "Latest Block", command: "Get the latest block number" },
      { label: "Chain ID", command: "Get the chain ID" },
      { label: "Syncing Status", command: "Check network syncing status" },
      { label: "Spec Version", command: "Get the spec version" },
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

  // Agents with their specific commands
  const agents = [
    {
      title: 'Account Guardian',
      type: 'AI Assistant',
      description: 'Specializes in account creation and management',
      image: '/assets/char1.png',
      commands: [
        { label: "Create Argent Account", command: "Create a new Argent account" },
        { label: "Create OZ Account", command: "Create a new OpenZeppelin account" },
        { label: "Deploy Argent Account", command: "Deploy my Argent account" },
        { label: "Deploy OZ Account", command: "Deploy my OpenZeppelin account" },
        { label: "Get My Address", command: "What is my wallet address?" }
      ]
    },
    {
      title: 'Token Sentinel',
      type: 'AI Assistant',
      description: 'Monitors and manages token balances and transfers',
      image: '/assets/char2.png',
      commands: [
        { label: "Check ETH Balance", command: "What is my ETH balance?" },
        { label: "Check USDC Balance", command: "What is my USDC balance?" },
        { label: "Check USDT Balance", command: "What is my USDT balance?" },
        { label: "Check STRK Balance", command: "What is my STRK balance?" },
        { 
          label: "Check Other Wallet", 
          command: "Get ETH balance of {address}",
          requiresAddress: true,
          addressPrompt: "Enter the wallet address to check:"
        }
      ]
    },
    {
      title: 'Swap Sage',
      type: 'AI Assistant',
      description: 'Expert in token swaps and DeFi operations',
      image: '/assets/char3.png',
      commands: [
        { label: "Swap ETH to USDC", command: "Swap 0.1 ETH for USDC" },
        { label: "Swap USDC to ETH", command: "Swap 100 USDC for ETH" },
        { label: "Check Swap Rate", command: "Get current ETH/USDC swap rate" },
        { label: "Estimate Swap Fees", command: "Estimate fees for swapping 0.1 ETH to USDC" }
      ]
    },
    {
      title: 'Transfer Oracle',
      type: 'AI Assistant',
      description: 'Handles secure token transfers and simulations',
      image: '/assets/char4.png',
      commands: [
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
        }
      ]
    },
    {
      title: 'Network Seer',
      type: 'AI Assistant',
      description: 'Provides insights into network status and metrics',
      image: '/assets/char5.png',
      commands: [
        { label: "Latest Block", command: "Get the latest block number" },
        { label: "Chain ID", command: "Get the chain ID" },
        { label: "Syncing Status", command: "Check network syncing status" },
        { label: "Spec Version", command: "Get the spec version" },
        { label: "Network Stats", command: "Get current network statistics" }
      ]
    },
    {
      title: 'Contract Sage',
      type: 'AI Assistant',
      description: 'Analyzes and interacts with smart contracts',
      image: '/assets/char6.png',
      commands: [
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
        }
      ]
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setPublicAddress(process.env.NEXT_PUBLIC_PUBLIC_ADDRESS || '');

  }, [messages]);

  // Initialize system
  useEffect(() => {
    addSystemEvent('Initializing Starknet agents...', 'info');
    setTimeout(() => {
      addSystemEvent('Agents initialized successfully', 'success');
      addSystemEvent('Ready for Starknet operations', 'info');
    }, 1000);
  }, []);

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

  // Handle message submission
  const handleSubmit = async (e?: React.FormEvent, commandOverride?: string) => {
    if (e) e.preventDefault();
    const messageToSend = commandOverride || inputMessage;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      type: 'user',
      content: messageToSend,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    addSystemEvent('Processing request...', 'info');

    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      if (!apiKey) throw new Error('API key not configured');

      const response = await fetch('/api/agent/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify({ request: messageToSend })
      });

      const data = await response.json();
      
      const agentMessage: ChatMessage = {
        type: 'agent',
        content: data.output?.[0]?.text || 'Error processing request',
        timestamp: new Date().toLocaleTimeString(),
        metadata: {
          agentType: 'Starknet Agent',
          subType: 'response'
        }
      };

      setMessages(prev => [...prev, agentMessage]);
      addSystemEvent('Request processed successfully', 'success');
    } catch (error) {
      const errorMessage: ChatMessage = {
        type: 'error',
        content: error instanceof Error ? error.message : 'Unknown error occurred',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, errorMessage]);
      addSystemEvent('Error processing request', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to add system events
  const addSystemEvent = (message: string, type: 'info' | 'success' | 'error') => {
    setSystemEvents(prev => [...prev, {
      message,
      timestamp: new Date().toLocaleTimeString(),
      type
    }]);
  };

  return (
    <div className="flex h-screen bg-[#0B1120] text-gray-100">
      {/* Left Sidebar - Available Agents and Commands */}
      <div className="w-80 bg-[#0D1424] border-r border-gray-800">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold">Available Agents</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-64px)]">
          {agents.map((agent, index) => (
            <div key={index} className="border-b border-gray-800/50">
              <button
                onClick={() => setSelectedCategory(selectedCategory === agent.title ? null : agent.title)}
                className="w-full p-4 hover:bg-gray-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative">
                    <img
                      src={agent.image}
                      alt={agent.title}
                      className="rounded-full"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{agent.title}</h3>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          selectedCategory === agent.title ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <p className="text-sm text-gray-400">{agent.type}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-400 text-left">{agent.description}</p>
              </button>
              
              {selectedCategory === agent.title && (
                <div className="pb-2">
                  <div className="px-4 py-2 border-y border-gray-800/50 bg-gray-900/50">
                    <h4 className="text-sm font-medium text-gray-400">Commands</h4>
                  </div>
                  {agent.commands.map((cmd, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCommand(cmd);
                      }}
                      className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-white hover:bg-gray-800/50"
                    >
                      {cmd.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 bg-[#1E293B] text-gray-100 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm font-mono">
              {publicAddress 
                ? `${publicAddress.slice(0, 30)}${publicAddress.slice(-40)}`
                : 'Not Connected'}
            </span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start gap-4">
              {message.type === 'agent' && (
                <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0" />
              )}
              <div className={`flex-1 ${message.type === 'user' ? 'ml-auto' : ''}`}>
                {message.metadata && (
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{message.metadata.agentType}</span>
                    {message.metadata.subType && (
                      <>
                        <span>•</span>
                        <span>{message.metadata.subType}</span>
                      </>
                    )}
                  </div>
                )}
                <div className={`mt-1 p-4 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-blue-500 ml-auto' 
                    : message.type === 'error'
                    ? 'bg-red-500/20 border border-red-500/40'
                    : 'bg-gray-800/50'
                }`}>
                  {formatMessageContent(message.content)}
                </div>
                <div className="mt-1 text-sm text-gray-500">{message.timestamp}</div>
              </div>
              {message.type === 'user' && (
                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0" />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-800 p-4">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-800/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Right Sidebar - System Events */}
      <div className="fixed right-0 top-0 h-screen w-80 bg-[#0D1424] border-l border-gray-800 overflow-y-auto">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold">System Events</h2>
        </div>
        <div className="p-4 space-y-4">
          {systemEvents.map((event, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg text-sm ${
                event.type === 'success'
                  ? 'bg-green-500/10 text-green-400'
                  : event.type === 'error'
                  ? 'bg-red-500/10 text-red-400'
                  : 'bg-blue-500/10 text-blue-400'
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{event.message}</span>
                <span className="text-xs opacity-60">{event.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Address Input Modal */}
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
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
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
```

# src/frontend/src/pages/_app.tsx

```tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

# src/frontend/src/pages/index.tsx

```tsx
import AppLayout from '@/components/AppLayout'

export default function Home() {
  return <AppLayout />
}
```

# src/frontend/src/styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# src/frontend/tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
```

# src/frontend/tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

# src/lib/agent/agent.ts

```ts
// src/lib/agent/agent.ts
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createToolCallingAgent, AgentExecutor } from "langchain/agents";
import { ChatAnthropic } from "@langchain/anthropic";
import { SystemMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { createTools } from "./tools.js";
import { StarknetAgentInterface } from "../../agents/interfaces/agent.interface";

// Store chat history
let chatHistory: (HumanMessage | AIMessage)[] = [];

const systemMessage = new SystemMessage(`
  You are a helpful Starknet AI assistant with autonomous analysis capabilities and memory of our conversation. You can:
  1. Remember our previous interactions and context
  2. Analyze wallet states and balances
  3. Identify opportunities based on available assets
  4. Make recommendations for optimal asset utilization
  5. Execute suggested actions upon user approval
  
  When asked about possibilities or opportunities:
  1. First analyze the wallet state using analyze_wallet_opportunities
  2. Present findings in a clear, structured way
  3. Explain the risks and potential benefits of each opportunity
  4. Offer to execute any of the suggested actions upon user confirmation
  
  Response formats ⚡:
  Return transaction hashes in this format: https://starkscan.com/tx/{transaction_hash}
  
  Guidelines:
  - Keep technical explanations under 2-3 lines
  - Use bullet points for clarity
  - Focus on actionable next steps
  - No lengthy apologies or explanations
  - Maintain context from previous interactions
`);

export const prompt = ChatPromptTemplate.fromMessages([
  systemMessage,
  ...chatHistory,
  ["user", "{input}"],
  ["placeholder", "{agent_scratchpad}"],
]);

export const createAgent = (agent: StarknetAgentInterface, anthropicApiKey: string) => {
  const model = new ChatAnthropic({
    modelName: "claude-3-5-sonnet-latest",
    anthropicApiKey: anthropicApiKey,
  });

  const tools = createTools(agent);

  const toolAgent = createToolCallingAgent({
    llm: model,
    tools,
    prompt,
  });

  const agentExecutor = new AgentExecutor({
    agent: toolAgent,
    tools,
  });

  // Wrap the execute method to maintain chat history
  const originalExecute = agentExecutor.invoke.bind(agentExecutor);
  agentExecutor.invoke = async (input: any) => {
    const result = await originalExecute(input);
    
    // Add the exchange to chat history
    chatHistory.push(new HumanMessage(input.input));
    chatHistory.push(new AIMessage(result.output));
    
    // Limit history to last 10 exchanges to prevent context overflow
    if (chatHistory.length > 20) {
      chatHistory = chatHistory.slice(-20);
    }
    
    return result;
  };

  return agentExecutor;
};
```

# src/lib/agent/method/account/createAccount.ts

```ts
import { ec, stark, hash, CallData } from "starknet";
import { StarknetAgent } from "../../starknetAgent";
import { AccountDetails } from "../../../utils/types";

export const CreateOZAccount = async () => {
  try {
    const accountManager = new StarknetAgent({
      walletPrivateKey: process.env.STARKNET_PRIVATE_KEY,
      anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    }).accountManager;

    const accountDetails = await accountManager.createAccount();

    return JSON.stringify({
      status: "success",
      wallet: "Open Zeppelin",
      new_account_publickey: accountDetails.publicKey,
      new_account_privatekey: accountDetails.privateKey,
      precalculate_address: accountDetails.address,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const CreateArgentAccount = async () => {
  try {
    const argentXaccountClassHash =
      "0x1a736d6ed154502257f02b1ccdf4d9d1089f80811cd6acad48e6b6a9d1f2003";

    // Generate public and private key pair.
    const privateKeyAX = stark.randomAddress();
    const starkKeyPubAX = ec.starkCurve.getStarkKey(privateKeyAX);

    // Calculate future address of the ArgentX account
    const AXConstructorCallData = CallData.compile({
      owner: starkKeyPubAX,
      guardian: "0x0",
    });
    const AXcontractAddress = hash.calculateContractAddressFromHash(
      starkKeyPubAX,
      argentXaccountClassHash,
      AXConstructorCallData,
      0,
    );
    return JSON.stringify({
      status: "success",
      new_account_publickey: starkKeyPubAX,
      new_account_privatekey: privateKeyAX,
      precalculate_address: AXcontractAddress,
      wallet: "Argent",
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/account/deployAccount.ts

```ts
import { RPC_URL } from "src/lib/constant";
import {
  Account,
  RpcProvider,
  hash,
  CallData,
  constants,
  TransactionFinalityStatus,
} from "starknet";
import { StarknetAgent } from "../../starknetAgent";
import { AccountDetails } from "src/lib/utils/types";

const provider = new RpcProvider({ nodeUrl: RPC_URL });

export type DeployOZAccountParams = {
  publicKey: string;
  privateKey: string;
};

export const DeployOZAccount = async (params: DeployOZAccountParams) => {
  try {
    const agent = new StarknetAgent({
      walletPrivateKey: process.env.STARKNET_PRIVATE_KEY,
      anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    });

    const accountDetails: AccountDetails = {
      publicKey: params.publicKey,
      privateKey: params.privateKey,
      address: "", // Will be calculated during deployment
      deployStatus: false,
    };

    // Calculate deployment fee with max fee estimation
    const { suggestedMaxFee } =
      await agent.accountManager.estimateAccountDeployFee(accountDetails);
    console.log("Estimated max deployment fee:", suggestedMaxFee);

    // Deploy the account with the estimated fee
    const deployResponse =
      await agent.accountManager.deployAccount(accountDetails);

    if (!deployResponse.transactionHash) {
      throw new Error("No transaction hash returned from deployment");
    }

    // Wait for transaction confirmation
    const receipt = await provider.waitForTransaction(
      deployResponse.transactionHash,
      {
        retryInterval: 5000,
        successStates: [TransactionFinalityStatus.ACCEPTED_ON_L1],
      },
    );

    return {
      status: "success",
      wallet: "Open Zeppelin",
      transaction_hash: deployResponse.transactionHash,
      receipt: receipt,
    };
  } catch (error) {
    return {
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export type DeployArgentParams = {
  publicKeyAX: string;
  privateKeyAX: string;
};

export const DeployArgentAccount = async (params: DeployArgentParams) => {
  try {
    // Use a specific class hash for Argent account
    const argentXaccountClassHash =
      "0x1a736d6ed154502257f02b1ccdf4d9d1089f80811cd6acad48e6b6a9d1f2003";

    // Prepare constructor calldata
    const constructorCalldata = CallData.compile({
      owner: params.publicKeyAX,
      guardian: "0x0", // Use hex string for consistency
    });

    // Calculate the contract address
    const contractAddress = hash.calculateContractAddressFromHash(
      params.publicKeyAX,
      argentXaccountClassHash,
      constructorCalldata,
      0,
    );

    // Create account instance
    const account = new Account(provider, contractAddress, params.privateKeyAX);

    // Prepare deployment payload
    const deployAccountPayload = {
      classHash: argentXaccountClassHash,
      constructorCalldata: constructorCalldata,
      contractAddress: contractAddress,
      addressSalt: params.publicKeyAX,
    };

    // Deploy the account
    const { transaction_hash, contract_address } =
      await account.deployAccount(deployAccountPayload);

    // Wait for deployment confirmation
    await provider.waitForTransaction(transaction_hash, {
      retryInterval: 5000,
      successStates: [TransactionFinalityStatus.ACCEPTED_ON_L1],
    });

    return {
      status: "success",
      wallet: "Argent X",
      transaction_hash,
      contract_address,
    };
  } catch (error) {
    return {
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

```

# src/lib/agent/method/account/estimateAccountDeployFee.ts

```ts
import { Account, EstimateFee, constants } from "starknet";
import { rpcProvider } from "../../starknetAgent";

export type EstimateAccountDeployFeeParams = {
  classHash: string;
  constructorCalldata?: string[];
  addressSalt?: string;
};

export const estimateAccountDeployFee = async (
  params: EstimateAccountDeployFeeParams,
  privateKey: string,
) => {
  try {
    const accountAddress = process.env.PUBLIC_ADDRESS;
    if (!accountAddress) {
      throw new Error("Account address not configured");
    }

    const account = new Account(rpcProvider, accountAddress, privateKey);

    // Estimate fee for deployment
    const estimatedFee = await account.estimateAccountDeployFee({
      classHash: params.classHash,
      constructorCalldata: params.constructorCalldata || [],
      addressSalt: params.addressSalt || "0x0",
      contractAddress: constants.ZERO.toString(),
    });

    return JSON.stringify({
      status: "success",
      maxFee: estimatedFee.suggestedMaxFee.toString(),
      overallFee: estimatedFee.overall_fee.toString(),
      gasPrice: estimatedFee.gas_price.toString(),
      gasUsage: estimatedFee.gas_consumed.toString(),
      unit: "wei",
      resourceBounds: {
        l1_gas: {
          maxAmount: estimatedFee.resourceBounds.l1_gas.max_amount.toString(),
          maxPricePerUnit:
            estimatedFee.resourceBounds.l1_gas.max_price_per_unit.toString(),
        },
        l2_gas: {
          maxAmount: estimatedFee.resourceBounds.l2_gas.max_amount.toString(),
          maxPricePerUnit:
            estimatedFee.resourceBounds.l2_gas.max_price_per_unit.toString(),
        },
      },
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/account/getAddress.ts

```ts
import { rpcProvider } from "../../starknetAgent";

export const getAddress = async () => {
  try {
    const accountAddress = process.env.PUBLIC_ADDRESS;

    if (!accountAddress) {
      throw new Error(
        "No public address found. Please set PUBLIC_ADDRESS in your .env file!",
      );
    }

    return JSON.stringify({
      status: "success",
      accountAddress,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/account/signMessage.ts

```ts
export const signMessage = async (): Promise<string> => {
  // Implement the verification logic here
  return "Message signed";
};

```

# src/lib/agent/method/account/verifyMessage.ts

```ts
export const verifyMessage = async (): Promise<string> => {
  // Implement the verification logic here
  return "Message verified";
};

```

# src/lib/agent/method/contract/declareContract.ts

```ts
// method/contract/declareContract.ts
import { Contract, Account, CompiledContract } from "starknet";
import { rpcProvider } from "../../starknetAgent";

export type DeclareContractParams = {
  contract: CompiledContract;
  classHash?: string;
  compiledClassHash?: string;
};

export const declareContract = async (
  params: DeclareContractParams,
  privateKey: string,
) => {
  try {
    const accountAddress = process.env.PUBLIC_ADDRESS;
    if (!accountAddress) {
      throw new Error("Account address not configured");
    }

    const { contract, classHash, compiledClassHash } = params;

    const account = new Account(rpcProvider, accountAddress, privateKey);

    const declareResponse = await account.declare({
      contract,
      classHash,
      compiledClassHash,
    });

    await rpcProvider.waitForTransaction(declareResponse.transaction_hash);

    return JSON.stringify({
      status: "success",
      transactionHash: declareResponse.transaction_hash,
      classHash: declareResponse.class_hash,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/read/balance.ts

```ts
import { RPC_URL, tokenAddresses } from "src/lib/constant";
import { Account, Contract, RpcProvider } from "starknet";

// Initialize provider
const provider = new RpcProvider({ nodeUrl: RPC_URL });

export type GetOwnBalanceParams = {
  symbol: string;
};

const getTokenDecimals = (symbol: string): number => {
  const stablecoinSymbols = ["USDC", "USDT"];
  return stablecoinSymbols.includes(symbol.toUpperCase()) ? 6 : 18;
};

const formatBalance = (rawBalance: string, symbol: string): string => {
  const decimals = getTokenDecimals(symbol);
  const balancePadded = rawBalance.padStart(decimals + 1, "0");
  const decimalPosition = balancePadded.length - decimals;
  const formattedBalance =
    balancePadded.slice(0, decimalPosition) +
    "." +
    balancePadded.slice(decimalPosition);
  return parseFloat(formattedBalance).toString();
};

export const getOwnBalance = async (
  params: GetOwnBalanceParams,
  privateKey: string,
) => {
  try {
    const walletAddress = process.env.PUBLIC_ADDRESS;

    if (!walletAddress) {
      throw new Error("Wallet address not configured");
    }

    // Account Instance
    const account = new Account(provider, walletAddress, privateKey);

    const tokenAddress = tokenAddresses[params.symbol];
    if (!tokenAddress) {
      throw new Error(`Token ${params.symbol} not supported`);
    }

    const tokenContract = new Contract(erc20ABI, tokenAddress, provider);

    const balance = await tokenContract.balanceOf(account.address);
    const formattedBalance = formatBalance(
      balance.balance.toString(),
      params.symbol,
    );

    return JSON.stringify({
      status: "success",
      balance: formattedBalance,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export type GetBalanceParams = {
  walletAddress: string;
  assetSymbol: string;
};

export const getBalance = async (params: GetBalanceParams) => {
  try {
    const tokenAddress = tokenAddresses[params.assetSymbol];
    if (!tokenAddress) {
      throw new Error(`Token ${params.assetSymbol} not supported`);
    }

    const tokenContract = new Contract(erc20ABI, tokenAddress, provider);
    const balance = await tokenContract.balanceOf(params.walletAddress);
    const formattedBalance = formatBalance(
      balance.balance.toString(),
      params.assetSymbol,
    );

    return JSON.stringify({
      status: "success",
      balance: formattedBalance,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Basic ERC20 ABI for balanceOf
const erc20ABI = [
  {
    name: "balanceOf",
    type: "function",
    inputs: [
      {
        name: "account",
        type: "felt",
      },
    ],
    outputs: [
      {
        name: "balance",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
];

```

# src/lib/agent/method/rpc/getBlockLatestAccepted.ts

```ts
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getBlockLatestAccepted = async () => {
  try {
    const blockHashAndNumber = await rpcProvider.getBlockLatestAccepted();

    return JSON.stringify({
      status: "success",
      blockHashAndNumber,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getBlockNumber.ts

```ts
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getBlockNumber = async () => {
  try {
    const blockNumber = await rpcProvider.getBlockNumber();

    return JSON.stringify({
      status: "success",
      blockNumber,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getBlockStateUpdate.ts

```ts
import { BlockIdParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getBlockStateUpdate = async (params: BlockIdParams) => {
  try {
    const blockId = params?.blockId ?? "latest";
    const block = await rpcProvider.getBlockStateUpdate(blockId);
    return JSON.stringify({
      status: "success",
      block,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getBlockTransactionCount.ts

```ts
import { BlockIdParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";
import { BlockNumber } from "starknet";

export const getBlockTransactionCount = async (params?: BlockIdParams) => {
  try {
    let blockIdentifier: BlockNumber | string = params?.blockId || "latest";

    if (
      typeof blockIdentifier === "string" &&
      !isNaN(Number(blockIdentifier)) &&
      blockIdentifier !== "latest"
    ) {
      blockIdentifier = Number(blockIdentifier);
    }

    const transactionCount =
      await rpcProvider.getBlockTransactionCount(blockIdentifier);

    return JSON.stringify({
      status: "success",
      transactionCount: transactionCount.toString(),
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getBlockTransactionsTraces.ts

```ts
import { BlockIdParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getBlockTransactionsTraces = async (params: BlockIdParams) => {
  try {
    const { blockId } = params;
    const transactionTraces =
      await rpcProvider.getBlockTransactionsTraces(blockId);
    return JSON.stringify({
      status: "success",
      transactionTraces,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getBlockWithReceipts.ts

```ts
import { BlockIdParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getBlockWithReceipts = async (params: BlockIdParams) => {
  try {
    const blockId = params?.blockId ?? "latest";
    const block = await rpcProvider.getBlockWithReceipts(blockId);
    return JSON.stringify({
      status: "success",
      block,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getBlockWithTxHashes.ts

```ts
import { BlockIdParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getBlockWithTxHashes = async (params: BlockIdParams) => {
  try {
    const blockId = params?.blockId ?? "latest";
    const block = await rpcProvider.getBlockWithTxHashes(blockId);
    return JSON.stringify({
      status: "success",
      block,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getBlockWithTxs.ts

```ts
import { BlockIdParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getBlockWithTxs = async (params: BlockIdParams) => {
  try {
    const blockId = params?.blockId ?? "latest";
    const block = await rpcProvider.getBlockWithTxs(blockId);
    return JSON.stringify({
      status: "success",
      block,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getChainId.ts

```ts
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getChainId = async () => {
  try {
    const chainId = await rpcProvider.getChainId();

    return JSON.stringify({
      status: "success",
      chainId,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getClass.ts

```ts
import { BlockIdAndContractAddressParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";
import { BlockNumber } from "starknet";

export const getClass = async (params: BlockIdAndContractAddressParams) => {
  try {
    let blockIdentifier: BlockNumber | string = params.blockId || "latest";

    if (
      typeof blockIdentifier === "string" &&
      !isNaN(Number(blockIdentifier)) &&
      blockIdentifier !== "latest"
    ) {
      blockIdentifier = Number(blockIdentifier);
    }

    const contractClass = await rpcProvider.getClass(
      params.contractAddress,
      blockIdentifier,
    );

    return JSON.stringify({
      status: "success",
      contractClass,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getClassAt.ts

```ts
import { BlockIdAndContractAddressParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";
import { BlockNumber } from "starknet";

export const getClassAt = async (params: BlockIdAndContractAddressParams) => {
  try {
    let blockIdentifier: BlockNumber | string = params.blockId || "latest";

    if (
      typeof blockIdentifier === "string" &&
      !isNaN(Number(blockIdentifier)) &&
      blockIdentifier !== "latest"
    ) {
      blockIdentifier = Number(blockIdentifier);
    }

    const contractClass = await rpcProvider.getClassAt(
      params.contractAddress,
      blockIdentifier,
    );

    return JSON.stringify({
      status: "success",
      contractClass,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getClassHash.ts

```ts
import { BlockIdAndContractAddressParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";
import { BlockNumber } from "starknet";

export const getClassHashAt = async (
  params: BlockIdAndContractAddressParams,
) => {
  try {
    let blockIdentifier: BlockNumber | string = params.blockId || "latest";

    if (
      typeof blockIdentifier === "string" &&
      !isNaN(Number(blockIdentifier)) &&
      blockIdentifier !== "latest"
    ) {
      blockIdentifier = Number(blockIdentifier);
    }

    // Note the order of parameters for getClassHashAt is different from getClassAt!
    const classHash = await rpcProvider.getClassHashAt(
      params.contractAddress,
      blockIdentifier,
    );

    return JSON.stringify({
      status: "success",
      classHash,
    });
  } catch (error) {
    console.error("GetClassHash error:", error);
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getNonceForAddress.ts

```ts
import { BlockIdAndContractAddressParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";
import { BlockNumber } from "starknet";

export const getNonceForAddress = async (
  params: BlockIdAndContractAddressParams,
) => {
  try {
    let blockIdentifier: BlockNumber | string = params.blockId || "latest";

    if (
      typeof blockIdentifier === "string" &&
      !isNaN(Number(blockIdentifier)) &&
      blockIdentifier !== "latest"
    ) {
      blockIdentifier = Number(blockIdentifier);
    }

    const contractClass = await rpcProvider.getNonceForAddress(
      params.contractAddress,
      blockIdentifier,
    );

    return JSON.stringify({
      status: "success",
      contractClass,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getSpecVersion.ts

```ts
import { RPC_URL } from "src/lib/constant";
import { RpcProvider } from "starknet";

const provider = new RpcProvider({ nodeUrl: RPC_URL });

export const getSpecVersion = async () => {
  try {
    const specVersion = await provider.getSpecVersion();

    return JSON.stringify({
      status: "success",
      specVersion: specVersion.toString(),
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getStorageAt.ts

```ts
import { GetStorageParams } from "src/lib/agent/schema";
import { RPC_URL } from "src/lib/constant";
import { RpcProvider } from "starknet";

// Initialize provider
const provider = new RpcProvider({ nodeUrl: RPC_URL });

export const getStorageAt = async (params: GetStorageParams) => {
  try {
    const storage = await provider.getStorageAt(
      params.contractAddress,
      params.key,
      params.blockId || "latest",
    );

    return JSON.stringify({
      status: "success",
      storage: storage.toString(),
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getSyncingStats.ts

```ts
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getSyncingStats = async () => {
  try {
    const syncingStats = await rpcProvider.getSyncingStats();
    return JSON.stringify({
      status: "success",
      syncingStats,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getTransactionByBlockIdAndIndex.ts

```ts
import { GetTransactionByBlockIdAndIndexParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getTransactionByBlockIdAndIndex = async (
  params: GetTransactionByBlockIdAndIndexParams,
) => {
  try {
    const { transactionIndex, blockId } = params;
    const transaction = await rpcProvider.getTransactionByBlockIdAndIndex(
      blockId,
      transactionIndex,
    );
    return JSON.stringify({
      status: "success",
      transaction,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getTransactionByHash.ts

```ts
import { TransactionHashParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getTransactionByHash = async (params: TransactionHashParams) => {
  try {
    const { transactionHash } = params;
    const transaction = await rpcProvider.getTransactionByHash(transactionHash);
    return JSON.stringify({
      status: "success",
      transaction,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getTransactionReceipt.ts

```ts
import { TransactionHashParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getTransactionReceipt = async (params: TransactionHashParams) => {
  try {
    const { transactionHash } = params;
    const receipt = await rpcProvider.getTransactionReceipt(transactionHash);
    return JSON.stringify({
      status: "success",
      receipt,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getTransactionStatus.ts

```ts
import { TransactionHashParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getTransactionStatus = async (params: TransactionHashParams) => {
  try {
    const { transactionHash } = params;
    const status = await rpcProvider.getTransactionStatus(transactionHash);
    return JSON.stringify({
      status: "success",
      blockStatus: status,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/rpc/getTransactionTrace.ts

```ts
import { TransactionHashParams } from "src/lib/agent/schema";
import { rpcProvider } from "src/lib/agent/starknetAgent";

export const getTransactionTrace = async (params: TransactionHashParams) => {
  try {
    const { transactionHash } = params;
    const transactionTrace =
      await rpcProvider.getTransactionTrace(transactionHash);
    return JSON.stringify({
      status: "success",
      transactionTrace,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/method/swap.ts

```ts
// src/lib/agent/method/swap.ts

import { Account } from "starknet";
import { executeSwap, fetchQuotes, type QuoteRequest, type Quote } from "@avnu/avnu-sdk";
import { tokenAddresses } from "src/lib/constant";
import { StarknetAgent } from "../starknetAgent";
import { symbolToDecimal } from "src/lib/utils/symbolToDecimal";

// Define constants
const AVNU_CONTRACT_ADDRESS = "0x04270219d365d6b017231b52e92b3fb5d7c8378b25649d51b308464ba6ef936";

// Types
export type SwapParams = {
  sellTokenSymbol: string;
  buyTokenSymbol: string;
  sellAmount: number;
};

export const swapTokens = async (params: SwapParams, privateKey: string) => {
  try {
    // Validate wallet address
    const walletAddress = process.env.PUBLIC_ADDRESS;
    if (!walletAddress) {
      throw new Error("Wallet address not configured in environment variables");
    }

    // Initialize StarknetAgent
    const agent = new StarknetAgent({
      walletPrivateKey: privateKey,
      anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Create account instance
    const account = new Account(
      agent.contractInteractor.provider,
      walletAddress,
      privateKey
    );

    // Validate tokens and get addresses
    const sellTokenAddress = tokenAddresses[params.sellTokenSymbol];
    const buyTokenAddress = tokenAddresses[params.buyTokenSymbol];

    if (!sellTokenAddress) {
      throw new Error(`Sell token ${params.sellTokenSymbol} not supported`);
    }
    if (!buyTokenAddress) {
      throw new Error(`Buy token ${params.buyTokenSymbol} not supported`);
    }

    // Format amount with correct decimals
    const sellDecimals = symbolToDecimal(params.sellTokenSymbol);
    const formattedAmount = BigInt(
      agent.contractInteractor.formatTokenAmount(
        params.sellAmount.toString(),
        sellDecimals
      )
    );

    // Check if amount is too small
    if (formattedAmount <= BigInt(0)) {
      throw new Error("Swap amount too small");
    }

    // First check allowance and approve if needed
    const allowance = await checkAllowance(
      account,
      sellTokenAddress,
      formattedAmount
    );
    if (!allowance.sufficient) {
      console.log("Insufficient allowance, approving token...");
      const approvalTx = await approveToken(
        account,
        sellTokenAddress,
        formattedAmount
      );
      await agent.contractInteractor.provider.waitForTransaction(
        approvalTx.transaction_hash,
        { retryInterval: 1000 }
      );
    }

    // Prepare quote request
    const quoteParams: QuoteRequest = {
      sellTokenAddress,
      buyTokenAddress,
      sellAmount: formattedAmount,
      takerAddress: account.address,
      size: 1
    };

    console.log("Fetching quotes with params:", {
      ...quoteParams,
      sellAmount: formattedAmount.toString()
    });

    // Fetch quotes
    const quotes = await fetchQuotes(quoteParams);
    if (!quotes || quotes.length === 0) {
      throw new Error("No quotes available for this swap");
    }

    const bestQuote: Quote = quotes[0];
    console.log("Best quote:", {
      sellAmount: bestQuote.sellAmount,
      buyAmount: bestQuote.buyAmount,
      // Access other available properties from the Quote type
    });

    // Execute swap with proper configuration
    const swapResult = await executeSwap(account, bestQuote, {
      slippage: 0.5 // 0.5% slippage tolerance
    });

    console.log("Swap executed, hash:", swapResult.transactionHash);

    // Monitor transaction
    const receipt = await agent.transactionMonitor.waitForTransaction(
      swapResult.transactionHash,
      (status) => console.log("Swap status:", status)
    );

    // Get transaction events
    const events = await agent.transactionMonitor.getTransactionEvents(
      swapResult.transactionHash
    );

    return JSON.stringify({
      status: "success",
      message: `Successfully swapped ${params.sellAmount} ${params.sellTokenSymbol} for ${params.buyTokenSymbol}`,
      transactionHash: swapResult.transactionHash,
      receipt,
      events,
      details: {
        sellAmount: params.sellAmount,
        sellToken: params.sellTokenSymbol,
        buyToken: params.buyTokenSymbol
      }
    });
  } catch (error) {
    console.error("Swap error:", error);
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
      step: "swap execution"
    });
  }
};

// Helper function to check token allowance
async function checkAllowance(
  account: Account,
  tokenAddress: string,
  amount: bigint
): Promise<{ sufficient: boolean; current: bigint }> {
  try {
    const allowanceCall = {
      contractAddress: tokenAddress,
      entrypoint: "allowance",
      calldata: [account.address, AVNU_CONTRACT_ADDRESS]
    };

    const response = await account.callContract(allowanceCall);
    const currentAllowance = BigInt(response[0]); // Access first element directly

    return {
      sufficient: currentAllowance >= amount,
      current: currentAllowance
    };
  } catch (error) {
    console.error("Error checking allowance:", error);
    throw error;
  }
}

// Helper function to approve token spending
async function approveToken(
  account: Account,
  tokenAddress: string,
  amount: bigint
) {
  try {
    return await account.execute({
      contractAddress: tokenAddress,
      entrypoint: "approve",
      calldata: [AVNU_CONTRACT_ADDRESS, amount.toString(), "0"]
    });
  } catch (error) {
    console.error("Error approving token:", error);
    throw error;
  }
}
```

# src/lib/agent/method/token/transfer.ts

```ts
import { Account, RpcProvider, uint256 } from "starknet";
import { RPC_URL, tokenAddresses } from "src/lib/constant";

// Types
export interface transferParams {
  recipient_address: string;
  amount: string;
  symbol: string;
}

interface TransferResult {
  status: "success" | "failure";
  amount?: string;
  symbol?: string;
  recipients_address?: string;
  transaction_hash?: string;
  error?: string;
  step?: string;
}

// Constants
const DECIMALS = {
  USDC: 6,
  USDT: 6,
  DEFAULT: 18,
};

/**
 * Formats amount to the correct decimal places for the token
 * @param amount The amount as a string (e.g., "0.0001")
 * @param decimals Number of decimal places
 * @returns Formatted amount as a string
 */
const formatTokenAmount = (amount: string, decimals: number): string => {
  const [whole, fraction = ""] = amount.split(".");
  const paddedFraction = fraction.padEnd(decimals, "0");
  return whole + paddedFraction;
};

/**
 * Transfers ERC20 tokens on Starknet
 * @param params transfer parameters including recipient, amount, and token symbol
 * @returns Result of the transfer operation
 */
export const transfer = async (params: transferParams): Promise<string> => {
  try {
    // Environment validation
    const privateKey = process.env.STARKNET_PRIVATE_KEY;
    const accountAddress = process.env.PUBLIC_ADDRESS;

    if (!privateKey || !accountAddress) {
      throw new Error(
        "STARKNET_PRIVATE_KEY or PUBLIC_ADDRESS not set in .env file",
      );
    }

    // Provider and account setup
    const provider = new RpcProvider({ nodeUrl: RPC_URL });
    const account = new Account(provider, accountAddress, privateKey);

    // Token validation and setup
    const tokenAddress = tokenAddresses[params.symbol];
    if (!tokenAddress) {
      throw new Error(`Token ${params.symbol} not supported`);
    }

    // Amount formatting
    const decimals =
      DECIMALS[params.symbol as keyof typeof DECIMALS] || DECIMALS.DEFAULT;
    const formattedAmount = formatTokenAmount(params.amount, decimals);
    const amountUint256 = uint256.bnToUint256(formattedAmount);

    // Execute transfer
    const result = await account.execute({
      contractAddress: tokenAddress,
      entrypoint: "transfer",
      calldata: [
        params.recipient_address,
        amountUint256.low,
        amountUint256.high,
      ],
    });

    console.log(
      "transfer initiated. Transaction hash:",
      result.transaction_hash,
    );

    // Wait for transaction confirmation
    await provider.waitForTransaction(result.transaction_hash);

    const transferResult: TransferResult = {
      status: "success",
      amount: params.amount,
      symbol: params.symbol,
      recipients_address: params.recipient_address,
      transaction_hash: result.transaction_hash,
    };

    return JSON.stringify(transferResult);
  } catch (error) {
    console.error("transfer failed:", error);

    const transferResult: TransferResult = {
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
      step: "transfer execution",
    };

    return JSON.stringify(transferResult);
  }
};

```

# src/lib/agent/method/transaction/simulateTransaction.ts

```ts
import {
  Account,
  Call,
  TransactionType,
  SimulateTransactionResponse,
  BigNumberish,
  DeployAccountContractPayload,
} from "starknet";
import { rpcProvider } from "../../starknetAgent";
import { colorLog } from "src/lib/utils/Output/console_log";
import {
  InvocationInvokePayload,
  Invocation_Deploy_Account,
  Invocation_Invoke,
  Invocation_Deploy_Account_Payload,
} from "src/lib/utils/types/simulatetransaction";


export type simulateInvokeTransactionParams = {
  accountAddress: string;
  calls: Call[];
};

export const simulateInvokeTransaction = async (
  params: simulateInvokeTransactionParams,
  privateKey: string
) => {
  try {
    const accountAddress = process.env.PUBLIC_ADDRESS;
    if (!accountAddress) {
      throw new Error("Account address not configured");
    }

    const account = new Account(rpcProvider, accountAddress, privateKey);

    let index = 1;
    const invocations: Invocation_Invoke[] = params.calls.map((call, index) => {
        colorLog.info(`\n--- Call ${index + 1} ---`);
        colorLog.info(`Contract Address: ${call.contractAddress}`);
        colorLog.info(`Entrypoint: ${call.entrypoint}`);
        colorLog.info("Calldata:");
        
        if (Array.isArray(call.calldata)) {
            call.calldata.forEach((data: any, dataIndex: number) => {
                colorLog.info(`  Param ${dataIndex + 1}: ${data}`);
            });
        }

      return {
        type: TransactionType.INVOKE,
        payload: {
          contractAddress: call.contractAddress,
          entrypoint: call.entrypoint,
          calldata: call.calldata as string[],
        },
      };
    });

    const simulate_transaction = await account.simulateTransaction(invocations);


    colorLog.success("Simulation is succesfull !");
    colorLog.info("Simulation response:");
    const transactionDetails = simulate_transaction.map(
      (transaction, index) => {
        const feeData = transaction.fee_estimation;
        const resourceBounds = transaction.resourceBounds;

        return {
          transaction_number: index + 1,

          fee_estimation: {
            title: "Fee Estimation Breakdown",
            details: {
              ...feeData,
            },
          },

          resource_bounds: {
            l1_gas: {
              max_amount: resourceBounds.l1_gas.max_amount,
              max_price_per_unit: resourceBounds.l1_gas.max_price_per_unit,
            },
            l2_gas: {
              max_amount: resourceBounds.l2_gas.max_amount,
              max_price_per_unit: resourceBounds.l2_gas.max_price_per_unit,
            },
          },

          suggested_max_fee: transaction.suggestedMaxFee.toString(),
        };
      }
    );
    console.log(JSON.stringify(transactionDetails, null, 2));
    return JSON.stringify(
      {
        status: "success",
        transaction_details: transactionDetails,
      },
      null,
      2
    );
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export type simulateDeployTransactionAccountParams = {
  accountAddress: string;
  payloads: DeployAccountContractPayload[];
};

export const simulateDeployAccountTransaction = async (
  params: simulateDeployTransactionAccountParams,
  privateKey: string
) => {
  try {
    const accountAddress = process.env.PUBLIC_ADDRESS;
    if (!accountAddress) {
      throw new Error("Account address not configured");
    }

    const account = new Account(rpcProvider, accountAddress, privateKey);

    let index = 1;
    const invocations: Invocation_Deploy_Account[] = params.payloads.map(
      (payload, index) => {
        if (Array.isArray(payload.constructorCalldata)) {
          payload.constructorCalldata.forEach((data, dataIndex) => {
            console.log(`  Param ${dataIndex + 1}:`, data);
          });
        }

        return {
          type: TransactionType.DEPLOY_ACCOUNT,
          payload: {
            classHash: payload.classHash,
            constructorCalldata: payload.constructorCalldata ?? [],
            addressSalt: payload.addressSalt,
            contractAddress: payload.contractAddress,
          },
        };
      }
    );

    const simulate_transaction = await account.simulateTransaction(
      invocations,
      {
        nonce: "0x0",
      }
    );

    colorLog.success("Simulation is succesfull !");

    colorLog.info("Simulation response:");
    const transactionDetails = simulate_transaction.map(
      (transaction, index) => {
        const feeData = transaction.fee_estimation;
        const resourceBounds = transaction.resourceBounds;

        return {
          transaction_number: index + 1,

          fee_estimation: {
            title: "Fee Estimation Breakdown",
            details: {
              ...feeData,
            },
          },

          resource_bounds: {
            l1_gas: {
              max_amount: resourceBounds.l1_gas.max_amount,
              max_price_per_unit: resourceBounds.l1_gas.max_price_per_unit,
            },
            l2_gas: {
              max_amount: resourceBounds.l2_gas.max_amount,
              max_price_per_unit: resourceBounds.l2_gas.max_price_per_unit,
            },
          },

          suggested_max_fee: transaction.suggestedMaxFee.toString(),
        };
      }
    );

    console.log(JSON.stringify(transactionDetails, null, 2));
    return JSON.stringify(
      {
        status: "success",
        transaction_details: transactionDetails,
      },
      null,
      2
    );
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

```

# src/lib/agent/schema.ts

```ts
import { z } from "zod";

// Schema definitions
export const Transferschema = z.object({
  recipient_address: z.string().describe("The recipient public address"),
  amount: z.string().describe("The amount of erc20 token that will be send"),
  symbol: z.string().describe("The symbol of the erc20 token"),
});

export const blockIdSchema = z.object({
  blockId: z.union([
    z
      .string()
      .describe(
        "The block identifier. Can be 'latest', 'pending', or a block hash.",
      ),
    z.number().describe("A block number."),
  ]),
});

export const contractAddressSchema = z.object({
  contractAddress: z.string().describe("The address of the contract"),
});

export const transactionHashSchema = z.object({
  transactionHash: z
    .string()
    .describe("The hash of the requested transaction."),
});

export const DeployOZAccountSchema = z.object({
  publicKey: z.string().describe("The public key to deploy the OZ Account"),
  privateKey: z.string().describe("The private key to deploy the OZ Account"),
});

export const getOwnBalanceSchema = z.object({
  symbol: z
    .string()
    .describe("The asset symbol to get the balance of. eg. USDC, ETH"),
});

export const getBalanceSchema = z.object({
  walletAddress: z
    .string()
    .describe("The wallet address to get the balance of"),
  assetSymbol: z
    .string()
    .describe("The asset symbol to get the balance of. eg. USDC, ETH"),
});

export const DeployArgentAccountSchema = z.object({
  publicKeyAX: z
    .string()
    .describe("The public key to deploy the Argent Account"),
  privateKeyAX: z
    .string()
    .describe("The private key to deploy the Argent Account"),
});

export const blockIdAndContractAddressSchema = blockIdSchema
  .merge(contractAddressSchema)
  .strict();

export const swapSchema = z.object({
  sellTokenSymbol: z
    .string()
    .describe("Symbol of the token to sell (e.g., 'ETH', 'USDC')"),
  buyTokenSymbol: z
    .string()
    .describe("Symbol of the token to buy (e.g., 'ETH', 'USDC')"),
  sellAmount: z.number().positive().describe("Amount of tokens to sell"),
});

export const getStorageAtSchema = blockIdAndContractAddressSchema.merge(
  z.object({
    key: z
      .string()
      .describe("The key to the storage value for the given contract"),
  }),
);

export const getTransactionByBlockIdAndIndexSchema = blockIdSchema.merge(
  z.object({
    transactionIndex: z
      .number()
      .int()
      .nonnegative()
      .describe("The index of the transaction within the block."),
  }),
);

// Types for function parameters that match the schemas
export type GetStorageParams = z.infer<typeof getStorageAtSchema>;
export type BlockIdParams = z.infer<typeof blockIdSchema>;
export type TransactionHashParams = z.infer<typeof transactionHashSchema>;
export type BlockIdAndContractAddressParams = z.infer<
  typeof blockIdAndContractAddressSchema
>;
export type GetTransactionByBlockIdAndIndexParams = z.infer<
  typeof getTransactionByBlockIdAndIndexSchema
>;

// In schema.ts

// For declare contract
export const declareContractSchema = z.object({
  contract: z.any().describe("The compiled contract to be declared"),
  classHash: z.string().optional().describe("Optional pre-computed class hash"),
  compiledClassHash: z
    .string()
    .optional()
    .describe("Optional compiled class hash for Cairo 1 contracts"),
});


/* For simulate Invoke Transaction */

const callSchema = z.object({
  contractAddress: z.string().describe("The contract Address"),
  entrypoint: z.string().describe("The entrypoint"),
  calldata: z.array(z.string()).or(z.record(z.any())).optional()
});

export const simulateInvokeTransactionSchema = z.object({
  accountAddress: z
      .string()
      .describe("Account Address/public key"),
  calls: z.array(callSchema)
});


 /* For simulate Deploy Account Transaction*/
const PayloadDeploySchema = z.object({
  classHash: z.string().describe("The class Hash Address"),
  constructorCalldata: z.array(z.string()).or(z.record(z.any())).optional(),
  addressSalt: z.union([
      z.string().regex(/^0x[0-9a-fA-F]+$/),
      z.number(),
      z.bigint()
  ]).optional(),
  contractAddressSchema: z.string().describe("ContractAddress").optional(),
});

export const simulateDeployAccountTransactionSchema = z.object({
  accountAddress: z.string().describe("Account Address"),
  payloads: z.array(PayloadDeploySchema)
});

/* for estimate account deploye fee */
export const estimateAccountDeployFeeSchema = z.object({
  classHash: z
    .string()
    .describe("The class hash of the account contract to deploy"),
  constructorCalldata: z
    .array(z.string())
    .optional()
    .describe("Optional constructor parameters"),
  addressSalt: z
    .string()
    .optional()
    .describe("Optional salt for the contract address"),
});

// For sign message
export const signMessageSchema = z.object({
  typedData: z
    .object({
      types: z.record(
        z.string(),
        z.array(
          z.object({
            name: z.string(),
            type: z.string(),
          }),
        ),
      ),
      primaryType: z.string(),
      domain: z.record(z.string(), z.union([z.string(), z.number()])),
      message: z.record(z.string(), z.any()),
    })
    .describe("The typed data object conforming to EIP-712"),
});

// For verify message
export const verifyMessageSchema = z.object({
  typedData: z
    .object({
      types: z.record(
        z.string(),
        z.array(
          z.object({
            name: z.string(),
            type: z.string(),
          }),
        ),
      ),
      primaryType: z.string(),
      domain: z.record(z.string(), z.union([z.string(), z.number()])),
      message: z.record(z.string(), z.any()),
    })
    .describe("The typed data that was signed"),
  signature: z
    .array(z.string())
    .length(2)
    .describe("The signature as array of r and s values"),
  publicKey: z.string().describe("The public key to verify against"),
});


// Add type exports for the schemas
export type DeclareContractParams = z.infer<typeof declareContractSchema>;
export type EstimateAccountDeployFeeParams = z.infer<
  typeof estimateAccountDeployFeeSchema
>;
export type SignMessageParams = z.infer<typeof signMessageSchema>;
export type VerifyMessageParams = z.infer<typeof verifyMessageSchema>;
```

# src/lib/agent/starknetAgent.ts

```ts
// src/lib/agent/starknetAgent.ts

import { RpcProvider } from "starknet";
import { RPC_URL } from "../constant";
import { AccountManager } from "../utils/account/AccountManager";
import { TransactionMonitor } from "../utils/monitoring/TransactionMonitor";
import { ContractInteractor } from "../utils/contract/ContractInteractor";
import { StarknetAgentInterface } from "../../agents/interfaces/agent.interface";
import { AgentExecutor } from "langchain/agents";
import { createAgent } from "./agent";

export const rpcProvider = new RpcProvider({ nodeUrl: RPC_URL });

export interface StarknetAgentConfig {
  walletPrivateKey: string;
  anthropicApiKey: string;
}

export class StarknetAgent implements StarknetAgentInterface {
  public readonly walletPrivateKey: string;
  public readonly anthropicApiKey: string;
  public readonly AgentExecutor: AgentExecutor;
  public readonly accountManager: AccountManager;
  public readonly transactionMonitor: TransactionMonitor;
  public readonly contractInteractor: ContractInteractor;

  constructor(config: StarknetAgentConfig) {
    this.validateConfig(config);
    
    this.walletPrivateKey = config.walletPrivateKey;
    this.anthropicApiKey = config.anthropicApiKey;
    
    // Initialize utility classes
    this.accountManager = new AccountManager(rpcProvider);
    this.transactionMonitor = new TransactionMonitor(rpcProvider);
    this.contractInteractor = new ContractInteractor(rpcProvider);
    
    // Initialize agent executor
    this.AgentExecutor = createAgent(this as StarknetAgentInterface, this.anthropicApiKey);
  }

  private validateConfig(config: StarknetAgentConfig) {
    if (!config.walletPrivateKey) {
      throw new Error(
        "Starknet wallet private key is required https://www.argent.xyz/argent-x",
      );
    }
    if (!config.anthropicApiKey) {
      throw new Error("Anthropic API key is required");
    }
  }

  getCredentials() {
    return {
      walletPrivateKey: this.walletPrivateKey,
      anthropicApiKey: this.anthropicApiKey,
    };
  }

  async execute(input: string): Promise<unknown> {
    const response = await this.AgentExecutor.invoke({
      input,
    });
    return response;
  }
}
```

# src/lib/agent/strategy/StrategyAnalyzer.ts

```ts
// src/lib/agent/strategy/StrategyAnalyzer.ts

import { tokenAddresses } from "../../constant";
import { Contract } from "starknet";

// Price feed interface for token prices
interface PriceFeed {
  getPrice(tokenAddress: string): Promise<number>;
}

// Simple price feed implementation
class SimplePriceFeed implements PriceFeed {
  // Hardcoded prices for demonstration
  private prices: { [key: string]: number } = {
    ETH: 3000,
    USDC: 1,
    USDT: 1,
    STRK: 2
  };

  async getPrice(symbol: string): Promise<number> {
    return this.prices[symbol] || 0;
  }
}
import { AccountManager } from "../../utils/account/AccountManager";
import { ContractInteractor } from "../../utils/contract/ContractInteractor";
import { symbolToDecimal } from "../../utils/symbolToDecimal";

interface TokenBalance {
  symbol: string;
  balance: string;
  usdValue?: number;
}

interface OpportunityAnalysis {
  type: string;
  description: string;
  expectedReturn?: number;
  risk: 'low' | 'medium' | 'high';
  minRequired: number;
  action: string;
}

export class StrategyAnalyzer {
  private priceFeed: PriceFeed;

  constructor(
    private readonly accountManager: AccountManager,
    private readonly contractInteractor: ContractInteractor
  ) {
    this.priceFeed = new SimplePriceFeed();
  }

  private async calculatePortfolioValue(balances: TokenBalance[]): Promise<number> {
    let totalValue = 0;

    for (const balance of balances) {
      try {
        const price = await this.priceFeed.getPrice(balance.symbol);
        const value = Number(balance.balance) * price;
        totalValue += value;
        
        // Update the balance object with USD value
        balance.usdValue = value;
      } catch (error) {
        console.error(`Error calculating value for ${balance.symbol}:`, error);
      }
    }

    return totalValue;
  }

  async analyzeWalletState(address: string): Promise<{
    balances: TokenBalance[];
    opportunities: OpportunityAnalysis[];
  }> {
    try {
      // Get balances for all supported tokens
      const balances = await this.getAllTokenBalances(address);
      
      // Calculate total portfolio value in USD
      const portfolioValue = await this.calculatePortfolioValue(balances);
      
      // Analyze possible opportunities
      const opportunities = await this.identifyOpportunities(balances, portfolioValue, address);

      return {
        balances,
        opportunities
      };
    } catch (error) {
      throw new Error(`Failed to analyze wallet state: ${error.message}`);
    }
  }

  private async getAllTokenBalances(address: string): Promise<TokenBalance[]> {
    const balances: TokenBalance[] = [];
    
    for (const [symbol, tokenAddress] of Object.entries(tokenAddresses)) {
      try {
        const decimals = symbolToDecimal(symbol);
        const contract = this.contractInteractor.createContract(erc20ABI, tokenAddress);
        const rawBalance = await contract.balanceOf(address);
        const formattedBalance = this.contractInteractor.parseTokenAmount(rawBalance.toString(), decimals);
        
        balances.push({
          symbol,
          balance: formattedBalance
        });
      } catch (error) {
        console.error(`Error fetching ${symbol} balance:`, error);
      }
    }
    
    return balances;
  }

  private async identifyOpportunities(
    balances: TokenBalance[],
    portfolioValue: number,
    address: string
  ): Promise<OpportunityAnalysis[]> {
    const opportunities: OpportunityAnalysis[] = [];
    
    // Get ETH balance
    const ethBalance = balances.find(b => b.symbol === 'ETH');
    const ethValue = Number(ethBalance?.balance || 0);

    if (ethValue > 0) {
      // Analyze DeFi opportunities
      if (ethValue >= 0.01) {
        opportunities.push({
          type: 'swap',
          description: 'Swap ETH to stablecoins for reduced volatility',
          risk: 'low',
          minRequired: 0.01,
          action: 'swap_eth_to_usdc'
        });
      }

      if (ethValue >= 0.05) {
        opportunities.push({
          type: 'liquidity',
          description: 'Provide liquidity to ETH/USDC pool',
          expectedReturn: 5.2, // APR percentage
          risk: 'medium',
          minRequired: 0.05,
          action: 'provide_liquidity'
        });
      }

      // Account management opportunities
      if (!await this.accountManager.isAccountDeployed(address)) {
        opportunities.push({
          type: 'account',
          description: 'Deploy account to enable full functionality',
          risk: 'low',
          minRequired: 0.002,
          action: 'deploy_account'
        });
      }
    }

    // Stablecoin opportunities
    const usdcBalance = balances.find(b => b.symbol === 'USDC');
    if (Number(usdcBalance?.balance || 0) > 100) {
      opportunities.push({
        type: 'yield',
        description: 'Earn yield on USDC through lending protocols',
        expectedReturn: 3.8,
        risk: 'low',
        minRequired: 100,
        action: 'lend_usdc'
      });
    }

    return opportunities;
  }

  async recommendActions(address: string): Promise<string[]> {
    const { opportunities } = await this.analyzeWalletState(address);
    const recommendations: string[] = [];

    for (const opportunity of opportunities) {
      recommendations.push(
        `Recommended Action: ${opportunity.description}\n` +
        `Risk Level: ${opportunity.risk}\n` +
        `Minimum Required: ${opportunity.minRequired} ${opportunity.type === 'swap' ? 'ETH' : 'USDC'}\n` +
        (opportunity.expectedReturn ? `Expected Return: ${opportunity.expectedReturn}% APR\n` : '') +
        `Action Command: ${opportunity.action}\n`
      );
    }

    return recommendations;
  }
}

const erc20ABI = [
  {
    name: "balanceOf",
    type: "function",
    inputs: [{ name: "account", type: "felt" }],
    outputs: [{ name: "balance", type: "Uint256" }],
    stateMutability: "view"
  }
];
```

# src/lib/agent/tools.ts

```ts
import { tool } from "@langchain/core/tools";
import { StarknetAgentInterface } from "../../agents/interfaces/agent.interface";
import { withWalletKey, isStarknetAgentClass } from "./tools/helper";

import {
  CreateOZAccount,
  CreateArgentAccount,
} from "src/lib/agent/method/account/createAccount";
import {
  DeployArgentAccount,
  DeployOZAccount,
} from "src/lib/agent/method/account/deployAccount";
import { transfer } from "./method/token/transfer";
import {simulateDeployAccountTransaction, simulateInvokeTransaction } from "src/lib/agent/method/transaction/simulateTransaction";
import { getOwnBalance, getBalance } from "./method/read/balance";
import { getBlockNumber } from "./method/rpc/getBlockNumber";
import { getBlockTransactionCount } from "./method/rpc/getBlockTransactionCount";
import { getStorageAt } from "./method/rpc/getStorageAt";
import { getClassAt } from "./method/rpc/getClassAt";
import { getClassHashAt } from "./method/rpc/getClassHash";
import {
  getOwnBalanceSchema,
  getBalanceSchema,
  DeployArgentAccountSchema,
  getStorageAtSchema,
  swapSchema,
  DeployOZAccountSchema,
  Transferschema,
  blockIdSchema,
  getTransactionByBlockIdAndIndexSchema,
  transactionHashSchema,
  blockIdAndContractAddressSchema,
  declareContractSchema,
  estimateAccountDeployFeeSchema,
  signMessageSchema,
  verifyMessageSchema,
  simulateInvokeTransactionSchema,
  simulateDeployAccountTransactionSchema,
} from "./schema";
import { swapTokens } from "./method/swap";
import { getSpecVersion } from "./method/rpc/getSpecVersion";
import { getBlockWithTxHashes } from "./method/rpc/getBlockWithTxHashes";
import { getBlockWithTxs } from "./method/rpc/getBlockWithTxs";
import { getBlockWithReceipts } from "./method/rpc/getBlockWithReceipts";
import { getBlockStateUpdate } from "./method/rpc/getBlockStateUpdate";
import { getTransactionStatus } from "./method/rpc/getTransactionStatus";
import { getTransactionByHash } from "./method/rpc/getTransactionByHash";
import { getTransactionByBlockIdAndIndex } from "./method/rpc/getTransactionByBlockIdAndIndex";
import { getTransactionReceipt } from "./method/rpc/getTransactionReceipt";
import { getClass } from "./method/rpc/getClass";
import { getBlockLatestAccepted } from "./method/rpc/getBlockLatestAccepted";
import { getChainId } from "./method/rpc/getChainId";
import { getSyncingStats } from "./method/rpc/getSyncingStats";
import { getNonceForAddress } from "./method/rpc/getNonceForAddress";
import { getTransactionTrace } from "./method/rpc/getTransactionTrace";
import { getBlockTransactionsTraces } from "./method/rpc/getBlockTransactionsTraces";
import { getAddress } from "./method/account/getAddress";
import { declareContract } from "./method/contract/declareContract";
import { estimateAccountDeployFee } from "./method/account/estimateAccountDeployFee";
import { signMessage } from "./method/account/signMessage";
import { verifyMessage } from "./method/account/verifyMessage";
import { createAutonomousTools } from './tools/autonomousTool';

// Types
// type StarknetAgentInterface = {
//   getCredentials: () => { walletPrivateKey: string };
// };

/**
 * Wraps a function to inject the wallet private key from the agent
 */
// const withWalletKey = <T>(
//   fn: (params: T, privateKey: string) => Promise<any>,
//   agent: StarknetAgentInterface,
// ) => {
//   return (params: T) => fn(params, agent.getCredentials().walletPrivateKey);
// };
/**
 * Creates and returns balance checking tools with injected agent credentials
 */
export const createTools = (agent: StarknetAgentInterface) => [
  ...createAutonomousTools(agent as any), // TODO: Update createAutonomousTools to handle both types
  tool(withWalletKey(getOwnBalance, agent), {
    name: "get_own_balance",
    description: "Get the balance of an asset in your wallet",
    schema: getOwnBalanceSchema,
  }),
  tool(getBalance, {
    name: "get_balance",
    description: "Get the balance of an asset for a given wallet address",
    schema: getBalanceSchema,
  }),
  tool(CreateOZAccount, {
    name: "CreateOZAccount",
    description: "Create Open Zeppelin account",
  }),
  tool(DeployOZAccount, {
    name: "DeployOZ",
    description: "Deploy a OZ Account",
    schema: DeployOZAccountSchema,
  }),
  tool(CreateArgentAccount, {
    name: "CreateArgentAccount",
    description: "Create Account account",
  }),
  tool(DeployArgentAccount, {
    name: "DeployArgent",
    description: "Deploy a Argent Account",
    schema: DeployArgentAccountSchema,
  }),
  tool(getBlockNumber, {
    name: "get_block_number",
    description: "Get the current block number from the Starknet network",
  }),
  tool(getBlockTransactionCount, {
    name: "get_block_transaction_count",
    description: "Get the number of transactions in a specific block",
    schema: blockIdSchema,
  }),
  tool(getStorageAt, {
    name: "get_storage_at",
    description: "Get the storage value at a specific slot for a contract",
    schema: getStorageAtSchema,
  }),
  tool(getClass, {
    name: "get_class",
    description:
      "Retrieve the complete class definition of a contract at a specified address and block. This includes the contract's structure, methods, and other metadata.",
    schema: blockIdAndContractAddressSchema,
  }),
  tool(getClassAt, {
    name: "get_class_at",
    description:
      "Fetch the class definition of a contract at a specific address in the latest state. This provides details about the contract's layout and capabilities.",
    schema: blockIdAndContractAddressSchema,
  }),
  tool(getClassHashAt, {
    name: "get_class_hash",
    description:
      "Retrieve the unique class hash for a contract at a specific address. The class hash acts as an identifier for the contract's blueprint.",
    schema: blockIdAndContractAddressSchema,
  }),
  tool(withWalletKey(swapTokens, agent), {
    name: "swap_tokens",
    description:
      "Swap a specified amount of one token for another token. Always return the transaction hash if successful",
    schema: swapSchema,
  }),
  tool(transfer, {
    name: "transfer",
    description:
      "transfer from the caller only token ERC20 at a specific public address",
    schema: Transferschema,
  }),
  tool(getSpecVersion, {
    name: "get_spec_version",
    description: "Get the current spec version from the Starknet RPC provider",
  }),
  tool(getBlockWithTxHashes, {
    name: "get_block_with_tx_hashes",
    description:
      "Retrieve the details of a block, including a list of transaction hashes, based on the specified block identifier. This is useful for tracking which transactions are included in a block.",
    schema: blockIdSchema,
  }),
  tool(getBlockWithTxs, {
    name: "get_block_with_txs",
    description:
      "Retrieve a block’s details along with full transaction data, including the sender, recipient, and other transaction-specific details. This method is ideal when you need comprehensive information on the transactions included in a block.",
    schema: blockIdSchema,
  }),
  tool(getBlockWithReceipts, {
    name: "get_block_with_receipts",
    description:
      "Fetch the details of a block along with transaction receipts, which include the status and logs of each transaction in the block. Use this when you need to check transaction outcomes and event logs.",
    schema: blockIdSchema,
  }),
  tool(getBlockStateUpdate, {
    name: "get_block_state_update",
    description:
      "Fetch the state update for a block, using a specified block identifier.",
    schema: blockIdSchema,
  }),
  tool(getTransactionStatus, {
    name: "get_transaction_status",
    description:
      "Fetch the status of a specific transaction by providing its transaction hash. This includes information such as whether the transaction succeeded or failed.",
    schema: transactionHashSchema,
  }),
  tool(getTransactionByHash, {
    name: "get_transaction_by_hash",
    description:
      "Retrieve the full details of a specific transaction by providing its transaction hash. This includes data such as the sender, recipient, and the value transferred.",
    schema: transactionHashSchema,
  }),
  tool(getTransactionByBlockIdAndIndex, {
    name: "get_transaction_by_block_id_and_index",
    description:
      "Retrieve a specific transaction from a block by providing the block identifier and the transaction index within the block.",
    schema: getTransactionByBlockIdAndIndexSchema,
  }),
  tool(getTransactionReceipt, {
    name: "get_transaction_receipt",
    description:
      "Retrieve the receipt of a specific transaction by providing its transaction hash. This includes transaction status and other important details.",
    schema: transactionHashSchema,
  }),
  tool(getBlockLatestAccepted, {
    name: "get_latest_accepted_block",
    description:
      "Retrieve the latest accepted block's hash and number from the Starknet network.",
  }),
  tool(getChainId, {
    name: "get_chain_id",
    description:
      "Retrieve the unique identifier (chain ID) of the Starknet network.",
  }),
  tool(getSyncingStats, {
    name: "get_syncing_status",
    description:
      "Retrieve the syncing status of the Starknet node, including the current block, highest block, and starting block if syncing.",
  }),
  tool(getNonceForAddress, {
    name: "get_nonce_for_address",
    description:
      "Retrieve the nonce for a specific contract or account address at a specified block.",
    schema: blockIdAndContractAddressSchema,
  }),
  tool(getTransactionTrace, {
    name: "get_transaction_trace",
    description:
      "Fetch the execution trace for a specific transaction, including details about function calls and other internal operations.",
    schema: transactionHashSchema,
  }),
  tool(getBlockTransactionsTraces, {
    name: "get_block_transactions_traces",
    description:
      "Retrieve execution traces for all transactions in a specified block, including detailed insights into their execution.",
    schema: blockIdSchema,
  }),
  tool(getAddress, {
    name: "get_address",
    description:
      "Returns the public (current) account address from your .env config",
  }),
  tool(withWalletKey(declareContract, agent), {
    name: "declare_contract",
    description: "Declare a new contract on Starknet",
    schema: declareContractSchema,
  }),

  tool(withWalletKey(estimateAccountDeployFee, agent), {
    name: "estimate_account_deploy_fee",
    description: "Estimate the fee required to deploy an account",
    schema: estimateAccountDeployFeeSchema,
  }),

  tool(withWalletKey(signMessage, agent), {
    name: "sign_message",
    description: "Sign a typed data message",
    schema: signMessageSchema,
  }),

  tool(verifyMessage, {
    name: "verify_message",
    description: "Verify a signed message",
    schema: verifyMessageSchema,
  }),
  tool(withWalletKey(simulateInvokeTransaction,agent), {
    name: "simulate_transaction",
    description: "Simulate a transaction without executing it",
    schema: simulateInvokeTransactionSchema,
  }),
  tool(withWalletKey(simulateDeployAccountTransaction,agent), {
    name: "simulate_deploy_account_transaction",
    description: "Simulate Deploy Account transaction without executing it",
    schema: simulateDeployAccountTransactionSchema,
  }),

];

```

# src/lib/agent/tools/autonomousTool.ts

```ts
// src/lib/agent/tools/autonomousTool.ts

import { z } from "zod";
import { tool } from "@langchain/core/tools";
import { StrategyAnalyzer } from "../strategy/StrategyAnalyzer";
import { StarknetAgent } from "../starknetAgent";
import { fetchQuotes } from "@avnu/avnu-sdk";

const analyzeWalletSchema = z.object({
  address: z.string().describe("The wallet address to analyze"),
});

export const createAutonomousTools = (agent: StarknetAgent) => [
  tool(async ({ address }: { address: string }) => {
    try {
      const analyzer = new StrategyAnalyzer(
        agent.accountManager,
        agent.contractInteractor
      );

      const recommendations = await analyzer.recommendActions(address);
      
      return JSON.stringify({
        status: "success",
        recommendations,
      });
    } catch (error) {
      return JSON.stringify({
        status: "failure",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }, {
    name: "analyze_wallet_opportunities",
    description: "Analyzes a wallet's state and recommends possible actions based on available assets",
    schema: analyzeWalletSchema,
  })
];
```

# src/lib/agent/tools/helper.ts

```ts
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
```

# src/lib/constant.ts

```ts
import { config } from "dotenv";

config();

export const tokenAddresses: { [key: string]: string } = {
  ETH: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
  USDC: "0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8",
  USDT: "0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8",
  STRK: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
};
export const INTERNAL_SERVER_ERROR =
  "Something went wrong, please try again later!";
export const RESSOURCE_NOT_FOUND = "NOT FOUND";
export const UNAUTHORIZED = "Unauthorized";
export const FORBIDDEN = "Forbidden";
export const BAD_REQUEST = "Bad request";

export const RPC_URL = process.env.RPC_URL;



const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m"
};

const colorLog = {
  error: (msg: string) => console.log(`${colors.red}${msg}${colors.reset}`),
  success: (msg: string) => console.log(`${colors.green}${msg}${colors.reset}`),
  warning: (msg: string) => console.log(`${colors.yellow}${msg}${colors.reset}`),
  info: (msg: string) => console.log(`${colors.cyan}${msg}${colors.reset}`),
  debug: (msg: string) => console.log(`${colors.magenta}${msg}${colors.reset}`),
  custom: (msg: string, color: keyof typeof colors) => console.log(`${colors[color]}${msg}${colors.reset}`)
};
```

# src/lib/decorators/reponse_message.ts

```ts
import { SetMetadata } from "@nestjs/common";

export const ResponseMessage = (message: string) =>
  SetMetadata("response_message", message);

```

# src/lib/global-filters/all.ts

```ts
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from "@nestjs/common";

import { FastifyRequest, FastifyReply } from "fastify";
import { INTERNAL_SERVER_ERROR } from "../constant";

@Catch()
export class allLeftOverExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(allLeftOverExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    this.logger.log("Excepetion catched in allLeftOverException");
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();

    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    this.logger.log({ exception });
    const message =
      exception instanceof Error ? exception?.message : INTERNAL_SERVER_ERROR;
    console.log({ message });

    response.status(status).send({
      status,
      message: message,
      path: request.url,
    });
  }
}

```

# src/lib/global-filters/http.ts

```ts
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from "@nestjs/common";

import { FastifyRequest, FastifyReply } from "fastify";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(exception: HttpException, host: ArgumentsHost) {
    this.logger.log("Exception catched in HttpExceptionFilter", exception);
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();

    const statusCode = exception.getStatus();

    response.status(statusCode);
    if (typeof exception.getResponse() === "string") {
      response.send({
        statusCode,
        error: exception.getResponse(),
        path: request.url,
        serverError: true,
      });
    } else {
      response.send(exception.getResponse());
    }
  }
}

```

# src/lib/guard/ApikeyGuard.ts

```ts
import { FastifyRequest } from "fastify";
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { ConfigurationService } from "../../config/configuration";
import { UnauthorizedError } from "../../common/errors/application.errors";

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly config: ConfigurationService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<FastifyRequest>();
    const apiKey = request.headers["x-api-key"] as string;

    if (!apiKey) {
      throw new UnauthorizedError("API key is missing");
    }

    if (apiKey != this.config.apiKey) {
      throw new UnauthorizedError("API key is not valid");
    }

    return true;
  }
}

```

# src/lib/interceptors/response.ts

```ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AgentResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        let parsedData;

        // If data is a string, try to parse it
        if (typeof data === "string") {
          try {
            parsedData = JSON.parse(data);
          } catch (e) {
            parsedData = { text: data };
          }
        } else {
          parsedData = data;
        }

        // If the parsed data already has the expected structure, return it directly
        if (parsedData?.data?.output) {
          return parsedData.data;
        }

        // Format the response
        return {
          input: context.switchToHttp().getRequest().body?.request || "",
          output: [
            {
              index: 0,
              type: "text",
              text:
                parsedData?.text ||
                parsedData?.message ||
                JSON.stringify(parsedData),
            },
          ],
        };
      }),
    );
  }
}

```

# src/lib/utils/account/AccountManager.ts

```ts
import { Account, CallData, stark, hash, ec } from "starknet";
import { AccountDetails, BaseUtilityClass, TransactionResult } from "../types";

export class AccountManager implements BaseUtilityClass {
  constructor(public provider: any) {}

  async createAccount(): Promise<AccountDetails> {
    try {
      const privateKey = stark.randomAddress();
      const publicKey = ec.starkCurve.getStarkKey(privateKey);
      const accountClassHash =
        "0x061dac032f228abef9c6626f995015233097ae253a7f72d68552db02f2971b8f";
      const constructorCallData = CallData.compile({ publicKey });
      const address = hash.calculateContractAddressFromHash(
        publicKey,
        accountClassHash,
        constructorCallData,
        0,
      );

      return {
        address,
        privateKey,
        publicKey,
        deployStatus: false,
      };
    } catch (error) {
      throw new Error(`Failed to create account: ${error.message}`);
    }
  }

  async deployAccount(
    accountDetails: AccountDetails,
  ): Promise<TransactionResult> {
    try {
      const account = new Account(
        this.provider,
        accountDetails.address,
        accountDetails.privateKey,
      );

      const accountClassHash =
        "0x061dac032f228abef9c6626f995015233097ae253a7f72d68552db02f2971b8f";
      const constructorCallData = CallData.compile({
        publicKey: accountDetails.publicKey,
      });

      const { transaction_hash } = await account.deployAccount({
        classHash: accountClassHash,
        constructorCalldata: constructorCallData,
        addressSalt: accountDetails.publicKey,
      });

      await this.provider.waitForTransaction(transaction_hash);

      return {
        status: "success",
        transactionHash: transaction_hash,
      };
    } catch (error) {
      return {
        status: "failure",
        error: error.message,
      };
    }
  }

  async getAccountBalance(address: string): Promise<string> {
    try {
      const balance = await this.provider.getBalance(address);
      return balance.toString();
    } catch (error) {
      throw new Error(`Failed to get account balance: ${error.message}`);
    }
  }

  async getNonce(address: string): Promise<string> {
    try {
      const nonce = await this.provider.getNonceForAddress(address);
      return nonce.toString();
    } catch (error) {
      throw new Error(`Failed to get nonce: ${error.message}`);
    }
  }

  async isAccountDeployed(address: string): Promise<boolean> {
    try {
      const code = await this.provider.getClassAt(address);
      return code !== null;
    } catch (error) {
      return false;
    }
  }

  async estimateAccountDeployFee(accountDetails: AccountDetails) {
    try {
      const account = new Account(
        this.provider,
        accountDetails.address,
        accountDetails.privateKey,
      );

      const accountClassHash =
        "0x061dac032f228abef9c6626f995015233097ae253a7f72d68552db02f2971b8f";
      const constructorCallData = CallData.compile({
        publicKey: accountDetails.publicKey,
      });

      return await account.estimateAccountDeployFee({
        classHash: accountClassHash,
        constructorCalldata: constructorCallData,
        addressSalt: accountDetails.publicKey,
      });
    } catch (error) {
      throw new Error(`Failed to estimate deploy fee: ${error.message}`);
    }
  }
}

```

# src/lib/utils/contract/ContractInteractor.ts

```ts
// src/lib/utils/contract/ContractInteractor.ts

import { Account, Contract, Call, CallData, hash, EstimateFee } from "starknet";
import {
  BaseUtilityClass,
  ContractDeployResult,
  TransactionResult,
} from "../types";

export class ContractInteractor implements BaseUtilityClass {
  constructor(public provider: any) {}

  async deployContract(
    account: Account,
    classHash: string,
    constructorCalldata: any[] = [],
    salt?: string,
  ): Promise<ContractDeployResult> {
    try {
      const deployPayload = {
        classHash,
        constructorCalldata: CallData.compile(constructorCalldata),
        salt: salt || hash.getSelectorFromName(Math.random().toString()),
      };

      const { transaction_hash, contract_address } =
        await account.deploy(deployPayload);
      await this.provider.waitForTransaction(transaction_hash);

      return {
        transactionHash: transaction_hash,
        contractAddress: contract_address,
      };
    } catch (error) {
      throw new Error(`Failed to deploy contract: ${error.message}`);
    }
  }

  async estimateContractDeploy(
    account: Account,
    classHash: string,
    constructorCalldata: any[] = [],
    salt?: string,
  ): Promise<EstimateFee> {
    try {
      const deployPayload = {
        classHash,
        constructorCalldata: CallData.compile(constructorCalldata),
        salt: salt || hash.getSelectorFromName(Math.random().toString()),
      };

      return account.estimateDeployFee(deployPayload);
    } catch (error) {
      throw new Error(`Failed to estimate contract deploy: ${error.message}`);
    }
  }

  async multicall(account: Account, calls: Call[]): Promise<TransactionResult> {
    try {
      const { transaction_hash } = await account.execute(calls);
      await this.provider.waitForTransaction(transaction_hash);

      return {
        status: "success",
        transactionHash: transaction_hash,
      };
    } catch (error) {
      return {
        status: "failure",
        error: error.message,
      };
    }
  }

  async estimateMulticall(
    account: Account,
    calls: Call[],
  ): Promise<EstimateFee> {
    try {
      return account.estimateInvokeFee(calls);
    } catch (error) {
      throw new Error(`Failed to estimate multicall: ${error.message}`);
    }
  }

  createContract(abi: any[], address: string, account?: Account): Contract {
    return new Contract(abi, address, account || this.provider);
  }

  async readContract(
    contract: Contract,
    method: string,
    args: any[] = [],
  ): Promise<any> {
    try {
      return await contract.call(method, args);
    } catch (error) {
      throw new Error(`Failed to read contract: ${error.message}`);
    }
  }

  async writeContract(
    contract: Contract,
    method: string,
    args: any[] = [],
  ): Promise<TransactionResult> {
    try {
      const { transaction_hash } = await contract.invoke(method, args);
      await this.provider.waitForTransaction(transaction_hash);

      return {
        status: "success",
        transactionHash: transaction_hash,
      };
    } catch (error) {
      return {
        status: "failure",
        error: error.message,
      };
    }
  }

  async estimateContractWrite(
    contract: Contract,
    method: string,
    args: any[] = [],
  ): Promise<EstimateFee> {
    if (!contract.account) {
      throw new Error(
        "Contract must be connected to an account to estimate fees",
      );
    }

    try {
      return await contract.estimate(method, args);
    } catch (error) {
      throw new Error(`Failed to estimate contract write: ${error.message}`);
    }
  }

  formatTokenAmount(amount: string | number, decimals: number = 18): string {
    const value = typeof amount === "string" ? amount : amount.toString();
    const [whole, fraction = ""] = value.split(".");
    const paddedFraction = fraction.padEnd(decimals, "0");
    return whole + paddedFraction;
  }

  parseTokenAmount(amount: string, decimals: number = 18): string {
    const amountBigInt = BigInt(amount);
    const divisor = BigInt(10) ** BigInt(decimals);
    const wholePart = amountBigInt / divisor;
    const fractionPart = amountBigInt % divisor;
    const paddedFraction = fractionPart.toString().padStart(decimals, "0");
    return `${wholePart}.${paddedFraction}`;
  }
}

```

# src/lib/utils/monitoring/TransactionMonitor.ts

```ts
import { TransactionReceipt, TransactionStatus } from "starknet";
import { BaseUtilityClass } from "../types";

export class TransactionMonitor implements BaseUtilityClass {
  constructor(
    public provider: any,
    private readonly pollingInterval: number = 5000,
  ) {}

  async waitForTransaction(
    txHash: string,
    callback?: (status: TransactionStatus) => void,
  ): Promise<TransactionReceipt> {
    let receipt: TransactionReceipt;

    while (true) {
      try {
        receipt = await this.provider.getTransactionReceipt(txHash);

        if (callback) {
          const status = await this.provider.getTransactionStatus(txHash);
          callback(status);
        }

        if (
          receipt.finality_status === "ACCEPTED_ON_L2" ||
          receipt.finality_status === "ACCEPTED_ON_L1"
        ) {
          break;
        }

        if (receipt.execution_status === "REVERTED") {
          throw new Error(`Transaction ${txHash} was reverted`);
        }

        await new Promise((resolve) =>
          setTimeout(resolve, this.pollingInterval),
        );
      } catch (error) {
        if (error.message.includes("Transaction hash not found")) {
          await new Promise((resolve) =>
            setTimeout(resolve, this.pollingInterval),
          );
          continue;
        }
        throw error;
      }
    }

    return receipt;
  }

  async getTransactionEvents(txHash: string): Promise<Event[]> {
    try {
      const receipt = await this.provider.getTransactionReceipt(txHash);
      return receipt.events || [];
    } catch (error) {
      throw new Error(`Failed to get transaction events: ${error.message}`);
    }
  }

  async watchEvents(
    fromBlock: number,
    toBlock: number | "latest" = "latest",
    callback: (events: Event[]) => void,
  ): Promise<void> {
    let currentBlock = fromBlock;

    while (true) {
      try {
        const latestBlock =
          toBlock === "latest" ? await this.provider.getBlockNumber() : toBlock;

        if (currentBlock > latestBlock) {
          break;
        }

        const block = await this.provider.getBlockWithTxs(currentBlock);
        const events: Event[] = [];

        for (const tx of block.transactions) {
          if (tx.transaction_hash) {
            const receipt = await this.provider.getTransactionReceipt(
              tx.transaction_hash,
            );
            if (receipt.events) {
              events.push(...receipt.events);
            }
          }
        }

        if (events.length > 0) {
          callback(events);
        }

        currentBlock++;
        await new Promise((resolve) =>
          setTimeout(resolve, this.pollingInterval),
        );
      } catch (error) {
        console.error("Error watching events:", error);
        await new Promise((resolve) =>
          setTimeout(resolve, this.pollingInterval),
        );
      }
    }
  }

  async getTransactionStatus(txHash: string): Promise<TransactionStatus> {
    try {
      return await this.provider.getTransactionStatus(txHash);
    } catch (error) {
      throw new Error(`Failed to get transaction status: ${error.message}`);
    }
  }
}

```

# src/lib/utils/Output/console_log.ts

```ts
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    
    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m"
};

export const colorLog = {
    error: (msg: string) => console.log(`${colors.red}${msg}${colors.reset}`),
    success: (msg: string) => console.log(`${colors.green}${msg}${colors.reset}`),
    warning: (msg: string) => console.log(`${colors.yellow}${msg}${colors.reset}`),
    info: (msg: string) => console.log(`${colors.cyan}${msg}${colors.reset}`),
    debug: (msg: string) => console.log(`${colors.magenta}${msg}${colors.reset}`),
    custom: (msg: string, color: keyof typeof colors) => console.log(`${colors[color]}${msg}${colors.reset}`)
};
```

# src/lib/utils/symbolToDecimal.ts

```ts
export const symbolToDecimal = (symbol: string): number => {
  if (symbol === "USDC" || symbol === "USDT") {
    return 6;
  }
  return 18;
};

```

# src/lib/utils/types/index.ts

```ts
import { ProviderInterface } from "starknet";

export interface AccountDetails {
  address: string;
  privateKey: string;
  publicKey: string;
  deployStatus: boolean;
}

export interface TransactionResult {
  status: "success" | "failure";
  transactionHash?: string;
  error?: string;
}

export interface BaseUtilityClass {
  provider: ProviderInterface;
}

export interface ContractDeployResult {
  transactionHash: string;
  contractAddress: string | string[];
}

export interface TokenAmount {
  amount: string;
  decimals: number;
}

export type TypedData = {
  types: {
    StarkNetDomain?: TypeElement[];
    [additionalProperties: string]: TypeElement[] | undefined;
  };
  primaryType: string;
  domain: StarkNetDomain;
  message: Record<string, any>;
};

export type TypeElement = {
  name: string;
  type: string;
};

export type StarkNetDomain = {
  name: string;
  version: string;
  chainId: string | number;
};

export type WeierstrassSignatureType = {
  r: string;
  s: string;
  recoveryParam?: number | null;
};

```

# src/lib/utils/types/simulatetransaction.ts

```ts
import {TransactionType, BigNumberish, RawArgs, RawArgsArray} from "starknet";


    /*Invocation Invoke Type */
export type InvocationInvokePayload = {
    contractAddress : string,
    entrypoint : string,
    calldata : string[],
}

export type Invocation_Invoke = {
    type : TransactionType.INVOKE,
    payload : InvocationInvokePayload,
}

    /*Invocation DEPLOY_ACCOUNT Type */

export type Invocation_Deploy_Account_Payload = {
    classHash : string,
    constructorCalldata?: RawArgs,
    addressSalt?: BigNumberish,
    contractAddress? : string,
}

export type Invocation_Deploy_Account = {
    type : TransactionType.DEPLOY_ACCOUNT,
    payload : Invocation_Deploy_Account_Payload,
}

```

# src/lib/utils/types/swap.ts

```ts
import { TransactionReceipt } from "starknet";

export interface SwapResult {
  status: "success" | "failure";
  message?: string;
  transactionHash?: string;
  sellAmount?: number;
  sellToken?: string;
  buyToken?: string;
  amountReceived?: string;
  receipt?: TransactionReceipt;
  events?: Event[];
  error?: string;
  step?: string;
}

export interface SwapQuote {
  sellTokenAddress: string;
  buyTokenAddress: string;
  sellAmount: string;
  buyAmount: string;
  guaranteedBuyAmount: string;
  fee: string;
  sourceAddress: string;
  priceImpact: string;
}

export interface SwapOptions {
  slippage: number;
  deadline?: number;
  referrer?: string;
}

```

# src/main.ts

```ts
// src/main.ts

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe, Logger, BadRequestException } from "@nestjs/common";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { ValidationError as ClassValidatorError } from "class-validator";
import helmet from "helmet";
import { GlobalExceptionFilter } from "./common/filters/exception.filter";
import ErrorLoggingInterceptor from "./common/interceptors/error-logging.interceptor";
import { ConfigurationService } from "./config/configuration";

async function bootstrap() {
  const logger = new Logger("Bootstrap");

  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    const config = app.get(ConfigurationService);

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        validateCustomDecorators: true,
        exceptionFactory: (errors: ClassValidatorError[]) => {
          const validationErrors = errors.reduce<Record<string, string[]>>(
            (acc, err) => {
              if (err.constraints) {
                acc[err.property] = Object.values(err.constraints);
              }
              return acc;
            },
            {},
          );

          throw new BadRequestException({
            statusCode: 400,
            message: "Validation failed",
            errors: validationErrors,
          });
        },
      }),
    );

    app.useGlobalFilters(new GlobalExceptionFilter(config));
    app.useGlobalInterceptors(new ErrorLoggingInterceptor());

    app.use(helmet({ crossOriginResourcePolicy: false }));
    app.setGlobalPrefix("/api");

    app.enableCors({
      origin: true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    });

    await app.listen(config.port, "0.0.0.0");

    logger.log(`Application is running on: ${await app.getUrl()}`);
    logger.log(`Environment: ${config.nodeEnv}`);
  } catch (error) {
    logger.error("Failed to start application", error);
    process.exit(1);
  }
}

bootstrap();

```

# starknet-agent-kit-0.0.1.tgz

This is a binary file of the type: Binary

# test/app.e2e-spec.ts

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World!");
  });
});

```

# test/jest-e2e.json

```json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}

```

# tsconfig.build.json

```json
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2021",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "test",
    "src/frontend",
    "**/frontend/**"
  ]
}
```

