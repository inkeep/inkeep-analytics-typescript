/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * A short code indicating the error code returned.
 */
export const UnprocessableEntityCode = {
  UnprocessableEntity: "unprocessable_entity",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type UnprocessableEntityCode = ClosedEnum<
  typeof UnprocessableEntityCode
>;

export type UnprocessableEntityError = {
  /**
   * A short code indicating the error code returned.
   */
  code: UnprocessableEntityCode;
  /**
   * A human readable error message.
   */
  message: string;
};

export type UnprocessableEntityData = {
  error: UnprocessableEntityError;
};

export class UnprocessableEntity extends Error {
  error: UnprocessableEntityError;

  /** The original data that was passed to this error instance. */
  data$: UnprocessableEntityData;

  constructor(err: UnprocessableEntityData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnprocessableEntity";
  }
}

/** @internal */
export const UnprocessableEntityCode$inboundSchema: z.ZodNativeEnum<
  typeof UnprocessableEntityCode
> = z.nativeEnum(UnprocessableEntityCode);

/** @internal */
export const UnprocessableEntityCode$outboundSchema: z.ZodNativeEnum<
  typeof UnprocessableEntityCode
> = UnprocessableEntityCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnprocessableEntityCode$ {
  /** @deprecated use `UnprocessableEntityCode$inboundSchema` instead. */
  export const inboundSchema = UnprocessableEntityCode$inboundSchema;
  /** @deprecated use `UnprocessableEntityCode$outboundSchema` instead. */
  export const outboundSchema = UnprocessableEntityCode$outboundSchema;
}

/** @internal */
export const UnprocessableEntityError$inboundSchema: z.ZodType<
  UnprocessableEntityError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: UnprocessableEntityCode$inboundSchema,
  message: z.string(),
});

/** @internal */
export type UnprocessableEntityError$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const UnprocessableEntityError$outboundSchema: z.ZodType<
  UnprocessableEntityError$Outbound,
  z.ZodTypeDef,
  UnprocessableEntityError
> = z.object({
  code: UnprocessableEntityCode$outboundSchema,
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnprocessableEntityError$ {
  /** @deprecated use `UnprocessableEntityError$inboundSchema` instead. */
  export const inboundSchema = UnprocessableEntityError$inboundSchema;
  /** @deprecated use `UnprocessableEntityError$outboundSchema` instead. */
  export const outboundSchema = UnprocessableEntityError$outboundSchema;
  /** @deprecated use `UnprocessableEntityError$Outbound` instead. */
  export type Outbound = UnprocessableEntityError$Outbound;
}

export function unprocessableEntityErrorToJSON(
  unprocessableEntityError: UnprocessableEntityError,
): string {
  return JSON.stringify(
    UnprocessableEntityError$outboundSchema.parse(unprocessableEntityError),
  );
}

export function unprocessableEntityErrorFromJSON(
  jsonString: string,
): SafeParseResult<UnprocessableEntityError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnprocessableEntityError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnprocessableEntityError' from JSON`,
  );
}

/** @internal */
export const UnprocessableEntity$inboundSchema: z.ZodType<
  UnprocessableEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => UnprocessableEntityError$inboundSchema),
})
  .transform((v) => {
    return new UnprocessableEntity(v);
  });

/** @internal */
export type UnprocessableEntity$Outbound = {
  error: UnprocessableEntityError$Outbound;
};

/** @internal */
export const UnprocessableEntity$outboundSchema: z.ZodType<
  UnprocessableEntity$Outbound,
  z.ZodTypeDef,
  UnprocessableEntity
> = z.instanceof(UnprocessableEntity)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.lazy(() => UnprocessableEntityError$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnprocessableEntity$ {
  /** @deprecated use `UnprocessableEntity$inboundSchema` instead. */
  export const inboundSchema = UnprocessableEntity$inboundSchema;
  /** @deprecated use `UnprocessableEntity$outboundSchema` instead. */
  export const outboundSchema = UnprocessableEntity$outboundSchema;
  /** @deprecated use `UnprocessableEntity$Outbound` instead. */
  export type Outbound = UnprocessableEntity$Outbound;
}
