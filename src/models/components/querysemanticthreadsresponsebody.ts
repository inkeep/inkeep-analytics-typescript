/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  QuerySemanticThreadsResponseData,
  QuerySemanticThreadsResponseData$inboundSchema,
  QuerySemanticThreadsResponseData$Outbound,
  QuerySemanticThreadsResponseData$outboundSchema,
} from "./querysemanticthreadsresponsedata.js";

/**
 * Status of the response
 */
export const QuerySemanticThreadsResponseBodyStatus = {
  Ok: "ok",
} as const;
/**
 * Status of the response
 */
export type QuerySemanticThreadsResponseBodyStatus = ClosedEnum<
  typeof QuerySemanticThreadsResponseBodyStatus
>;

/**
 * Response body for QuerySemanticThreads query endpoint
 */
export type QuerySemanticThreadsResponseBody = {
  /**
   * Status of the response
   */
  status: QuerySemanticThreadsResponseBodyStatus;
  /**
   * Data object containing QuerySemanticThreads query results and pagination information
   */
  data: QuerySemanticThreadsResponseData;
};

/** @internal */
export const QuerySemanticThreadsResponseBodyStatus$inboundSchema:
  z.ZodNativeEnum<typeof QuerySemanticThreadsResponseBodyStatus> = z.nativeEnum(
    QuerySemanticThreadsResponseBodyStatus,
  );

/** @internal */
export const QuerySemanticThreadsResponseBodyStatus$outboundSchema:
  z.ZodNativeEnum<typeof QuerySemanticThreadsResponseBodyStatus> =
    QuerySemanticThreadsResponseBodyStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuerySemanticThreadsResponseBodyStatus$ {
  /** @deprecated use `QuerySemanticThreadsResponseBodyStatus$inboundSchema` instead. */
  export const inboundSchema =
    QuerySemanticThreadsResponseBodyStatus$inboundSchema;
  /** @deprecated use `QuerySemanticThreadsResponseBodyStatus$outboundSchema` instead. */
  export const outboundSchema =
    QuerySemanticThreadsResponseBodyStatus$outboundSchema;
}

/** @internal */
export const QuerySemanticThreadsResponseBody$inboundSchema: z.ZodType<
  QuerySemanticThreadsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: QuerySemanticThreadsResponseBodyStatus$inboundSchema,
  data: QuerySemanticThreadsResponseData$inboundSchema,
});

/** @internal */
export type QuerySemanticThreadsResponseBody$Outbound = {
  status: string;
  data: QuerySemanticThreadsResponseData$Outbound;
};

/** @internal */
export const QuerySemanticThreadsResponseBody$outboundSchema: z.ZodType<
  QuerySemanticThreadsResponseBody$Outbound,
  z.ZodTypeDef,
  QuerySemanticThreadsResponseBody
> = z.object({
  status: QuerySemanticThreadsResponseBodyStatus$outboundSchema,
  data: QuerySemanticThreadsResponseData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuerySemanticThreadsResponseBody$ {
  /** @deprecated use `QuerySemanticThreadsResponseBody$inboundSchema` instead. */
  export const inboundSchema = QuerySemanticThreadsResponseBody$inboundSchema;
  /** @deprecated use `QuerySemanticThreadsResponseBody$outboundSchema` instead. */
  export const outboundSchema = QuerySemanticThreadsResponseBody$outboundSchema;
  /** @deprecated use `QuerySemanticThreadsResponseBody$Outbound` instead. */
  export type Outbound = QuerySemanticThreadsResponseBody$Outbound;
}

export function querySemanticThreadsResponseBodyToJSON(
  querySemanticThreadsResponseBody: QuerySemanticThreadsResponseBody,
): string {
  return JSON.stringify(
    QuerySemanticThreadsResponseBody$outboundSchema.parse(
      querySemanticThreadsResponseBody,
    ),
  );
}

export function querySemanticThreadsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<QuerySemanticThreadsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QuerySemanticThreadsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QuerySemanticThreadsResponseBody' from JSON`,
  );
}
