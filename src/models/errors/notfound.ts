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
export const NotFoundCode = {
  NotFound: "not_found",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type NotFoundCode = ClosedEnum<typeof NotFoundCode>;

/**
 * A short code indicating the error code returned.
 */
export const NotFoundErrorCode = {
  NotFound: "not_found",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type NotFoundErrorCode = ClosedEnum<typeof NotFoundErrorCode>;

/**
 * Legacy error format for backward compatibility.
 */
export type NotFoundError = {
  /**
   * A short code indicating the error code returned.
   */
  code: NotFoundErrorCode;
  /**
   * A concise error message suitable for display to end users. May be truncated if the full detail is long.
   */
  message: string;
};

export type NotFoundData = {
  /**
   * A short, human-readable summary of the problem type.
   */
  title: string;
  /**
   * The HTTP status code.
   */
  status: number;
  /**
   * A detailed explanation specific to this occurrence of the problem, providing context and specifics about what went wrong.
   */
  detail: string;
  /**
   * A URI reference that identifies the specific occurrence of the problem.
   */
  instance?: string | undefined;
  /**
   * A unique identifier for the request, useful for troubleshooting.
   */
  requestId?: string | undefined;
  /**
   * A short code indicating the error code returned.
   */
  code: NotFoundCode;
  /**
   * A URI reference that identifies the problem type.
   */
  type: string;
  /**
   * Legacy error format for backward compatibility.
   */
  error: NotFoundError;
};

export class NotFound extends Error {
  /**
   * A short, human-readable summary of the problem type.
   */
  title: string;
  /**
   * The HTTP status code.
   */
  status: number;
  /**
   * A detailed explanation specific to this occurrence of the problem, providing context and specifics about what went wrong.
   */
  detail: string;
  /**
   * A URI reference that identifies the specific occurrence of the problem.
   */
  instance?: string | undefined;
  /**
   * A unique identifier for the request, useful for troubleshooting.
   */
  requestId?: string | undefined;
  /**
   * A short code indicating the error code returned.
   */
  code: NotFoundCode;
  /**
   * A URI reference that identifies the problem type.
   */
  type: string;
  /**
   * Legacy error format for backward compatibility.
   */
  error: NotFoundError;

  /** The original data that was passed to this error instance. */
  data$: NotFoundData;

  constructor(err: NotFoundData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.title = err.title;
    this.status = err.status;
    this.detail = err.detail;
    if (err.instance != null) this.instance = err.instance;
    if (err.requestId != null) this.requestId = err.requestId;
    this.code = err.code;
    this.type = err.type;
    this.error = err.error;

    this.name = "NotFound";
  }
}

/** @internal */
export const NotFoundCode$inboundSchema: z.ZodNativeEnum<typeof NotFoundCode> =
  z.nativeEnum(NotFoundCode);

/** @internal */
export const NotFoundCode$outboundSchema: z.ZodNativeEnum<typeof NotFoundCode> =
  NotFoundCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundCode$ {
  /** @deprecated use `NotFoundCode$inboundSchema` instead. */
  export const inboundSchema = NotFoundCode$inboundSchema;
  /** @deprecated use `NotFoundCode$outboundSchema` instead. */
  export const outboundSchema = NotFoundCode$outboundSchema;
}

/** @internal */
export const NotFoundErrorCode$inboundSchema: z.ZodNativeEnum<
  typeof NotFoundErrorCode
> = z.nativeEnum(NotFoundErrorCode);

/** @internal */
export const NotFoundErrorCode$outboundSchema: z.ZodNativeEnum<
  typeof NotFoundErrorCode
> = NotFoundErrorCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundErrorCode$ {
  /** @deprecated use `NotFoundErrorCode$inboundSchema` instead. */
  export const inboundSchema = NotFoundErrorCode$inboundSchema;
  /** @deprecated use `NotFoundErrorCode$outboundSchema` instead. */
  export const outboundSchema = NotFoundErrorCode$outboundSchema;
}

/** @internal */
export const NotFoundError$inboundSchema: z.ZodType<
  NotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: NotFoundErrorCode$inboundSchema,
  message: z.string(),
});

/** @internal */
export type NotFoundError$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const NotFoundError$outboundSchema: z.ZodType<
  NotFoundError$Outbound,
  z.ZodTypeDef,
  NotFoundError
> = z.object({
  code: NotFoundErrorCode$outboundSchema,
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundError$ {
  /** @deprecated use `NotFoundError$inboundSchema` instead. */
  export const inboundSchema = NotFoundError$inboundSchema;
  /** @deprecated use `NotFoundError$outboundSchema` instead. */
  export const outboundSchema = NotFoundError$outboundSchema;
  /** @deprecated use `NotFoundError$Outbound` instead. */
  export type Outbound = NotFoundError$Outbound;
}

export function notFoundErrorToJSON(notFoundError: NotFoundError): string {
  return JSON.stringify(NotFoundError$outboundSchema.parse(notFoundError));
}

export function notFoundErrorFromJSON(
  jsonString: string,
): SafeParseResult<NotFoundError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotFoundError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotFoundError' from JSON`,
  );
}

/** @internal */
export const NotFound$inboundSchema: z.ZodType<
  NotFound,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string(),
  status: z.number(),
  detail: z.string(),
  instance: z.string().optional(),
  requestId: z.string().optional(),
  code: NotFoundCode$inboundSchema,
  type: z.string(),
  error: z.lazy(() => NotFoundError$inboundSchema),
})
  .transform((v) => {
    return new NotFound(v);
  });

/** @internal */
export type NotFound$Outbound = {
  title: string;
  status: number;
  detail: string;
  instance?: string | undefined;
  requestId?: string | undefined;
  code: string;
  type: string;
  error: NotFoundError$Outbound;
};

/** @internal */
export const NotFound$outboundSchema: z.ZodType<
  NotFound$Outbound,
  z.ZodTypeDef,
  NotFound
> = z.instanceof(NotFound)
  .transform(v => v.data$)
  .pipe(z.object({
    title: z.string(),
    status: z.number(),
    detail: z.string(),
    instance: z.string().optional(),
    requestId: z.string().optional(),
    code: NotFoundCode$outboundSchema,
    type: z.string(),
    error: z.lazy(() => NotFoundError$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFound$ {
  /** @deprecated use `NotFound$inboundSchema` instead. */
  export const inboundSchema = NotFound$inboundSchema;
  /** @deprecated use `NotFound$outboundSchema` instead. */
  export const outboundSchema = NotFound$outboundSchema;
  /** @deprecated use `NotFound$Outbound` instead. */
  export type Outbound = NotFound$Outbound;
}
