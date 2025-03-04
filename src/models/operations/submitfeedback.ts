/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Type = {
  Positive: "positive",
  Negative: "negative",
} as const;
export type Type = ClosedEnum<typeof Type>;

export type Reasons = {
  label: string;
  details: string;
};

export type UserProperties = {};

/**
 * Note: The maximum size of the request body is 2 MB.
 */
export type SubmitFeedbackRequestBody = {
  id?: string | null | undefined;
  type: Type;
  messageId: string;
  createdAt?: Date | null | undefined;
  reasons?: Array<Reasons> | null | undefined;
  userProperties?: UserProperties | null | undefined;
};

export const SubmitFeedbackType = {
  Positive: "positive",
  Negative: "negative",
} as const;
export type SubmitFeedbackType = ClosedEnum<typeof SubmitFeedbackType>;

export type SubmitFeedbackReasons = {
  label: string;
  details: string;
};

export type SubmitFeedbackUserProperties = {};

/**
 * Feedback provided successfully
 */
export type SubmitFeedbackResponseBody = {
  id: string;
  type: SubmitFeedbackType;
  messageId: string;
  createdAt: string;
  reasons?: Array<SubmitFeedbackReasons> | null | undefined;
  userProperties?: SubmitFeedbackUserProperties | null | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const Reasons$inboundSchema: z.ZodType<Reasons, z.ZodTypeDef, unknown> =
  z.object({
    label: z.string(),
    details: z.string(),
  });

/** @internal */
export type Reasons$Outbound = {
  label: string;
  details: string;
};

/** @internal */
export const Reasons$outboundSchema: z.ZodType<
  Reasons$Outbound,
  z.ZodTypeDef,
  Reasons
> = z.object({
  label: z.string(),
  details: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reasons$ {
  /** @deprecated use `Reasons$inboundSchema` instead. */
  export const inboundSchema = Reasons$inboundSchema;
  /** @deprecated use `Reasons$outboundSchema` instead. */
  export const outboundSchema = Reasons$outboundSchema;
  /** @deprecated use `Reasons$Outbound` instead. */
  export type Outbound = Reasons$Outbound;
}

export function reasonsToJSON(reasons: Reasons): string {
  return JSON.stringify(Reasons$outboundSchema.parse(reasons));
}

export function reasonsFromJSON(
  jsonString: string,
): SafeParseResult<Reasons, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Reasons$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Reasons' from JSON`,
  );
}

/** @internal */
export const UserProperties$inboundSchema: z.ZodType<
  UserProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UserProperties$Outbound = {};

/** @internal */
export const UserProperties$outboundSchema: z.ZodType<
  UserProperties$Outbound,
  z.ZodTypeDef,
  UserProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserProperties$ {
  /** @deprecated use `UserProperties$inboundSchema` instead. */
  export const inboundSchema = UserProperties$inboundSchema;
  /** @deprecated use `UserProperties$outboundSchema` instead. */
  export const outboundSchema = UserProperties$outboundSchema;
  /** @deprecated use `UserProperties$Outbound` instead. */
  export type Outbound = UserProperties$Outbound;
}

export function userPropertiesToJSON(userProperties: UserProperties): string {
  return JSON.stringify(UserProperties$outboundSchema.parse(userProperties));
}

export function userPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<UserProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserProperties' from JSON`,
  );
}

/** @internal */
export const SubmitFeedbackRequestBody$inboundSchema: z.ZodType<
  SubmitFeedbackRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  type: Type$inboundSchema,
  messageId: z.string(),
  createdAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  reasons: z.nullable(z.array(z.lazy(() => Reasons$inboundSchema))).optional(),
  userProperties: z.nullable(z.lazy(() => UserProperties$inboundSchema))
    .optional(),
});

