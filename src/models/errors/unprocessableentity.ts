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
export const UnprocessableEntityCode = {
  UnprocessableEntity: "unprocessable_entity",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type UnprocessableEntityCode = ClosedEnum<
  typeof UnprocessableEntityCode
>;

/**
 * A short code indicating the error code returned.
 */
export const UnprocessableEntityErrorCode = {
  UnprocessableEntity: "unprocessable_entity",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type UnprocessableEntityErrorCode = ClosedEnum<
  typeof UnprocessableEntityErrorCode
>;

/**
 * Legacy error format for backward compatibility.
 */
export type UnprocessableEntityError = {
  /**
   * A short code indicating the error code returned.
   */
  code: UnprocessableEntityErrorCode;
  /**
   * A concise error message suitable for display to end users. May be truncated if the full detail is long.
   */
  message: string;
};

export type UnprocessableEntityData = {
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
  code: UnprocessableEntityCode;
  /**
   * Legacy error format for backward compatibility.
   */
  error: UnprocessableEntityError;
};

export class UnprocessableEntity extends InkeepAnalyticsError {
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
  code: UnprocessableEntityCode;
  /**
   * Legacy error format for backward compatibility.
   */
  error: UnprocessableEntityError;

  /** The original data that was passed to this error instance. */
  data$: UnprocessableEntityData;

  constructor(
    err: UnprocessableEntityData,
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
export const UnprocessableEntityErrorCode$inboundSchema: z.ZodNativeEnum<
  typeof UnprocessableEntityErrorCode
> = z.nativeEnum(UnprocessableEntityErrorCode);

/** @internal */
export const UnprocessableEntityErrorCode$outboundSchema: z.ZodNativeEnum<
  typeof UnprocessableEntityErrorCode
> = UnprocessableEntityErrorCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnprocessableEntityErrorCode$ {
  /** @deprecated use `UnprocessableEntityErrorCode$inboundSchema` instead. */
  export const inboundSchema = UnprocessableEntityErrorCode$inboundSchema;
  /** @deprecated use `UnprocessableEntityErrorCode$outboundSchema` instead. */
  export const outboundSchema = UnprocessableEntityErrorCode$outboundSchema;
}

/** @internal */
export const UnprocessableEntityError$inboundSchema: z.ZodType<
  UnprocessableEntityError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: UnprocessableEntityErrorCode$inboundSchema,
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
  code: UnprocessableEntityErrorCode$outboundSchema,
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
  title: z.string(),
  status: z.number(),
  detail: z.string(),
  instance: z.string().optional(),
  requestId: z.string().optional(),
  code: UnprocessableEntityCode$inboundSchema,
  error: z.lazy(() => UnprocessableEntityError$inboundSchema),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UnprocessableEntity(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UnprocessableEntity$Outbound = {
  title: string;
  status: number;
  detail: string;
  instance?: string | undefined;
  requestId?: string | undefined;
  code: string;
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
    title: z.string(),
    status: z.number(),
    detail: z.string(),
    instance: z.string().optional(),
    requestId: z.string().optional(),
    code: UnprocessableEntityCode$outboundSchema,
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
