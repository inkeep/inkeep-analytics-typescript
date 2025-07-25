/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { InkeepAnalyticsCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$conversationGetConversationByExternalId } from "./tools/conversationGetConversationByExternalId.js";
import { tool$conversationsList } from "./tools/conversationsList.js";
import { tool$feedbackDeleteFeedbackById } from "./tools/feedbackDeleteFeedbackById.js";
import { tool$feedbackGetFeedbackById } from "./tools/feedbackGetFeedbackById.js";
import { tool$feedbackList } from "./tools/feedbackList.js";
import { tool$feedbackSubmit } from "./tools/feedbackSubmit.js";
import { tool$queryConversations } from "./tools/queryConversations.js";
import { tool$queryExportSemanticThreadsQueryResults } from "./tools/queryExportSemanticThreadsQueryResults.js";
import { tool$queryQueryEvents } from "./tools/queryQueryEvents.js";
import { tool$queryQueryFeedback } from "./tools/queryQueryFeedback.js";
import { tool$queryQueryPropertyKeys } from "./tools/queryQueryPropertyKeys.js";
import { tool$queryQueryPropertyValues } from "./tools/queryQueryPropertyValues.js";
import { tool$queryQuerySemanticThreads } from "./tools/queryQuerySemanticThreads.js";
import { tool$topSearchQueries } from "./tools/topSearchQueries.js";
import { tool$weeklySearchUsers } from "./tools/weeklySearchUsers.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  apiIntegrationKey?: SDKOptions["apiIntegrationKey"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "InkeepAnalytics",
    version: "0.2.4-alpha.29",
  });

  const client = new InkeepAnalyticsCore({
    apiIntegrationKey: deps.apiIntegrationKey,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$topSearchQueries);
  tool(tool$weeklySearchUsers);
  tool(tool$conversationsList);
  tool(tool$conversationGetConversationByExternalId);
  tool(tool$feedbackSubmit);
  tool(tool$feedbackList);
  tool(tool$feedbackGetFeedbackById);
  tool(tool$feedbackDeleteFeedbackById);
  tool(tool$queryConversations);
  tool(tool$queryQueryEvents);
  tool(tool$queryQueryFeedback);
  tool(tool$queryQuerySemanticThreads);
  tool(tool$queryExportSemanticThreadsQueryResults);
  tool(tool$queryQueryPropertyKeys);
  tool(tool$queryQueryPropertyValues);

  return server;
}
