/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Conversation,
  Conversation$inboundSchema,
  Conversation$Outbound,
  Conversation$outboundSchema,
} from "./conversation.js";
import {
  Message,
  Message$inboundSchema,
  Message$Outbound,
  Message$outboundSchema,
} from "./message.js";

export const GetAllFeedbackResponseType = {
  Positive: "positive",
  Negative: "negative",
} as const;
export type GetAllFeedbackResponseType = ClosedEnum<
  typeof GetAllFeedbackResponseType
>;

export type Reasons = {
  label: string;
  details: string;
};

export type GetAllFeedbackResponseUserProperties = {};

export type PositiveFeedback = {
  id: string;
  type: GetAllFeedbackResponseType;
  messageId: string;
  createdAt: string;
  reasons?: Array<Reasons> | null | undefined;
  userProperties?: GetAllFeedbackResponseUserProperties | null | undefined;
  conversation: Conversation;
  message: Message;
};

export const GetAllFeedbackResponseNegativeFeedbackType = {
  Positive: "positive",
  Negative: "negative",
} as const;
export type GetAllFeedbackResponseNegativeFeedbackType = ClosedEnum<
  typeof GetAllFeedbackResponseNegativeFeedbackType
>;

export type GetAllFeedbackResponseReasons = {
  label: string;
  details: string;
};

export type GetAllFeedbackResponseNegativeFeedbackUserProperties = {};

export type NegativeFeedback = {
  id: string;
  type: GetAllFeedbackResponseNegativeFeedbackType;
  messageId: string;
  createdAt: string;
  reasons?: Array<GetAllFeedbackResponseReasons> | null | undefined;
  userProperties?:
    | GetAllFeedbackResponseNegativeFeedbackUserProperties
    | null
    | undefined;
  conversation: Conversation;
  message: Message;
};

export type GetAllFeedbackResponse = {
  positiveFeedbackCount: number;
  negativeFeedbackCount: number;
  positiveFeedback: Array<PositiveFeedback>;
  negativeFeedback: Array<NegativeFeedback>;
};

/** @internal */
export const GetAllFeedbackResponseType$inboundSchema: z.ZodNativeEnum<
  typeof GetAllFeedbackResponseType
> = z.nativeEnum(GetAllFeedbackResponseType);

/** @internal */
export const GetAllFeedbackResponseType$outboundSchema: z.ZodNativeEnum<
  typeof GetAllFeedbackResponseType
> = GetAllFeedbackResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllFeedbackResponseType$ {
  /** @deprecated use `GetAllFeedbackResponseType$inboundSchema` instead. */
  export const inboundSchema = GetAllFeedbackResponseType$inboundSchema;
  /** @deprecated use `GetAllFeedbackResponseType$outboundSchema` instead. */
  export const outboundSchema = GetAllFeedbackResponseType$outboundSchema;
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
export const GetAllFeedbackResponseUserProperties$inboundSchema: z.ZodType<
  GetAllFeedbackResponseUserProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type GetAllFeedbackResponseUserProperties$Outbound = {};

/** @internal */
export const GetAllFeedbackResponseUserProperties$outboundSchema: z.ZodType<
  GetAllFeedbackResponseUserProperties$Outbound,
  z.ZodTypeDef,
  GetAllFeedbackResponseUserProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllFeedbackResponseUserProperties$ {
  /** @deprecated use `GetAllFeedbackResponseUserProperties$inboundSchema` instead. */
  export const inboundSchema =
    GetAllFeedbackResponseUserProperties$inboundSchema;
  /** @deprecated use `GetAllFeedbackResponseUserProperties$outboundSchema` instead. */
  export const outboundSchema =
    GetAllFeedbackResponseUserProperties$outboundSchema;
  /** @deprecated use `GetAllFeedbackResponseUserProperties$Outbound` instead. */
  export type Outbound = GetAllFeedbackResponseUserProperties$Outbound;
}

export function getAllFeedbackResponseUserPropertiesToJSON(
  getAllFeedbackResponseUserProperties: GetAllFeedbackResponseUserProperties,
): string {
  return JSON.stringify(
    GetAllFeedbackResponseUserProperties$outboundSchema.parse(
      getAllFeedbackResponseUserProperties,
    ),
  );
}

export function getAllFeedbackResponseUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<GetAllFeedbackResponseUserProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetAllFeedbackResponseUserProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllFeedbackResponseUserProperties' from JSON`,
  );
}

