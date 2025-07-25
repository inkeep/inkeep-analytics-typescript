/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { feedbackDeleteFeedbackById } from "../../funcs/feedbackDeleteFeedbackById.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteFeedbackByIdRequest$inboundSchema,
};

export const tool$feedbackDeleteFeedbackById: ToolDefinition<typeof args> = {
  name: "feedback-delete-feedback-by-id",
  description: `Delete Feedback by ID`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await feedbackDeleteFeedbackById(
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