/** @internal */
export type SubmitFeedbackRequestBody$Outbound = {
  id?: string | null | undefined;
  type: string;
  messageId: string;
  createdAt?: string | null | undefined;
  reasons?: Array<Reasons$Outbound> | null | undefined;
  userProperties?: UserProperties$Outbound | null | undefined;
};

/** @internal */
export const SubmitFeedbackRequestBody$outboundSchema: z.ZodType<
  SubmitFeedbackRequestBody$Outbound,
  z.ZodTypeDef,
  SubmitFeedbackRequestBody
> = z.object({
  id: z.nullable(z.string()).optional(),
  type: Type$outboundSchema,
  messageId: z.string(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  reasons: z.nullable(z.array(z.lazy(() => Reasons$outboundSchema))).optional(),
  userProperties: z.nullable(z.lazy(() => UserProperties$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitFeedbackRequestBody$ {
  /** @deprecated use `SubmitFeedbackRequestBody$inboundSchema` instead. */
  export const inboundSchema = SubmitFeedbackRequestBody$inboundSchema;
  /** @deprecated use `SubmitFeedbackRequestBody$outboundSchema` instead. */
  export const outboundSchema = SubmitFeedbackRequestBody$outboundSchema;
  /** @deprecated use `SubmitFeedbackRequestBody$Outbound` instead. */
  export type Outbound = SubmitFeedbackRequestBody$Outbound;
}

export function submitFeedbackRequestBodyToJSON(
  submitFeedbackRequestBody: SubmitFeedbackRequestBody,
): string {
  return JSON.stringify(
    SubmitFeedbackRequestBody$outboundSchema.parse(submitFeedbackRequestBody),
  );
}

export function submitFeedbackRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<SubmitFeedbackRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubmitFeedbackRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubmitFeedbackRequestBody' from JSON`,
  );
}

/** @internal */
export const SubmitFeedbackType$inboundSchema: z.ZodNativeEnum<
  typeof SubmitFeedbackType
> = z.nativeEnum(SubmitFeedbackType);

/** @internal */
export const SubmitFeedbackType$outboundSchema: z.ZodNativeEnum<
  typeof SubmitFeedbackType
> = SubmitFeedbackType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitFeedbackType$ {
  /** @deprecated use `SubmitFeedbackType$inboundSchema` instead. */
  export const inboundSchema = SubmitFeedbackType$inboundSchema;
  /** @deprecated use `SubmitFeedbackType$outboundSchema` instead. */
  export const outboundSchema = SubmitFeedbackType$outboundSchema;
}

/** @internal */
export const SubmitFeedbackReasons$inboundSchema: z.ZodType<
  SubmitFeedbackReasons,
  z.ZodTypeDef,
  unknown
> = z.object({
  label: z.string(),
  details: z.string(),
});

/** @internal */
export type SubmitFeedbackReasons$Outbound = {
  label: string;
  details: string;
};

/** @internal */
export const SubmitFeedbackReasons$outboundSchema: z.ZodType<
  SubmitFeedbackReasons$Outbound,
  z.ZodTypeDef,
  SubmitFeedbackReasons
> = z.object({
  label: z.string(),
  details: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitFeedbackReasons$ {
  /** @deprecated use `SubmitFeedbackReasons$inboundSchema` instead. */
  export const inboundSchema = SubmitFeedbackReasons$inboundSchema;
  /** @deprecated use `SubmitFeedbackReasons$outboundSchema` instead. */
  export const outboundSchema = SubmitFeedbackReasons$outboundSchema;
  /** @deprecated use `SubmitFeedbackReasons$Outbound` instead. */
  export type Outbound = SubmitFeedbackReasons$Outbound;
}

export function submitFeedbackReasonsToJSON(
  submitFeedbackReasons: SubmitFeedbackReasons,
): string {
  return JSON.stringify(
    SubmitFeedbackReasons$outboundSchema.parse(submitFeedbackReasons),
  );
}

export function submitFeedbackReasonsFromJSON(
  jsonString: string,
): SafeParseResult<SubmitFeedbackReasons, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubmitFeedbackReasons$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubmitFeedbackReasons' from JSON`,
  );
}

/** @internal */
export const SubmitFeedbackUserProperties$inboundSchema: z.ZodType<
  SubmitFeedbackUserProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SubmitFeedbackUserProperties$Outbound = {};

/** @internal */
export const SubmitFeedbackUserProperties$outboundSchema: z.ZodType<
  SubmitFeedbackUserProperties$Outbound,
  z.ZodTypeDef,
  SubmitFeedbackUserProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitFeedbackUserProperties$ {
  /** @deprecated use `SubmitFeedbackUserProperties$inboundSchema` instead. */
  export const inboundSchema = SubmitFeedbackUserProperties$inboundSchema;
  /** @deprecated use `SubmitFeedbackUserProperties$outboundSchema` instead. */
  export const outboundSchema = SubmitFeedbackUserProperties$outboundSchema;
  /** @deprecated use `SubmitFeedbackUserProperties$Outbound` instead. */
  export type Outbound = SubmitFeedbackUserProperties$Outbound;
}

export function submitFeedbackUserPropertiesToJSON(
  submitFeedbackUserProperties: SubmitFeedbackUserProperties,
): string {
  return JSON.stringify(
    SubmitFeedbackUserProperties$outboundSchema.parse(
      submitFeedbackUserProperties,
    ),
  );
}

export function submitFeedbackUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<SubmitFeedbackUserProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubmitFeedbackUserProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubmitFeedbackUserProperties' from JSON`,
  );
}

/** @internal */
export const SubmitFeedbackResponseBody$inboundSchema: z.ZodType<
  SubmitFeedbackResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: SubmitFeedbackType$inboundSchema,
  messageId: z.string(),
  createdAt: z.string(),
  reasons: z.nullable(
    z.array(z.lazy(() => SubmitFeedbackReasons$inboundSchema)),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => SubmitFeedbackUserProperties$inboundSchema),
  ).optional(),
});

