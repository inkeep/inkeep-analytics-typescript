/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SupportTicketMessage,
  SupportTicketMessage$inboundSchema,
  SupportTicketMessage$Outbound,
  SupportTicketMessage$outboundSchema,
} from "./supportticketmessage.js";

export const SupportTicketConversationType = {
  SupportTicket: "support_ticket",
} as const;
export type SupportTicketConversationType = ClosedEnum<
  typeof SupportTicketConversationType
>;

export type SupportTicketConversationProperties = {};

export type SupportTicketConversationUserProperties = {};

export type SupportTicketConversation = {
  id: string;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  type: SupportTicketConversationType;
  createdAt: string;
  updatedAt: string;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  properties?: SupportTicketConversationProperties | null | undefined;
  userProperties?: SupportTicketConversationUserProperties | null | undefined;
  tags: Array<string>;
  /**
   * The messages in the conversation. Must be at least one message.
   */
  messages: Array<SupportTicketMessage>;
};

/** @internal */
export const SupportTicketConversationType$inboundSchema: z.ZodNativeEnum<
  typeof SupportTicketConversationType
> = z.nativeEnum(SupportTicketConversationType);

/** @internal */
export const SupportTicketConversationType$outboundSchema: z.ZodNativeEnum<
  typeof SupportTicketConversationType
> = SupportTicketConversationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketConversationType$ {
  /** @deprecated use `SupportTicketConversationType$inboundSchema` instead. */
  export const inboundSchema = SupportTicketConversationType$inboundSchema;
  /** @deprecated use `SupportTicketConversationType$outboundSchema` instead. */
  export const outboundSchema = SupportTicketConversationType$outboundSchema;
}

/** @internal */
export const SupportTicketConversationProperties$inboundSchema: z.ZodType<
  SupportTicketConversationProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SupportTicketConversationProperties$Outbound = {};

/** @internal */
export const SupportTicketConversationProperties$outboundSchema: z.ZodType<
  SupportTicketConversationProperties$Outbound,
  z.ZodTypeDef,
  SupportTicketConversationProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketConversationProperties$ {
  /** @deprecated use `SupportTicketConversationProperties$inboundSchema` instead. */
  export const inboundSchema =
    SupportTicketConversationProperties$inboundSchema;
  /** @deprecated use `SupportTicketConversationProperties$outboundSchema` instead. */
  export const outboundSchema =
    SupportTicketConversationProperties$outboundSchema;
  /** @deprecated use `SupportTicketConversationProperties$Outbound` instead. */
  export type Outbound = SupportTicketConversationProperties$Outbound;
}

export function supportTicketConversationPropertiesToJSON(
  supportTicketConversationProperties: SupportTicketConversationProperties,
): string {
  return JSON.stringify(
    SupportTicketConversationProperties$outboundSchema.parse(
      supportTicketConversationProperties,
    ),
  );
}

export function supportTicketConversationPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<SupportTicketConversationProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SupportTicketConversationProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupportTicketConversationProperties' from JSON`,
  );
}

/** @internal */
export const SupportTicketConversationUserProperties$inboundSchema: z.ZodType<
  SupportTicketConversationUserProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SupportTicketConversationUserProperties$Outbound = {};

/** @internal */
export const SupportTicketConversationUserProperties$outboundSchema: z.ZodType<
  SupportTicketConversationUserProperties$Outbound,
  z.ZodTypeDef,
  SupportTicketConversationUserProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketConversationUserProperties$ {
  /** @deprecated use `SupportTicketConversationUserProperties$inboundSchema` instead. */
  export const inboundSchema =
    SupportTicketConversationUserProperties$inboundSchema;
  /** @deprecated use `SupportTicketConversationUserProperties$outboundSchema` instead. */
  export const outboundSchema =
    SupportTicketConversationUserProperties$outboundSchema;
  /** @deprecated use `SupportTicketConversationUserProperties$Outbound` instead. */
  export type Outbound = SupportTicketConversationUserProperties$Outbound;
}

export function supportTicketConversationUserPropertiesToJSON(
  supportTicketConversationUserProperties:
    SupportTicketConversationUserProperties,
): string {
  return JSON.stringify(
    SupportTicketConversationUserProperties$outboundSchema.parse(
      supportTicketConversationUserProperties,
    ),
  );
}

export function supportTicketConversationUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<
  SupportTicketConversationUserProperties,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SupportTicketConversationUserProperties$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SupportTicketConversationUserProperties' from JSON`,
  );
}

/** @internal */
export const SupportTicketConversation$inboundSchema: z.ZodType<
  SupportTicketConversation,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  type: SupportTicketConversationType$inboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  properties: z.nullable(
    z.lazy(() => SupportTicketConversationProperties$inboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => SupportTicketConversationUserProperties$inboundSchema),
  ).optional(),
  tags: z.array(z.string()),
  messages: z.array(SupportTicketMessage$inboundSchema),
});

/** @internal */
export type SupportTicketConversation$Outbound = {
  id: string;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  type: string;
  createdAt: string;
  updatedAt: string;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  properties?: SupportTicketConversationProperties$Outbound | null | undefined;
  userProperties?:
    | SupportTicketConversationUserProperties$Outbound
    | null
    | undefined;
  tags: Array<string>;
  messages: Array<SupportTicketMessage$Outbound>;
};

/** @internal */
export const SupportTicketConversation$outboundSchema: z.ZodType<
  SupportTicketConversation$Outbound,
  z.ZodTypeDef,
  SupportTicketConversation
> = z.object({
  id: z.string(),
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  type: SupportTicketConversationType$outboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  properties: z.nullable(
    z.lazy(() => SupportTicketConversationProperties$outboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => SupportTicketConversationUserProperties$outboundSchema),
  ).optional(),
  tags: z.array(z.string()),
  messages: z.array(SupportTicketMessage$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketConversation$ {
  /** @deprecated use `SupportTicketConversation$inboundSchema` instead. */
  export const inboundSchema = SupportTicketConversation$inboundSchema;
  /** @deprecated use `SupportTicketConversation$outboundSchema` instead. */
  export const outboundSchema = SupportTicketConversation$outboundSchema;
  /** @deprecated use `SupportTicketConversation$Outbound` instead. */
  export type Outbound = SupportTicketConversation$Outbound;
}

export function supportTicketConversationToJSON(
  supportTicketConversation: SupportTicketConversation,
): string {
  return JSON.stringify(
    SupportTicketConversation$outboundSchema.parse(supportTicketConversation),
  );
}

export function supportTicketConversationFromJSON(
  jsonString: string,
): SafeParseResult<SupportTicketConversation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SupportTicketConversation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupportTicketConversation' from JSON`,
  );
}
