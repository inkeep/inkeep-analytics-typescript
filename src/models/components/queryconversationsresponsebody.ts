/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  QueryConversationsResponseData,
  QueryConversationsResponseData$inboundSchema,
  QueryConversationsResponseData$Outbound,
  QueryConversationsResponseData$outboundSchema,
} from "./queryconversationsresponsedata.js";

/**
 * Status of the response
 */
export const Status = {
  Ok: "ok",
} as const;
/**
 * Status of the response
 */
export type Status = ClosedEnum<typeof Status>;

/**
 * Response body for QueryConversations query endpoint
 */
export type QueryConversationsResponseBody = {
  /**
   * Status of the response
   */
  status: Status;
  /**
   * Data object containing QueryConversations query results and pagination information
   */
  data: QueryConversationsResponseData;
};

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const QueryConversationsResponseBody$inboundSchema: z.ZodType<
  QueryConversationsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: Status$inboundSchema,
  data: QueryConversationsResponseData$inboundSchema,
});

/** @internal */
export type QueryConversationsResponseBody$Outbound = {
  status: string;
  data: QueryConversationsResponseData$Outbound;
};

/** @internal */
export const QueryConversationsResponseBody$outboundSchema: z.ZodType<
  QueryConversationsResponseBody$Outbound,
  z.ZodTypeDef,
  QueryConversationsResponseBody
> = z.object({
  status: Status$outboundSchema,
  data: QueryConversationsResponseData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryConversationsResponseBody$ {
  /** @deprecated use `QueryConversationsResponseBody$inboundSchema` instead. */
  export const inboundSchema = QueryConversationsResponseBody$inboundSchema;
  /** @deprecated use `QueryConversationsResponseBody$outboundSchema` instead. */
  export const outboundSchema = QueryConversationsResponseBody$outboundSchema;
  /** @deprecated use `QueryConversationsResponseBody$Outbound` instead. */
  export type Outbound = QueryConversationsResponseBody$Outbound;
}

export function queryConversationsResponseBodyToJSON(
  queryConversationsResponseBody: QueryConversationsResponseBody,
): string {
  return JSON.stringify(
    QueryConversationsResponseBody$outboundSchema.parse(
      queryConversationsResponseBody,
    ),
  );
}

export function queryConversationsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<QueryConversationsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QueryConversationsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QueryConversationsResponseBody' from JSON`,
  );
}