/** @internal */
export const PositiveFeedback$inboundSchema: z.ZodType<
  PositiveFeedback,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: GetAllFeedbackResponseType$inboundSchema,
  messageId: z.string(),
  createdAt: z.string(),
  reasons: z.nullable(z.array(z.lazy(() => Reasons$inboundSchema))).optional(),
  userProperties: z.nullable(
    z.lazy(() => GetAllFeedbackResponseUserProperties$inboundSchema),
  ).optional(),
  conversation: Conversation$inboundSchema,
  message: Message$inboundSchema,
});

/** @internal */
export type PositiveFeedback$Outbound = {
  id: string;
  type: string;
  messageId: string;
  createdAt: string;
  reasons?: Array<Reasons$Outbound> | null | undefined;
  userProperties?:
    | GetAllFeedbackResponseUserProperties$Outbound
    | null
    | undefined;
  conversation: Conversation$Outbound;
  message: Message$Outbound;
};

/** @internal */
export const PositiveFeedback$outboundSchema: z.ZodType<
  PositiveFeedback$Outbound,
  z.ZodTypeDef,
  PositiveFeedback
> = z.object({
  id: z.string(),
  type: GetAllFeedbackResponseType$outboundSchema,
  messageId: z.string(),
  createdAt: z.string(),
  reasons: z.nullable(z.array(z.lazy(() => Reasons$outboundSchema))).optional(),
  userProperties: z.nullable(
    z.lazy(() => GetAllFeedbackResponseUserProperties$outboundSchema),
  ).optional(),
  conversation: Conversation$outboundSchema,
  message: Message$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PositiveFeedback$ {
  /** @deprecated use `PositiveFeedback$inboundSchema` instead. */
  export const inboundSchema = PositiveFeedback$inboundSchema;
  /** @deprecated use `PositiveFeedback$outboundSchema` instead. */
  export const outboundSchema = PositiveFeedback$outboundSchema;
  /** @deprecated use `PositiveFeedback$Outbound` instead. */
  export type Outbound = PositiveFeedback$Outbound;
}

export function positiveFeedbackToJSON(
  positiveFeedback: PositiveFeedback,
): string {
  return JSON.stringify(
    PositiveFeedback$outboundSchema.parse(positiveFeedback),
  );
}

export function positiveFeedbackFromJSON(
  jsonString: string,
): SafeParseResult<PositiveFeedback, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PositiveFeedback$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PositiveFeedback' from JSON`,
  );
}

/** @internal */
export const GetAllFeedbackResponseNegativeFeedbackType$inboundSchema:
  z.ZodNativeEnum<typeof GetAllFeedbackResponseNegativeFeedbackType> = z
    .nativeEnum(GetAllFeedbackResponseNegativeFeedbackType);

/** @internal */
export const GetAllFeedbackResponseNegativeFeedbackType$outboundSchema:
  z.ZodNativeEnum<typeof GetAllFeedbackResponseNegativeFeedbackType> =
    GetAllFeedbackResponseNegativeFeedbackType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllFeedbackResponseNegativeFeedbackType$ {
  /** @deprecated use `GetAllFeedbackResponseNegativeFeedbackType$inboundSchema` instead. */
  export const inboundSchema =
    GetAllFeedbackResponseNegativeFeedbackType$inboundSchema;
  /** @deprecated use `GetAllFeedbackResponseNegativeFeedbackType$outboundSchema` instead. */
  export const outboundSchema =
    GetAllFeedbackResponseNegativeFeedbackType$outboundSchema;
}

/** @internal */
export const GetAllFeedbackResponseReasons$inboundSchema: z.ZodType<
  GetAllFeedbackResponseReasons,
  z.ZodTypeDef,
  unknown
> = z.object({
  label: z.string(),
  details: z.string(),
});

