/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FilterOperator,
  FilterOperator$inboundSchema,
  FilterOperator$outboundSchema,
} from "./filteroperator.js";
import {
  SemanticThreadField,
  SemanticThreadField$inboundSchema,
  SemanticThreadField$outboundSchema,
} from "./semanticthreadfield.js";
import {
  SemanticThreadFilterConditionValue,
  SemanticThreadFilterConditionValue$inboundSchema,
  SemanticThreadFilterConditionValue$Outbound,
  SemanticThreadFilterConditionValue$outboundSchema,
} from "./semanticthreadfilterconditionvalue.js";

export type SemanticThreadFilterConditionCondition = {
  /**
   * Available fields for SemanticThread
   */
  field: SemanticThreadField;
  /**
   * Available operators for filtering data
   */
  operator: FilterOperator;
  /**
   * The value to compare the field against. For JSON fields, can be either a JSON object or a {path, value} pair.
   */
  value: SemanticThreadFilterConditionValue;
};

export type SemanticThreadFilterCondition = {
  condition: SemanticThreadFilterConditionCondition;
};

/** @internal */
export const SemanticThreadFilterConditionCondition$inboundSchema: z.ZodType<
  SemanticThreadFilterConditionCondition,
  z.ZodTypeDef,
  unknown
> = z.object({
  field: SemanticThreadField$inboundSchema,
  operator: FilterOperator$inboundSchema,
  value: SemanticThreadFilterConditionValue$inboundSchema,
});

/** @internal */
export type SemanticThreadFilterConditionCondition$Outbound = {
  field: string;
  operator: string;
  value: SemanticThreadFilterConditionValue$Outbound;
};

/** @internal */
export const SemanticThreadFilterConditionCondition$outboundSchema: z.ZodType<
  SemanticThreadFilterConditionCondition$Outbound,
  z.ZodTypeDef,
  SemanticThreadFilterConditionCondition
> = z.object({
  field: SemanticThreadField$outboundSchema,
  operator: FilterOperator$outboundSchema,
  value: SemanticThreadFilterConditionValue$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SemanticThreadFilterConditionCondition$ {
  /** @deprecated use `SemanticThreadFilterConditionCondition$inboundSchema` instead. */
  export const inboundSchema =
    SemanticThreadFilterConditionCondition$inboundSchema;
  /** @deprecated use `SemanticThreadFilterConditionCondition$outboundSchema` instead. */
  export const outboundSchema =
    SemanticThreadFilterConditionCondition$outboundSchema;
  /** @deprecated use `SemanticThreadFilterConditionCondition$Outbound` instead. */
  export type Outbound = SemanticThreadFilterConditionCondition$Outbound;
}

export function semanticThreadFilterConditionConditionToJSON(
  semanticThreadFilterConditionCondition:
    SemanticThreadFilterConditionCondition,
): string {
  return JSON.stringify(
    SemanticThreadFilterConditionCondition$outboundSchema.parse(
      semanticThreadFilterConditionCondition,
    ),
  );
}

export function semanticThreadFilterConditionConditionFromJSON(
  jsonString: string,
): SafeParseResult<SemanticThreadFilterConditionCondition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SemanticThreadFilterConditionCondition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SemanticThreadFilterConditionCondition' from JSON`,
  );
}

/** @internal */
export const SemanticThreadFilterCondition$inboundSchema: z.ZodType<
  SemanticThreadFilterCondition,
  z.ZodTypeDef,
  unknown
> = z.object({
  condition: z.lazy(() => SemanticThreadFilterConditionCondition$inboundSchema),
});

/** @internal */
export type SemanticThreadFilterCondition$Outbound = {
  condition: SemanticThreadFilterConditionCondition$Outbound;
};

/** @internal */
export const SemanticThreadFilterCondition$outboundSchema: z.ZodType<
  SemanticThreadFilterCondition$Outbound,
  z.ZodTypeDef,
  SemanticThreadFilterCondition
> = z.object({
  condition: z.lazy(() =>
    SemanticThreadFilterConditionCondition$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SemanticThreadFilterCondition$ {
  /** @deprecated use `SemanticThreadFilterCondition$inboundSchema` instead. */
  export const inboundSchema = SemanticThreadFilterCondition$inboundSchema;
  /** @deprecated use `SemanticThreadFilterCondition$outboundSchema` instead. */
  export const outboundSchema = SemanticThreadFilterCondition$outboundSchema;
  /** @deprecated use `SemanticThreadFilterCondition$Outbound` instead. */
  export type Outbound = SemanticThreadFilterCondition$Outbound;
}

export function semanticThreadFilterConditionToJSON(
  semanticThreadFilterCondition: SemanticThreadFilterCondition,
): string {
  return JSON.stringify(
    SemanticThreadFilterCondition$outboundSchema.parse(
      semanticThreadFilterCondition,
    ),
  );
}

export function semanticThreadFilterConditionFromJSON(
  jsonString: string,
): SafeParseResult<SemanticThreadFilterCondition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SemanticThreadFilterCondition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SemanticThreadFilterCondition' from JSON`,
  );
}
