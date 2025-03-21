/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EventsFilter,
  EventsFilter$inboundSchema,
  EventsFilter$Outbound,
  EventsFilter$outboundSchema,
} from "./eventsfilter.js";
import {
  EventsGroupBy,
  EventsGroupBy$inboundSchema,
  EventsGroupBy$Outbound,
  EventsGroupBy$outboundSchema,
} from "./eventsgroupby.js";
import {
  EventsOrderBy,
  EventsOrderBy$inboundSchema,
  EventsOrderBy$Outbound,
  EventsOrderBy$outboundSchema,
} from "./eventsorderby.js";
import {
  EventsSelection,
  EventsSelection$inboundSchema,
  EventsSelection$Outbound,
  EventsSelection$outboundSchema,
} from "./eventsselection.js";

/**
 * Query Events Params
 */
export type QueryEventsRequestBody = {
  select?: Array<EventsSelection> | undefined;
  groupBy?: Array<EventsGroupBy> | undefined;
  where?: EventsFilter | undefined;
  orderBy?: Array<EventsOrderBy> | undefined;
  /**
   * Notes are not persisted, but may be useful for your debugging purposes
   */
  notes?: string | undefined;
};

/** @internal */
export const QueryEventsRequestBody$inboundSchema: z.ZodType<
  QueryEventsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  select: z.array(EventsSelection$inboundSchema).optional(),
  groupBy: z.array(EventsGroupBy$inboundSchema).optional(),
  where: EventsFilter$inboundSchema.optional(),
  orderBy: z.array(EventsOrderBy$inboundSchema).optional(),
  notes: z.string().optional(),
});

/** @internal */
export type QueryEventsRequestBody$Outbound = {
  select?: Array<EventsSelection$Outbound> | undefined;
  groupBy?: Array<EventsGroupBy$Outbound> | undefined;
  where?: EventsFilter$Outbound | undefined;
  orderBy?: Array<EventsOrderBy$Outbound> | undefined;
  notes?: string | undefined;
};

/** @internal */
export const QueryEventsRequestBody$outboundSchema: z.ZodType<
  QueryEventsRequestBody$Outbound,
  z.ZodTypeDef,
  QueryEventsRequestBody
> = z.object({
  select: z.array(EventsSelection$outboundSchema).optional(),
  groupBy: z.array(EventsGroupBy$outboundSchema).optional(),
  where: EventsFilter$outboundSchema.optional(),
  orderBy: z.array(EventsOrderBy$outboundSchema).optional(),
  notes: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryEventsRequestBody$ {
  /** @deprecated use `QueryEventsRequestBody$inboundSchema` instead. */
  export const inboundSchema = QueryEventsRequestBody$inboundSchema;
  /** @deprecated use `QueryEventsRequestBody$outboundSchema` instead. */
  export const outboundSchema = QueryEventsRequestBody$outboundSchema;
  /** @deprecated use `QueryEventsRequestBody$Outbound` instead. */
  export type Outbound = QueryEventsRequestBody$Outbound;
}

export function queryEventsRequestBodyToJSON(
  queryEventsRequestBody: QueryEventsRequestBody,
): string {
  return JSON.stringify(
    QueryEventsRequestBody$outboundSchema.parse(queryEventsRequestBody),
  );
}

export function queryEventsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<QueryEventsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QueryEventsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QueryEventsRequestBody' from JSON`,
  );
}
