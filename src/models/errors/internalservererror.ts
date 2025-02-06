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
export const InternalServerErrorCode = {
  InternalServerError: "internal_server_error",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type InternalServerErrorCode = ClosedEnum<
  typeof InternalServerErrorCode
>;

export type InternalServerErrorError = {
  /**
   * A short code indicating the error code returned.
   */
  code: InternalServerErrorCode;
  /**
   * A human readable error message.
   */
  message: string;
};

export type InternalServerErrorData = {
  error: InternalServerErrorError;
};

export class InternalServerError extends Error {
  error: InternalServerErrorError;

  /** The original data that was passed to this error instance. */
  data$: InternalServerErrorData;

  constructor(err: InternalServerErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "InternalServerError";
  }
}

/** @internal */
export const InternalServerErrorCode$inboundSchema: z.ZodNativeEnum<
  typeof InternalServerErrorCode
> = z.nativeEnum(InternalServerErrorCode);

/** @internal */
export const InternalServerErrorCode$outboundSchema: z.ZodNativeEnum<
  typeof InternalServerErrorCode
> = InternalServerErrorCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternalServerErrorCode$ {
  /** @deprecated use `InternalServerErrorCode$inboundSchema` instead. */
  export const inboundSchema = InternalServerErrorCode$inboundSchema;
  /** @deprecated use `InternalServerErrorCode$outboundSchema` instead. */
  export const outboundSchema = InternalServerErrorCode$outboundSchema;
}

/** @internal */
export const InternalServerErrorError$inboundSchema: z.ZodType<
  InternalServerErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: InternalServerErrorCode$inboundSchema,
  message: z.string(),
});

/** @internal */
export type InternalServerErrorError$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const InternalServerErrorError$outboundSchema: z.ZodType<
  InternalServerErrorError$Outbound,
  z.ZodTypeDef,
  InternalServerErrorError
> = z.object({
  code: InternalServerErrorCode$outboundSchema,
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternalServerErrorError$ {
  /** @deprecated use `InternalServerErrorError$inboundSchema` instead. */
  export const inboundSchema = InternalServerErrorError$inboundSchema;
  /** @deprecated use `InternalServerErrorError$outboundSchema` instead. */
  export const outboundSchema = InternalServerErrorError$outboundSchema;
  /** @deprecated use `InternalServerErrorError$Outbound` instead. */
  export type Outbound = InternalServerErrorError$Outbound;
}

export function internalServerErrorErrorToJSON(
  internalServerErrorError: InternalServerErrorError,
): string {
  return JSON.stringify(
    InternalServerErrorError$outboundSchema.parse(internalServerErrorError),
  );
}

export function internalServerErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<InternalServerErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InternalServerErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InternalServerErrorError' from JSON`,
  );
}

/** @internal */
export const InternalServerError$inboundSchema: z.ZodType<
  InternalServerError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => InternalServerErrorError$inboundSchema),
})
  .transform((v) => {
    return new InternalServerError(v);
  });

/** @internal */
export type InternalServerError$Outbound = {
  error: InternalServerErrorError$Outbound;
};

/** @internal */
export const InternalServerError$outboundSchema: z.ZodType<
  InternalServerError$Outbound,
  z.ZodTypeDef,
  InternalServerError
> = z.instanceof(InternalServerError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.lazy(() => InternalServerErrorError$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternalServerError$ {
  /** @deprecated use `InternalServerError$inboundSchema` instead. */
  export const inboundSchema = InternalServerError$inboundSchema;
  /** @deprecated use `InternalServerError$outboundSchema` instead. */
  export const outboundSchema = InternalServerError$outboundSchema;
  /** @deprecated use `InternalServerError$Outbound` instead. */
  export type Outbound = InternalServerError$Outbound;
}
