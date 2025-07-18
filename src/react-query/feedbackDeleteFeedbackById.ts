/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { InkeepAnalyticsCore } from "../core.js";
import { feedbackDeleteFeedbackById } from "../funcs/feedbackDeleteFeedbackById.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useInkeepAnalyticsContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type FeedbackDeleteFeedbackByIdMutationVariables = {
  request: operations.DeleteFeedbackByIdRequest;
  options?: RequestOptions;
};

export type FeedbackDeleteFeedbackByIdMutationData =
  operations.DeleteFeedbackByIdResponseBody;

/**
 * Delete Feedback by ID
 */
export function useFeedbackDeleteFeedbackByIdMutation(
  options?: MutationHookOptions<
    FeedbackDeleteFeedbackByIdMutationData,
    Error,
    FeedbackDeleteFeedbackByIdMutationVariables
  >,
): UseMutationResult<
  FeedbackDeleteFeedbackByIdMutationData,
  Error,
  FeedbackDeleteFeedbackByIdMutationVariables
> {
  const client = useInkeepAnalyticsContext();
  return useMutation({
    ...buildFeedbackDeleteFeedbackByIdMutation(client, options),
    ...options,
  });
}

export function mutationKeyFeedbackDeleteFeedbackById(): MutationKey {
  return ["@inkeep/inkeep-analytics", "feedback", "deleteFeedbackById"];
}

export function buildFeedbackDeleteFeedbackByIdMutation(
  client$: InkeepAnalyticsCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: FeedbackDeleteFeedbackByIdMutationVariables,
  ) => Promise<FeedbackDeleteFeedbackByIdMutationData>;
} {
  return {
    mutationKey: mutationKeyFeedbackDeleteFeedbackById(),
    mutationFn: function feedbackDeleteFeedbackByIdMutationFn({
      request,
      options,
    }): Promise<FeedbackDeleteFeedbackByIdMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(feedbackDeleteFeedbackById(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
