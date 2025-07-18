/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { feedbackGetFeedbackById } from "../../funcs/feedbackGetFeedbackById.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetFeedbackByIdRequest$inboundSchema,
};

export const tool$feedbackGetFeedbackById: ToolDefinition<typeof args> = {
  name: "feedback-get-feedback-by-id",
  description: `Get Feedback by ID`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await feedbackGetFeedbackById(
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
