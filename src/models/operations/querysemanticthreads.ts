/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type QuerySemanticThreadsSecurity = {
  webIntegrationKey?: string | undefined;
  apiIntegrationKey?: string | undefined;
};

/** @internal */
export const QuerySemanticThreadsSecurity$inboundSchema: z.ZodType<
  QuerySemanticThreadsSecurity,
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
export type QuerySemanticThreadsSecurity$Outbound = {
  WebIntegrationKey?: string | undefined;
  ApiIntegrationKey?: string | undefined;
};

/** @internal */
export const QuerySemanticThreadsSecurity$outboundSchema: z.ZodType<
  QuerySemanticThreadsSecurity$Outbound,
  z.ZodTypeDef,
  QuerySemanticThreadsSecurity
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
export namespace QuerySemanticThreadsSecurity$ {
  /** @deprecated use `QuerySemanticThreadsSecurity$inboundSchema` instead. */
  export const inboundSchema = QuerySemanticThreadsSecurity$inboundSchema;
  /** @deprecated use `QuerySemanticThreadsSecurity$outboundSchema` instead. */
  export const outboundSchema = QuerySemanticThreadsSecurity$outboundSchema;
  /** @deprecated use `QuerySemanticThreadsSecurity$Outbound` instead. */
  export type Outbound = QuerySemanticThreadsSecurity$Outbound;
}

export function querySemanticThreadsSecurityToJSON(
  querySemanticThreadsSecurity: QuerySemanticThreadsSecurity,
): string {
  return JSON.stringify(
    QuerySemanticThreadsSecurity$outboundSchema.parse(
      querySemanticThreadsSecurity,
    ),
  );
}

export function querySemanticThreadsSecurityFromJSON(
  jsonString: string,
): SafeParseResult<QuerySemanticThreadsSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QuerySemanticThreadsSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QuerySemanticThreadsSecurity' from JSON`,
  );
}
