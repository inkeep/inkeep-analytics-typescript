/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { InkeepAnalyticsError } from "./inkeepanalyticserror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * A short code indicating the error code returned.
 */
export const UnauthorizedCode = {
  Unauthorized: "unauthorized",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type UnauthorizedCode = ClosedEnum<typeof UnauthorizedCode>;

/**
 * A short code indicating the error code returned.
 */
export const UnauthorizedErrorCode = {
  Unauthorized: "unauthorized",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type UnauthorizedErrorCode = ClosedEnum<typeof UnauthorizedErrorCode>;

/**
 * Legacy error format for backward compatibility.
 */
export type UnauthorizedError = {
  /**
   * A short code indicating the error code returned.
   */
  code: UnauthorizedErrorCode;
  /**
   * A concise error message suitable for display to end users. May be truncated if the full detail is long.
   */
  message: string;
};

export type UnauthorizedData = {
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
  code: UnauthorizedCode;
  /**
   * Legacy error format for backward compatibility.
   */
  error: UnauthorizedError;
};

export class Unauthorized extends InkeepAnalyticsError {
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
  code: UnauthorizedCode;
  /**
   * Legacy error format for backward compatibility.
   */
  error: UnauthorizedError;

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedData;

  constructor(
    err: UnauthorizedData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.title = err.title;
    this.status = err.status;
    this.detail = err.detail;
    if (err.instance != null) this.instance = err.instance;
    if (err.requestId != null) this.requestId = err.requestId;
    this.code = err.code;
    this.error = err.error;

    this.name = "Unauthorized";
  }
}

/** @internal */
export const UnauthorizedCode$inboundSchema: z.ZodNativeEnum<
  typeof UnauthorizedCode
> = z.nativeEnum(UnauthorizedCode);

/** @internal */
export const UnauthorizedCode$outboundSchema: z.ZodNativeEnum<
  typeof UnauthorizedCode
> = UnauthorizedCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedCode$ {
  /** @deprecated use `UnauthorizedCode$inboundSchema` instead. */
  export const inboundSchema = UnauthorizedCode$inboundSchema;
  /** @deprecated use `UnauthorizedCode$outboundSchema` instead. */
  export const outboundSchema = UnauthorizedCode$outboundSchema;
}

/** @internal */
export const UnauthorizedErrorCode$inboundSchema: z.ZodNativeEnum<
  typeof UnauthorizedErrorCode
> = z.nativeEnum(UnauthorizedErrorCode);

/** @internal */
export const UnauthorizedErrorCode$outboundSchema: z.ZodNativeEnum<
  typeof UnauthorizedErrorCode
> = UnauthorizedErrorCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedErrorCode$ {
  /** @deprecated use `UnauthorizedErrorCode$inboundSchema` instead. */
  export const inboundSchema = UnauthorizedErrorCode$inboundSchema;
  /** @deprecated use `UnauthorizedErrorCode$outboundSchema` instead. */
  export const outboundSchema = UnauthorizedErrorCode$outboundSchema;
}

/** @internal */
export const UnauthorizedError$inboundSchema: z.ZodType<
  UnauthorizedError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: UnauthorizedErrorCode$inboundSchema,
  message: z.string(),
});

/** @internal */
export type UnauthorizedError$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const UnauthorizedError$outboundSchema: z.ZodType<
  UnauthorizedError$Outbound,
  z.ZodTypeDef,
  UnauthorizedError
> = z.object({
  code: UnauthorizedErrorCode$outboundSchema,
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedError$ {
  /** @deprecated use `UnauthorizedError$inboundSchema` instead. */
  export const inboundSchema = UnauthorizedError$inboundSchema;
  /** @deprecated use `UnauthorizedError$outboundSchema` instead. */
  export const outboundSchema = UnauthorizedError$outboundSchema;
  /** @deprecated use `UnauthorizedError$Outbound` instead. */
  export type Outbound = UnauthorizedError$Outbound;
}

export function unauthorizedErrorToJSON(
  unauthorizedError: UnauthorizedError,
): string {
  return JSON.stringify(
    UnauthorizedError$outboundSchema.parse(unauthorizedError),
  );
}

export function unauthorizedErrorFromJSON(
  jsonString: string,
): SafeParseResult<UnauthorizedError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnauthorizedError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnauthorizedError' from JSON`,
  );
}

/** @internal */
export const Unauthorized$inboundSchema: z.ZodType<
  Unauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string(),
  status: z.number(),
  detail: z.string(),
  instance: z.string().optional(),
  requestId: z.string().optional(),
  code: UnauthorizedCode$inboundSchema,
  error: z.lazy(() => UnauthorizedError$inboundSchema),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new Unauthorized(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type Unauthorized$Outbound = {
  title: string;
  status: number;
  detail: string;
  instance?: string | undefined;
  requestId?: string | undefined;
  code: string;
  error: UnauthorizedError$Outbound;
};

/** @internal */
export const Unauthorized$outboundSchema: z.ZodType<
  Unauthorized$Outbound,
  z.ZodTypeDef,
  Unauthorized
> = z.instanceof(Unauthorized)
  .transform(v => v.data$)
  .pipe(z.object({
    title: z.string(),
    status: z.number(),
    detail: z.string(),
    instance: z.string().optional(),
    requestId: z.string().optional(),
    code: UnauthorizedCode$outboundSchema,
    error: z.lazy(() => UnauthorizedError$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Unauthorized$ {
  /** @deprecated use `Unauthorized$inboundSchema` instead. */
  export const inboundSchema = Unauthorized$inboundSchema;
  /** @deprecated use `Unauthorized$outboundSchema` instead. */
  export const outboundSchema = Unauthorized$outboundSchema;
  /** @deprecated use `Unauthorized$Outbound` instead. */
  export type Outbound = Unauthorized$Outbound;
}
