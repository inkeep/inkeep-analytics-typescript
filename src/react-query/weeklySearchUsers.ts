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
import { weeklySearchUsers } from "../funcs/weeklySearchUsers.js";
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

export type WeeklySearchUsersQueryData =
  operations.WeeklySearchUsersResponseBody;

/**
 * Weekly Search Users
 */
export function useWeeklySearchUsers(
  request: operations.WeeklySearchUsersRequest,
  options?: QueryHookOptions<WeeklySearchUsersQueryData>,
): UseQueryResult<WeeklySearchUsersQueryData, Error> {
  const client = useInkeepAnalyticsContext();
  return useQuery({
    ...buildWeeklySearchUsersQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Weekly Search Users
 */
export function useWeeklySearchUsersSuspense(
  request: operations.WeeklySearchUsersRequest,
  options?: SuspenseQueryHookOptions<WeeklySearchUsersQueryData>,
): UseSuspenseQueryResult<WeeklySearchUsersQueryData, Error> {
  const client = useInkeepAnalyticsContext();
  return useSuspenseQuery({
    ...buildWeeklySearchUsersQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchWeeklySearchUsers(
  queryClient: QueryClient,
  client$: InkeepAnalyticsCore,
  request: operations.WeeklySearchUsersRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildWeeklySearchUsersQuery(
      client$,
      request,
    ),
  });
}

export function setWeeklySearchUsersData(
  client: QueryClient,
  queryKeyBase: [
    parameters: { after?: string | undefined; projectId?: string | undefined },
  ],
  data: WeeklySearchUsersQueryData,
): WeeklySearchUsersQueryData | undefined {
  const key = queryKeyWeeklySearchUsers(...queryKeyBase);

  return client.setQueryData<WeeklySearchUsersQueryData>(key, data);
}

export function invalidateWeeklySearchUsers(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: { after?: string | undefined; projectId?: string | undefined }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@inkeep/inkeep-analytics",
      "weeklySearchUsers",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllWeeklySearchUsers(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@inkeep/inkeep-analytics", "weeklySearchUsers"],
  });
}

export function buildWeeklySearchUsersQuery(
  client$: InkeepAnalyticsCore,
  request: operations.WeeklySearchUsersRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<WeeklySearchUsersQueryData>;
} {
  return {
    queryKey: queryKeyWeeklySearchUsers({
      after: request.after,
      projectId: request.projectId,
    }),
    queryFn: async function weeklySearchUsersQueryFn(
      ctx,
    ): Promise<WeeklySearchUsersQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(weeklySearchUsers(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyWeeklySearchUsers(
  parameters: { after?: string | undefined; projectId?: string | undefined },
): QueryKey {
  return ["@inkeep/inkeep-analytics", "weeklySearchUsers", parameters];
}
