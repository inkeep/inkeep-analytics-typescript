/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  collectExtraKeys as collectExtraKeys$,
  safeParse,
} from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OpenAIChatCompletionMessage,
  OpenAIChatCompletionMessage$inboundSchema,
  OpenAIChatCompletionMessage$Outbound,
  OpenAIChatCompletionMessage$outboundSchema,
} from "./openaichatcompletionmessage.js";
import {
  OpenAIExtendedMessage,
  OpenAIExtendedMessage$inboundSchema,
  OpenAIExtendedMessage$Outbound,
  OpenAIExtendedMessage$outboundSchema,
} from "./openaiextendedmessage.js";

export const OpenAIConversationType = {
  Openai: "openai",
} as const;
export type OpenAIConversationType = ClosedEnum<typeof OpenAIConversationType>;

/**
 * The unique identifier for the user. This value is sent by the inkeep widget.
 */
export type OpenAIConversationId = string | number;

/**
 * The unique identifier for the user. This value is sent by the Inkeep Support Agent Copilot. This value is used to create the graphs on the Inkeep Portal.
 */
export type OpenAIConversationUserId = string | number;

/**
 * A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description.
 */
export type OpenAIConversationUserProperties = {
  /**
   * The unique identifier for the user. This value is sent by the inkeep widget.
   */
  id?: string | number | null | undefined;
  /**
   * The type of identification for the user. This value is sent by the inkeep widget.
   */
  identificationType?: string | null | undefined;
  /**
   * The unique identifier for the user. This value is sent by the Inkeep Support Agent Copilot. This value is used to create the graphs on the Inkeep Portal.
   */
  userId?: string | number | null | undefined;
  /**
   * The name of the support agent assigned to the user. This value is sent by the Inkeep Support Agent Copilot. This value is used to create the graphs on the Inkeep Portal.
   */
  supportAgentName?: string | null | undefined;
  /**
   * The type of user. This value is sent by the Inkeep Support Agent Copilot. This value is used to create the graphs on the Inkeep Portal.
   */
  userType?: string | null | undefined;
  additionalProperties?: { [k: string]: any };
};

export const OpenAIConversationVisibility = {
  Private: "private",
  Public: "public",
} as const;
export type OpenAIConversationVisibility = ClosedEnum<
  typeof OpenAIConversationVisibility
>;

export type OpenAIConversation = {
  id: string;
  externalId: string | null;
  externalUrl: string | null;
  type: OpenAIConversationType;
  supportTicketConversationId: string | null;
  createdAt: string;
  updatedAt: string;
  projectId: string | null;
  integrationId: string | null;
  /**
   * A customizable collection of custom properties or attributes.
   */
  properties?: { [k: string]: any } | null | undefined;
  /**
   * A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description.
   */
  userProperties?: OpenAIConversationUserProperties | null | undefined;
  tags?: Array<string> | null | undefined;
  visibility: OpenAIConversationVisibility | null;
  /**
   * The messages in the conversation. Must be at least one message.
   */
  messages: Array<OpenAIExtendedMessage>;
  messagesOpenAIFormat: Array<OpenAIChatCompletionMessage>;
};

/** @internal */
export const OpenAIConversationType$inboundSchema: z.ZodNativeEnum<
  typeof OpenAIConversationType
> = z.nativeEnum(OpenAIConversationType);

/** @internal */
export const OpenAIConversationType$outboundSchema: z.ZodNativeEnum<
  typeof OpenAIConversationType
> = OpenAIConversationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenAIConversationType$ {
  /** @deprecated use `OpenAIConversationType$inboundSchema` instead. */
  export const inboundSchema = OpenAIConversationType$inboundSchema;
  /** @deprecated use `OpenAIConversationType$outboundSchema` instead. */
  export const outboundSchema = OpenAIConversationType$outboundSchema;
}

/** @internal */
export const OpenAIConversationId$inboundSchema: z.ZodType<
  OpenAIConversationId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type OpenAIConversationId$Outbound = string | number;

/** @internal */
export const OpenAIConversationId$outboundSchema: z.ZodType<
  OpenAIConversationId$Outbound,
  z.ZodTypeDef,
  OpenAIConversationId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenAIConversationId$ {
  /** @deprecated use `OpenAIConversationId$inboundSchema` instead. */
  export const inboundSchema = OpenAIConversationId$inboundSchema;
  /** @deprecated use `OpenAIConversationId$outboundSchema` instead. */
  export const outboundSchema = OpenAIConversationId$outboundSchema;
  /** @deprecated use `OpenAIConversationId$Outbound` instead. */
  export type Outbound = OpenAIConversationId$Outbound;
}

