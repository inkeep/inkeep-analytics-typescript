/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAllFeedbackRequest = {
  limit?: number | null | undefined;
  offset?: number | null | undefined;
};

/** @internal */
export const GetAllFeedbackRequest$inboundSchema: z.ZodType<
  GetAllFeedbackRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.nullable(z.number().int().default(10)),
  offset: z.nullable(z.number().int().default(0)),
});

/** @internal */
export type GetAllFeedbackRequest$Outbound = {
  limit: number | null;
  offset: number | null;
};

/** @internal */
export const GetAllFeedbackRequest$outboundSchema: z.ZodType<
  GetAllFeedbackRequest$Outbound,
  z.ZodTypeDef,
  GetAllFeedbackRequest
> = z.object({
  limit: z.nullable(z.number().int().default(10)),
  offset: z.nullable(z.number().int().default(0)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllFeedbackRequest$ {
  /** @deprecated use `GetAllFeedbackRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllFeedbackRequest$inboundSchema;
  /** @deprecated use `GetAllFeedbackRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllFeedbackRequest$outboundSchema;
  /** @deprecated use `GetAllFeedbackRequest$Outbound` instead. */
  export type Outbound = GetAllFeedbackRequest$Outbound;
}

export function getAllFeedbackRequestToJSON(
  getAllFeedbackRequest: GetAllFeedbackRequest,
): string {
  return JSON.stringify(
    GetAllFeedbackRequest$outboundSchema.parse(getAllFeedbackRequest),
  );
}

export function getAllFeedbackRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAllFeedbackRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllFeedbackRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllFeedbackRequest' from JSON`,
  );
}
