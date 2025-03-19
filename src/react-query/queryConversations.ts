/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { InkeepAnalyticsCore } from "../core.js";
import { queryConversations } from "../funcs/queryConversations.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useInkeepAnalyticsContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type QueryConversationsMutationVariables = {
  security: operations.QueryConversationsSecurity;
  request: components.QueryConversationsRequestBody;
  options?: RequestOptions;
};

export type QueryConversationsMutationData =
  components.QueryConversationsResponseBody;

/**
 * Query Conversations
 */
export function useQueryConversationsMutation(
  options?: MutationHookOptions<
    QueryConversationsMutationData,
    Error,
    QueryConversationsMutationVariables
  >,
): UseMutationResult<
  QueryConversationsMutationData,
  Error,
  QueryConversationsMutationVariables
> {
  const client = useInkeepAnalyticsContext();
  return useMutation({
    ...buildQueryConversationsMutation(client, options),
    ...options,
  });
}

export function mutationKeyQueryConversations(): MutationKey {
  return ["@inkeep/inkeep-analytics", "Query", "conversations"];
}

export function buildQueryConversationsMutation(
  client$: InkeepAnalyticsCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: QueryConversationsMutationVariables,
  ) => Promise<QueryConversationsMutationData>;
} {
  return {
    mutationKey: mutationKeyQueryConversations(),
    mutationFn: function queryConversationsMutationFn({
      security,
      request,
      options,
    }): Promise<QueryConversationsMutationData> {
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
      return unwrapAsync(queryConversations(
        client$,
        security,
        request,
        mergedOptions,
      ));
    },
  };
}