/** @internal */
export type SubmitFeedbackResponseBody$Outbound = {
  id: string;
  type: string;
  messageId: string;
  createdAt: string;
  reasons?: Array<SubmitFeedbackReasons$Outbound> | null | undefined;
  userProperties?: SubmitFeedbackUserProperties$Outbound | null | undefined;
};

/** @internal */
export const SubmitFeedbackResponseBody$outboundSchema: z.ZodType<
  SubmitFeedbackResponseBody$Outbound,
  z.ZodTypeDef,
  SubmitFeedbackResponseBody
> = z.object({
  id: z.string(),
  type: SubmitFeedbackType$outboundSchema,
  messageId: z.string(),
  createdAt: z.string(),
  reasons: z.nullable(
    z.array(z.lazy(() => SubmitFeedbackReasons$outboundSchema)),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => SubmitFeedbackUserProperties$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitFeedbackResponseBody$ {
  /** @deprecated use `SubmitFeedbackResponseBody$inboundSchema` instead. */
  export const inboundSchema = SubmitFeedbackResponseBody$inboundSchema;
  /** @deprecated use `SubmitFeedbackResponseBody$outboundSchema` instead. */
  export const outboundSchema = SubmitFeedbackResponseBody$outboundSchema;
  /** @deprecated use `SubmitFeedbackResponseBody$Outbound` instead. */
  export type Outbound = SubmitFeedbackResponseBody$Outbound;
}

export function submitFeedbackResponseBodyToJSON(
  submitFeedbackResponseBody: SubmitFeedbackResponseBody,
): string {
  return JSON.stringify(
    SubmitFeedbackResponseBody$outboundSchema.parse(submitFeedbackResponseBody),
  );
}

export function submitFeedbackResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<SubmitFeedbackResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubmitFeedbackResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubmitFeedbackResponseBody' from JSON`,
  );
}