/** @internal */
export type GetAllFeedbackResponseReasons$Outbound = {
  label: string;
  details: string;
};

/** @internal */
export const GetAllFeedbackResponseReasons$outboundSchema: z.ZodType<
  GetAllFeedbackResponseReasons$Outbound,
  z.ZodTypeDef,
  GetAllFeedbackResponseReasons
> = z.object({
  label: z.string(),
  details: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllFeedbackResponseReasons$ {
  /** @deprecated use `GetAllFeedbackResponseReasons$inboundSchema` instead. */
  export const inboundSchema = GetAllFeedbackResponseReasons$inboundSchema;
  /** @deprecated use `GetAllFeedbackResponseReasons$outboundSchema` instead. */
  export const outboundSchema = GetAllFeedbackResponseReasons$outboundSchema;
  /** @deprecated use `GetAllFeedbackResponseReasons$Outbound` instead. */
  export type Outbound = GetAllFeedbackResponseReasons$Outbound;
}

export function getAllFeedbackResponseReasonsToJSON(
  getAllFeedbackResponseReasons: GetAllFeedbackResponseReasons,
): string {
  return JSON.stringify(
    GetAllFeedbackResponseReasons$outboundSchema.parse(
      getAllFeedbackResponseReasons,
    ),
  );
}

export function getAllFeedbackResponseReasonsFromJSON(
  jsonString: string,
): SafeParseResult<GetAllFeedbackResponseReasons, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllFeedbackResponseReasons$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllFeedbackResponseReasons' from JSON`,
  );
}

/** @internal */
export const GetAllFeedbackResponseNegativeFeedbackUserProperties$inboundSchema:
  z.ZodType<
    GetAllFeedbackResponseNegativeFeedbackUserProperties,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type GetAllFeedbackResponseNegativeFeedbackUserProperties$Outbound = {};

/** @internal */
export const GetAllFeedbackResponseNegativeFeedbackUserProperties$outboundSchema:
  z.ZodType<
    GetAllFeedbackResponseNegativeFeedbackUserProperties$Outbound,
    z.ZodTypeDef,
    GetAllFeedbackResponseNegativeFeedbackUserProperties
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllFeedbackResponseNegativeFeedbackUserProperties$ {
  /** @deprecated use `GetAllFeedbackResponseNegativeFeedbackUserProperties$inboundSchema` instead. */
  export const inboundSchema =
    GetAllFeedbackResponseNegativeFeedbackUserProperties$inboundSchema;
  /** @deprecated use `GetAllFeedbackResponseNegativeFeedbackUserProperties$outboundSchema` instead. */
  export const outboundSchema =
    GetAllFeedbackResponseNegativeFeedbackUserProperties$outboundSchema;
  /** @deprecated use `GetAllFeedbackResponseNegativeFeedbackUserProperties$Outbound` instead. */
  export type Outbound =
    GetAllFeedbackResponseNegativeFeedbackUserProperties$Outbound;
}

export function getAllFeedbackResponseNegativeFeedbackUserPropertiesToJSON(
  getAllFeedbackResponseNegativeFeedbackUserProperties:
    GetAllFeedbackResponseNegativeFeedbackUserProperties,
): string {
  return JSON.stringify(
    GetAllFeedbackResponseNegativeFeedbackUserProperties$outboundSchema.parse(
      getAllFeedbackResponseNegativeFeedbackUserProperties,
    ),
  );
}

export function getAllFeedbackResponseNegativeFeedbackUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<
  GetAllFeedbackResponseNegativeFeedbackUserProperties,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetAllFeedbackResponseNegativeFeedbackUserProperties$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetAllFeedbackResponseNegativeFeedbackUserProperties' from JSON`,
  );
}

/** @internal */
export const NegativeFeedback$inboundSchema: z.ZodType<
  NegativeFeedback,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: GetAllFeedbackResponseNegativeFeedbackType$inboundSchema,
  messageId: z.string(),
  createdAt: z.string(),
  reasons: z.nullable(
    z.array(z.lazy(() => GetAllFeedbackResponseReasons$inboundSchema)),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() =>
      GetAllFeedbackResponseNegativeFeedbackUserProperties$inboundSchema
    ),
  ).optional(),
  conversation: Conversation$inboundSchema,
  message: Message$inboundSchema,
});

