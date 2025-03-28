/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetConversationSecurity = {
  webIntegrationKey?: string | undefined;
  apiIntegrationKey?: string | undefined;
};

export type GetConversationRequest = {
  id: string;
};

/** @internal */
export const GetConversationSecurity$inboundSchema: z.ZodType<
  GetConversationSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  WebIntegrationKey: z.string().optional(),
  ApiIntegrationKey: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "WebIntegrationKey": "webIntegrationKey",
    "ApiIntegrationKey": "apiIntegrationKey",
  });
});

/** @internal */
export type GetConversationSecurity$Outbound = {
  WebIntegrationKey?: string | undefined;
  ApiIntegrationKey?: string | undefined;
};

/** @internal */
export const GetConversationSecurity$outboundSchema: z.ZodType<
  GetConversationSecurity$Outbound,
  z.ZodTypeDef,
  GetConversationSecurity
> = z.object({
  webIntegrationKey: z.string().optional(),
  apiIntegrationKey: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    webIntegrationKey: "WebIntegrationKey",
    apiIntegrationKey: "ApiIntegrationKey",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConversationSecurity$ {
  /** @deprecated use `GetConversationSecurity$inboundSchema` instead. */
  export const inboundSchema = GetConversationSecurity$inboundSchema;
  /** @deprecated use `GetConversationSecurity$outboundSchema` instead. */
  export const outboundSchema = GetConversationSecurity$outboundSchema;
  /** @deprecated use `GetConversationSecurity$Outbound` instead. */
  export type Outbound = GetConversationSecurity$Outbound;
}

export function getConversationSecurityToJSON(
  getConversationSecurity: GetConversationSecurity,
): string {
  return JSON.stringify(
    GetConversationSecurity$outboundSchema.parse(getConversationSecurity),
  );
}

export function getConversationSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetConversationSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConversationSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConversationSecurity' from JSON`,
  );
}

/** @internal */
export const GetConversationRequest$inboundSchema: z.ZodType<
  GetConversationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetConversationRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetConversationRequest$outboundSchema: z.ZodType<
  GetConversationRequest$Outbound,
  z.ZodTypeDef,
  GetConversationRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConversationRequest$ {
  /** @deprecated use `GetConversationRequest$inboundSchema` instead. */
  export const inboundSchema = GetConversationRequest$inboundSchema;
  /** @deprecated use `GetConversationRequest$outboundSchema` instead. */
  export const outboundSchema = GetConversationRequest$outboundSchema;
  /** @deprecated use `GetConversationRequest$Outbound` instead. */
  export type Outbound = GetConversationRequest$Outbound;
}

export function getConversationRequestToJSON(
  getConversationRequest: GetConversationRequest,
): string {
  return JSON.stringify(
    GetConversationRequest$outboundSchema.parse(getConversationRequest),
  );
}

export function getConversationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetConversationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConversationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConversationRequest' from JSON`,
  );
}
