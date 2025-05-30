/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SemanticThreadFilter,
  SemanticThreadFilter$inboundSchema,
  SemanticThreadFilter$Outbound,
  SemanticThreadFilter$outboundSchema,
} from "./semanticthreadfilter.js";
import {
  SemanticThreadGroupBy,
  SemanticThreadGroupBy$inboundSchema,
  SemanticThreadGroupBy$Outbound,
  SemanticThreadGroupBy$outboundSchema,
} from "./semanticthreadgroupby.js";
import {
  SemanticThreadOrderBy,
  SemanticThreadOrderBy$inboundSchema,
  SemanticThreadOrderBy$Outbound,
  SemanticThreadOrderBy$outboundSchema,
} from "./semanticthreadorderby.js";
import {
  SemanticThreadSelection,
  SemanticThreadSelection$inboundSchema,
  SemanticThreadSelection$Outbound,
  SemanticThreadSelection$outboundSchema,
} from "./semanticthreadselection.js";

/**
 * Query Semantic Threads Params
 */
export type QuerySemanticThreadsRequestBody = {
  query?: string | undefined;
  select?: Array<SemanticThreadSelection> | undefined;
  groupBy?: Array<SemanticThreadGroupBy> | undefined;
  where?: SemanticThreadFilter | undefined;
  orderBy?: Array<SemanticThreadOrderBy> | undefined;
  /**
   * Notes are not persisted, but may be useful for your debugging purposes
   */
  notes?: string | undefined;
};

/** @internal */
export const QuerySemanticThreadsRequestBody$inboundSchema: z.ZodType<
  QuerySemanticThreadsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string().optional(),
  select: z.array(SemanticThreadSelection$inboundSchema).optional(),
  groupBy: z.array(SemanticThreadGroupBy$inboundSchema).optional(),
  where: SemanticThreadFilter$inboundSchema.optional(),
  orderBy: z.array(SemanticThreadOrderBy$inboundSchema).optional(),
  notes: z.string().optional(),
});

/** @internal */
export type QuerySemanticThreadsRequestBody$Outbound = {
  query?: string | undefined;
  select?: Array<SemanticThreadSelection$Outbound> | undefined;
  groupBy?: Array<SemanticThreadGroupBy$Outbound> | undefined;
  where?: SemanticThreadFilter$Outbound | undefined;
  orderBy?: Array<SemanticThreadOrderBy$Outbound> | undefined;
  notes?: string | undefined;
};

/** @internal */
export const QuerySemanticThreadsRequestBody$outboundSchema: z.ZodType<
  QuerySemanticThreadsRequestBody$Outbound,
  z.ZodTypeDef,
  QuerySemanticThreadsRequestBody
> = z.object({
  query: z.string().optional(),
  select: z.array(SemanticThreadSelection$outboundSchema).optional(),
  groupBy: z.array(SemanticThreadGroupBy$outboundSchema).optional(),
  where: SemanticThreadFilter$outboundSchema.optional(),
  orderBy: z.array(SemanticThreadOrderBy$outboundSchema).optional(),
  notes: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuerySemanticThreadsRequestBody$ {
  /** @deprecated use `QuerySemanticThreadsRequestBody$inboundSchema` instead. */
  export const inboundSchema = QuerySemanticThreadsRequestBody$inboundSchema;
  /** @deprecated use `QuerySemanticThreadsRequestBody$outboundSchema` instead. */
  export const outboundSchema = QuerySemanticThreadsRequestBody$outboundSchema;
  /** @deprecated use `QuerySemanticThreadsRequestBody$Outbound` instead. */
  export type Outbound = QuerySemanticThreadsRequestBody$Outbound;
}

export function querySemanticThreadsRequestBodyToJSON(
  querySemanticThreadsRequestBody: QuerySemanticThreadsRequestBody,
): string {
  return JSON.stringify(
    QuerySemanticThreadsRequestBody$outboundSchema.parse(
      querySemanticThreadsRequestBody,
    ),
  );
}

export function querySemanticThreadsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<QuerySemanticThreadsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QuerySemanticThreadsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QuerySemanticThreadsRequestBody' from JSON`,
  );
}
