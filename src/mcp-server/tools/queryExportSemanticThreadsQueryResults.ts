/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { queryExportSemanticThreadsQueryResults } from "../../funcs/queryExportSemanticThreadsQueryResults.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.QuerySemanticThreadsParams$inboundSchema,
};

export const tool$queryExportSemanticThreadsQueryResults: ToolDefinition<
  typeof args
> = {
  name: "query-export-semantic-threads-query-results",
  description: `Export Semantic Threads Query Results`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await queryExportSemanticThreadsQueryResults(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
