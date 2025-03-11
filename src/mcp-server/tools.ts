/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { objectOutputType, ZodRawShape, ZodTypeAny } from "zod";
import { InkeepAnalyticsCore } from "../core.js";
import { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
import { isAsyncIterable, isBinaryData, valueToBase64 } from "./shared.js";

export type ToolDefinition<Args extends undefined | ZodRawShape = undefined> =
  Args extends ZodRawShape ? {
      name: string;
      description: string;
      scopes?: MCPScope[];
      args: Args;
      tool: (
        client: InkeepAnalyticsCore,
        args: objectOutputType<Args, ZodTypeAny>,
        extra: RequestHandlerExtra,
      ) => CallToolResult | Promise<CallToolResult>;
    }
    : {
      name: string;
      description: string;
      scopes?: MCPScope[];
      args?: undefined;
      tool: (
        client: InkeepAnalyticsCore,
        extra: RequestHandlerExtra,
      ) => CallToolResult | Promise<CallToolResult>;
    };

export async function formatResult(
  value: unknown,
  init: { response?: Response | undefined },
): Promise<CallToolResult> {
  if (typeof value === "undefined") {
    return { content: [] };
  }

  const { response } = init;
  const contentType = response?.headers.get("content-type") ?? "";
  let content: CallToolResult["content"] = [];

  if (contentType.search(/\bjson\b/g)) {
    content = [{ type: "text", text: JSON.stringify(value) }];
  } else if (
    contentType.startsWith("text/event-stream")
    && isAsyncIterable(value)
  ) {
    content = await consumeSSE(value);
  } else if (contentType.startsWith("text/") && typeof value === "string") {
    content = [{ type: "text", text: value }];
  } else if (isBinaryData(value) && contentType.startsWith("image/")) {
    const data = await valueToBase64(value);
    content = data == null
      ? []
      : [{ type: "image", data, mimeType: contentType }];
  } else {
    return {
      content: [{
        type: "text",
        text: `Unsupported content type: "${contentType}"`,
      }],
      isError: true,
    };
  }

  return { content };
}

async function consumeSSE(
  value: AsyncIterable<unknown>,
): Promise<CallToolResult["content"]> {
  const content: CallToolResult["content"] = [];

  for await (const chunk of value) {
    if (typeof chunk === "string") {
      content.push({ type: "text", text: chunk });
    } else {
      content.push({ type: "text", text: JSON.stringify(chunk) });
    }
  }

  return content;
}

export function createRegisterTool(
  logger: ConsoleLogger,
  server: McpServer,
  sdk: InkeepAnalyticsCore,
  allowedScopes: Set<MCPScope>,
  allowedTools?: Set<string>,
): <A extends ZodRawShape | undefined>(tool: ToolDefinition<A>) => void {
  return <A extends ZodRawShape | undefined>(tool: ToolDefinition<A>): void => {
    if (allowedTools && !allowedTools.has(tool.name)) {
      return;
    }

    const toolScopes = tool.scopes ?? [];
    if (allowedScopes.size > 0 && toolScopes.length === 0) {
      return;
    }

    if (!toolScopes.every((s) => allowedScopes.has(s))) {
      return;
    }

    if (tool.args) {
      server.tool(tool.name, tool.description, tool.args, async (args, ctx) => {
        return tool.tool(sdk, args, ctx);
      });
    } else {
      server.tool(tool.name, tool.description, async (ctx) => {
        return tool.tool(sdk, ctx);
      });
    }

    logger.debug("Registered tool", { name: tool.name });
  };
}
