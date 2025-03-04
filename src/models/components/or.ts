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

export type Oror = SemanticThreadFilter;

/**
 * OR operator
 */
export type Or = {
  /**
   * Or condition
   */
  or: Array<SemanticThreadFilter>;
};

/** @internal */
export const Oror$inboundSchema: z.ZodType<Oror, z.ZodTypeDef, unknown> = z
  .lazy(() => SemanticThreadFilter$inboundSchema);

/** @internal */
export type Oror$Outbound = SemanticThreadFilter$Outbound;

/** @internal */
export const Oror$outboundSchema: z.ZodType<Oror$Outbound, z.ZodTypeDef, Oror> =
  z.lazy(() => SemanticThreadFilter$outboundSchema);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Oror$ {
  /** @deprecated use `Oror$inboundSchema` instead. */
  export const inboundSchema = Oror$inboundSchema;
  /** @deprecated use `Oror$outboundSchema` instead. */
  export const outboundSchema = Oror$outboundSchema;
  /** @deprecated use `Oror$Outbound` instead. */
  export type Outbound = Oror$Outbound;
}

export function orORToJSON(oror: Oror): string {
  return JSON.stringify(Oror$outboundSchema.parse(oror));
}

export function orORFromJSON(
  jsonString: string,
): SafeParseResult<Oror, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Oror$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Oror' from JSON`,
  );
}

/** @internal */
export const Or$inboundSchema: z.ZodType<Or, z.ZodTypeDef, unknown> = z.object({
  or: z.array(z.lazy(() => SemanticThreadFilter$inboundSchema)),
});

/** @internal */
export type Or$Outbound = {
  or: Array<SemanticThreadFilter$Outbound>;
};

/** @internal */
export const Or$outboundSchema: z.ZodType<Or$Outbound, z.ZodTypeDef, Or> = z
  .object({
    or: z.array(z.lazy(() => SemanticThreadFilter$outboundSchema)),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Or$ {
  /** @deprecated use `Or$inboundSchema` instead. */
  export const inboundSchema = Or$inboundSchema;
  /** @deprecated use `Or$outboundSchema` instead. */
  export const outboundSchema = Or$outboundSchema;
  /** @deprecated use `Or$Outbound` instead. */
  export type Outbound = Or$Outbound;
}

export function orToJSON(or: Or): string {
  return JSON.stringify(Or$outboundSchema.parse(or));
}

export function orFromJSON(
  jsonString: string,
): SafeParseResult<Or, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Or$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Or' from JSON`,
  );
}