/** @internal */
export type NegativeFeedback$Outbound = {
  id: string;
  type: string;
  messageId: string;
  createdAt: string;
  reasons?: Array<GetAllFeedbackResponseReasons$Outbound> | null | undefined;
  userProperties?:
    | GetAllFeedbackResponseNegativeFeedbackUserProperties$Outbound
    | null
    | undefined;
  conversation: Conversation$Outbound;
  message: Message$Outbound;
};

/** @internal */
export const NegativeFeedback$outboundSchema: z.ZodType<
  NegativeFeedback$Outbound,
  z.ZodTypeDef,
  NegativeFeedback
> = z.object({
  id: z.string(),
  type: GetAllFeedbackResponseNegativeFeedbackType$outboundSchema,
  messageId: z.string(),
  createdAt: z.string(),
  reasons: z.nullable(
    z.array(z.lazy(() => GetAllFeedbackResponseReasons$outboundSchema)),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() =>
      GetAllFeedbackResponseNegativeFeedbackUserProperties$outboundSchema
    ),
  ).optional(),
  conversation: Conversation$outboundSchema,
  message: Message$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NegativeFeedback$ {
  /** @deprecated use `NegativeFeedback$inboundSchema` instead. */
  export const inboundSchema = NegativeFeedback$inboundSchema;
  /** @deprecated use `NegativeFeedback$outboundSchema` instead. */
  export const outboundSchema = NegativeFeedback$outboundSchema;
  /** @deprecated use `NegativeFeedback$Outbound` instead. */
  export type Outbound = NegativeFeedback$Outbound;
}

export function negativeFeedbackToJSON(
  negativeFeedback: NegativeFeedback,
): string {
  return JSON.stringify(
    NegativeFeedback$outboundSchema.parse(negativeFeedback),
  );
}

export function negativeFeedbackFromJSON(
  jsonString: string,
): SafeParseResult<NegativeFeedback, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NegativeFeedback$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NegativeFeedback' from JSON`,
  );
}

/** @internal */
export const GetAllFeedbackResponse$inboundSchema: z.ZodType<
  GetAllFeedbackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  positiveFeedbackCount: z.number(),
  negativeFeedbackCount: z.number(),
  positiveFeedback: z.array(z.lazy(() => PositiveFeedback$inboundSchema)),
  negativeFeedback: z.array(z.lazy(() => NegativeFeedback$inboundSchema)),
});

/** @internal */
export type GetAllFeedbackResponse$Outbound = {
  positiveFeedbackCount: number;
  negativeFeedbackCount: number;
  positiveFeedback: Array<PositiveFeedback$Outbound>;
  negativeFeedback: Array<NegativeFeedback$Outbound>;
};

/** @internal */
export const GetAllFeedbackResponse$outboundSchema: z.ZodType<
  GetAllFeedbackResponse$Outbound,
  z.ZodTypeDef,
  GetAllFeedbackResponse
> = z.object({
  positiveFeedbackCount: z.number(),
  negativeFeedbackCount: z.number(),
  positiveFeedback: z.array(z.lazy(() => PositiveFeedback$outboundSchema)),
  negativeFeedback: z.array(z.lazy(() => NegativeFeedback$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllFeedbackResponse$ {
  /** @deprecated use `GetAllFeedbackResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllFeedbackResponse$inboundSchema;
  /** @deprecated use `GetAllFeedbackResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllFeedbackResponse$outboundSchema;
  /** @deprecated use `GetAllFeedbackResponse$Outbound` instead. */
  export type Outbound = GetAllFeedbackResponse$Outbound;
}

export function getAllFeedbackResponseToJSON(
  getAllFeedbackResponse: GetAllFeedbackResponse,
): string {
  return JSON.stringify(
    GetAllFeedbackResponse$outboundSchema.parse(getAllFeedbackResponse),
  );
}

export function getAllFeedbackResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAllFeedbackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllFeedbackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllFeedbackResponse' from JSON`,
  );
}
