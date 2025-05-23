/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAllConversationRequest = {
  limit?: number | null | undefined;
  offset?: number | null | undefined;
};

/**
 * Conversations retrieved successfully
 */
export type GetAllConversationResponseBody = {
  conversations: Array<components.Conversation>;
  total: number;
  pageSize: number;
  count: number;
};

/** @internal */
export const GetAllConversationRequest$inboundSchema: z.ZodType<
  GetAllConversationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.nullable(z.number().int().default(20)),
  offset: z.nullable(z.number().int().default(0)),
});

/** @internal */
export type GetAllConversationRequest$Outbound = {
  limit: number | null;
  offset: number | null;
};

/** @internal */
export const GetAllConversationRequest$outboundSchema: z.ZodType<
  GetAllConversationRequest$Outbound,
  z.ZodTypeDef,
  GetAllConversationRequest
> = z.object({
  limit: z.nullable(z.number().int().default(20)),
  offset: z.nullable(z.number().int().default(0)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllConversationRequest$ {
  /** @deprecated use `GetAllConversationRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllConversationRequest$inboundSchema;
  /** @deprecated use `GetAllConversationRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllConversationRequest$outboundSchema;
  /** @deprecated use `GetAllConversationRequest$Outbound` instead. */
  export type Outbound = GetAllConversationRequest$Outbound;
}

export function getAllConversationRequestToJSON(
  getAllConversationRequest: GetAllConversationRequest,
): string {
  return JSON.stringify(
    GetAllConversationRequest$outboundSchema.parse(getAllConversationRequest),
  );
}

export function getAllConversationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAllConversationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllConversationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllConversationRequest' from JSON`,
  );
}

/** @internal */
export const GetAllConversationResponseBody$inboundSchema: z.ZodType<
  GetAllConversationResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  conversations: z.array(components.Conversation$inboundSchema),
  total: z.number(),
  pageSize: z.number(),
  count: z.number(),
});

/** @internal */
export type GetAllConversationResponseBody$Outbound = {
  conversations: Array<components.Conversation$Outbound>;
  total: number;
  pageSize: number;
  count: number;
};

/** @internal */
export const GetAllConversationResponseBody$outboundSchema: z.ZodType<
  GetAllConversationResponseBody$Outbound,
  z.ZodTypeDef,
  GetAllConversationResponseBody
> = z.object({
  conversations: z.array(components.Conversation$outboundSchema),
  total: z.number(),
  pageSize: z.number(),
  count: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllConversationResponseBody$ {
  /** @deprecated use `GetAllConversationResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetAllConversationResponseBody$inboundSchema;
  /** @deprecated use `GetAllConversationResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetAllConversationResponseBody$outboundSchema;
  /** @deprecated use `GetAllConversationResponseBody$Outbound` instead. */
  export type Outbound = GetAllConversationResponseBody$Outbound;
}

export function getAllConversationResponseBodyToJSON(
  getAllConversationResponseBody: GetAllConversationResponseBody,
): string {
  return JSON.stringify(
    GetAllConversationResponseBody$outboundSchema.parse(
      getAllConversationResponseBody,
    ),
  );
}

export function getAllConversationResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetAllConversationResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllConversationResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllConversationResponseBody' from JSON`,
  );
}
