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