export function openAIConversationIdToJSON(
  openAIConversationId: OpenAIConversationId,
): string {
  return JSON.stringify(
    OpenAIConversationId$outboundSchema.parse(openAIConversationId),
  );
}

export function openAIConversationIdFromJSON(
  jsonString: string,
): SafeParseResult<OpenAIConversationId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OpenAIConversationId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OpenAIConversationId' from JSON`,
  );
}

/** @internal */
export const OpenAIConversationUserId$inboundSchema: z.ZodType<
  OpenAIConversationUserId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type OpenAIConversationUserId$Outbound = string | number;

/** @internal */
export const OpenAIConversationUserId$outboundSchema: z.ZodType<
  OpenAIConversationUserId$Outbound,
  z.ZodTypeDef,
  OpenAIConversationUserId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenAIConversationUserId$ {
  /** @deprecated use `OpenAIConversationUserId$inboundSchema` instead. */
  export const inboundSchema = OpenAIConversationUserId$inboundSchema;
  /** @deprecated use `OpenAIConversationUserId$outboundSchema` instead. */
  export const outboundSchema = OpenAIConversationUserId$outboundSchema;
  /** @deprecated use `OpenAIConversationUserId$Outbound` instead. */
  export type Outbound = OpenAIConversationUserId$Outbound;
}

export function openAIConversationUserIdToJSON(
  openAIConversationUserId: OpenAIConversationUserId,
): string {
  return JSON.stringify(
    OpenAIConversationUserId$outboundSchema.parse(openAIConversationUserId),
  );
}

export function openAIConversationUserIdFromJSON(
  jsonString: string,
): SafeParseResult<OpenAIConversationUserId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OpenAIConversationUserId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OpenAIConversationUserId' from JSON`,
  );
}

/** @internal */
export const OpenAIConversationUserProperties$inboundSchema: z.ZodType<
  OpenAIConversationUserProperties,
  z.ZodTypeDef,
  unknown
> = collectExtraKeys$(
  z.object({
    id: z.nullable(z.union([z.string(), z.number()])).optional(),
    identificationType: z.nullable(z.string()).optional(),
    userId: z.nullable(z.union([z.string(), z.number()])).optional(),
    supportAgentName: z.nullable(z.string()).optional(),
    userType: z.nullable(z.string()).optional(),
  }).catchall(z.any()),
  "additionalProperties",
  true,
);

/** @internal */
export type OpenAIConversationUserProperties$Outbound = {
  id?: string | number | null | undefined;
  identificationType?: string | null | undefined;
  userId?: string | number | null | undefined;
  supportAgentName?: string | null | undefined;
  userType?: string | null | undefined;
  [additionalProperties: string]: unknown;
};

/** @internal */
export const OpenAIConversationUserProperties$outboundSchema: z.ZodType<
  OpenAIConversationUserProperties$Outbound,
  z.ZodTypeDef,
  OpenAIConversationUserProperties
> = z.object({
  id: z.nullable(z.union([z.string(), z.number()])).optional(),
  identificationType: z.nullable(z.string()).optional(),
  userId: z.nullable(z.union([z.string(), z.number()])).optional(),
  supportAgentName: z.nullable(z.string()).optional(),
  userType: z.nullable(z.string()).optional(),
  additionalProperties: z.record(z.any()),
}).transform((v) => {
  return {
    ...v.additionalProperties,
    ...remap$(v, {
      additionalProperties: null,
    }),
  };
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenAIConversationUserProperties$ {
  /** @deprecated use `OpenAIConversationUserProperties$inboundSchema` instead. */
  export const inboundSchema = OpenAIConversationUserProperties$inboundSchema;
  /** @deprecated use `OpenAIConversationUserProperties$outboundSchema` instead. */
  export const outboundSchema = OpenAIConversationUserProperties$outboundSchema;
  /** @deprecated use `OpenAIConversationUserProperties$Outbound` instead. */
  export type Outbound = OpenAIConversationUserProperties$Outbound;
}

export function openAIConversationUserPropertiesToJSON(
  openAIConversationUserProperties: OpenAIConversationUserProperties,
): string {
  return JSON.stringify(
    OpenAIConversationUserProperties$outboundSchema.parse(
      openAIConversationUserProperties,
    ),
  );
}

export function openAIConversationUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<OpenAIConversationUserProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OpenAIConversationUserProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OpenAIConversationUserProperties' from JSON`,
  );
}

