/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { InkeepAnalyticsCore } from "../core.js";
import { feedbackGetFeedbackById } from "../funcs/feedbackGetFeedbackById.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useInkeepAnalyticsContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type FeedbackGetFeedbackByIdQueryData =
  operations.GetFeedbackByIdResponseBody;

/**
 * Get Feedback by ID
 */
export function useFeedbackGetFeedbackById(
  request: operations.GetFeedbackByIdRequest,
  options?: QueryHookOptions<FeedbackGetFeedbackByIdQueryData>,
): UseQueryResult<FeedbackGetFeedbackByIdQueryData, Error> {
  const client = useInkeepAnalyticsContext();
  return useQuery({
    ...buildFeedbackGetFeedbackByIdQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get Feedback by ID
 */
export function useFeedbackGetFeedbackByIdSuspense(
  request: operations.GetFeedbackByIdRequest,
  options?: SuspenseQueryHookOptions<FeedbackGetFeedbackByIdQueryData>,
): UseSuspenseQueryResult<FeedbackGetFeedbackByIdQueryData, Error> {
  const client = useInkeepAnalyticsContext();
  return useSuspenseQuery({
    ...buildFeedbackGetFeedbackByIdQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchFeedbackGetFeedbackById(
  queryClient: QueryClient,
  client$: InkeepAnalyticsCore,
  request: operations.GetFeedbackByIdRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedbackGetFeedbackByIdQuery(
      client$,
      request,
    ),
  });
}

export function setFeedbackGetFeedbackByIdData(
  client: QueryClient,
  queryKeyBase: [id: string],
  data: FeedbackGetFeedbackByIdQueryData,
): FeedbackGetFeedbackByIdQueryData | undefined {
  const key = queryKeyFeedbackGetFeedbackById(...queryKeyBase);

  return client.setQueryData<FeedbackGetFeedbackByIdQueryData>(key, data);
}

export function invalidateFeedbackGetFeedbackById(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[id: string]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@inkeep/inkeep-analytics",
      "feedback",
      "getFeedbackById",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllFeedbackGetFeedbackById(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@inkeep/inkeep-analytics", "feedback", "getFeedbackById"],
  });
}

export function buildFeedbackGetFeedbackByIdQuery(
  client$: InkeepAnalyticsCore,
  request: operations.GetFeedbackByIdRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<FeedbackGetFeedbackByIdQueryData>;
} {
  return {
    queryKey: queryKeyFeedbackGetFeedbackById(request.id),
    queryFn: async function feedbackGetFeedbackByIdQueryFn(
      ctx,
    ): Promise<FeedbackGetFeedbackByIdQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedbackGetFeedbackById(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyFeedbackGetFeedbackById(id: string): QueryKey {
  return ["@inkeep/inkeep-analytics", "feedback", "getFeedbackById", id];
}