/** @internal */
export const OpenAIConversationVisibility$inboundSchema: z.ZodNativeEnum<
  typeof OpenAIConversationVisibility
> = z.nativeEnum(OpenAIConversationVisibility);

/** @internal */
export const OpenAIConversationVisibility$outboundSchema: z.ZodNativeEnum<
  typeof OpenAIConversationVisibility
> = OpenAIConversationVisibility$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenAIConversationVisibility$ {
  /** @deprecated use `OpenAIConversationVisibility$inboundSchema` instead. */
  export const inboundSchema = OpenAIConversationVisibility$inboundSchema;
  /** @deprecated use `OpenAIConversationVisibility$outboundSchema` instead. */
  export const outboundSchema = OpenAIConversationVisibility$outboundSchema;
}

/** @internal */
export const OpenAIConversation$inboundSchema: z.ZodType<
  OpenAIConversation,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  externalId: z.nullable(z.string()),
  externalUrl: z.nullable(z.string()),
  type: OpenAIConversationType$inboundSchema,
  supportTicketConversationId: z.nullable(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  projectId: z.nullable(z.string()),
  integrationId: z.nullable(z.string()),
  properties: z.nullable(z.record(z.any())).optional(),
  userProperties: z.nullable(
    z.lazy(() => OpenAIConversationUserProperties$inboundSchema),
  ).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  visibility: z.nullable(OpenAIConversationVisibility$inboundSchema),
  messages: z.array(OpenAIExtendedMessage$inboundSchema),
  messagesOpenAIFormat: z.array(OpenAIChatCompletionMessage$inboundSchema),
});

/** @internal */
export type OpenAIConversation$Outbound = {
  id: string;
  externalId: string | null;
  externalUrl: string | null;
  type: string;
  supportTicketConversationId: string | null;
  createdAt: string;
  updatedAt: string;
  projectId: string | null;
  integrationId: string | null;
  properties?: { [k: string]: any } | null | undefined;
  userProperties?: OpenAIConversationUserProperties$Outbound | null | undefined;
  tags?: Array<string> | null | undefined;
  visibility: string | null;
  messages: Array<OpenAIExtendedMessage$Outbound>;
  messagesOpenAIFormat: Array<OpenAIChatCompletionMessage$Outbound>;
};

/** @internal */
export const OpenAIConversation$outboundSchema: z.ZodType<
  OpenAIConversation$Outbound,
  z.ZodTypeDef,
  OpenAIConversation
> = z.object({
  id: z.string(),
  externalId: z.nullable(z.string()),
  externalUrl: z.nullable(z.string()),
  type: OpenAIConversationType$outboundSchema,
  supportTicketConversationId: z.nullable(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  projectId: z.nullable(z.string()),
  integrationId: z.nullable(z.string()),
  properties: z.nullable(z.record(z.any())).optional(),
  userProperties: z.nullable(
    z.lazy(() => OpenAIConversationUserProperties$outboundSchema),
  ).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  visibility: z.nullable(OpenAIConversationVisibility$outboundSchema),
  messages: z.array(OpenAIExtendedMessage$outboundSchema),
  messagesOpenAIFormat: z.array(OpenAIChatCompletionMessage$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenAIConversation$ {
  /** @deprecated use `OpenAIConversation$inboundSchema` instead. */
  export const inboundSchema = OpenAIConversation$inboundSchema;
  /** @deprecated use `OpenAIConversation$outboundSchema` instead. */
  export const outboundSchema = OpenAIConversation$outboundSchema;
  /** @deprecated use `OpenAIConversation$Outbound` instead. */
  export type Outbound = OpenAIConversation$Outbound;
}

export function openAIConversationToJSON(
  openAIConversation: OpenAIConversation,
): string {
  return JSON.stringify(
    OpenAIConversation$outboundSchema.parse(openAIConversation),
  );
}

export function openAIConversationFromJSON(
  jsonString: string,
): SafeParseResult<OpenAIConversation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OpenAIConversation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OpenAIConversation' from JSON`,
  );
}
