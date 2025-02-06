/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const SupportTicketMessageType = {
  SupportTicket: "support_ticket",
} as const;
export type SupportTicketMessageType = ClosedEnum<
  typeof SupportTicketMessageType
>;

export const Type1 = {
  Documentation: "documentation",
  Site: "site",
  DiscoursePost: "discourse_post",
  GithubIssue: "github_issue",
  GithubDiscussion: "github_discussion",
  StackoverflowQuestion: "stackoverflow_question",
  DiscordForumPost: "discord_forum_post",
  DiscordMessage: "discord_message",
  CustomQuestionAnswer: "custom_question_answer",
} as const;
export type Type1 = ClosedEnum<typeof Type1>;

export type SupportTicketMessageLinksType = Type1 | string;

export type SupportTicketMessageLinks = {
  label?: string | null | undefined;
  url: string;
  title?: string | null | undefined;
  description?: string | null | undefined;
  type?: Type1 | string | null | undefined;
  breadcrumbs?: Array<string> | null | undefined;
};

export type SupportTicketMessageProperties = {};

export type SupportTicketMessageUserProperties = {};

export type SupportTicketMessage = {
  id: string;
  type: SupportTicketMessageType;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  conversationId: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  content?: string | null | undefined;
  name?: string | null | undefined;
  links?: Array<SupportTicketMessageLinks> | null | undefined;
  properties?: SupportTicketMessageProperties | null | undefined;
  userProperties?: SupportTicketMessageUserProperties | null | undefined;
};

/** @internal */
export const SupportTicketMessageType$inboundSchema: z.ZodNativeEnum<
  typeof SupportTicketMessageType
> = z.nativeEnum(SupportTicketMessageType);

/** @internal */
export const SupportTicketMessageType$outboundSchema: z.ZodNativeEnum<
  typeof SupportTicketMessageType
> = SupportTicketMessageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketMessageType$ {
  /** @deprecated use `SupportTicketMessageType$inboundSchema` instead. */
  export const inboundSchema = SupportTicketMessageType$inboundSchema;
  /** @deprecated use `SupportTicketMessageType$outboundSchema` instead. */
  export const outboundSchema = SupportTicketMessageType$outboundSchema;
}

/** @internal */
export const Type1$inboundSchema: z.ZodNativeEnum<typeof Type1> = z.nativeEnum(
  Type1,
);

/** @internal */
export const Type1$outboundSchema: z.ZodNativeEnum<typeof Type1> =
  Type1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type1$ {
  /** @deprecated use `Type1$inboundSchema` instead. */
  export const inboundSchema = Type1$inboundSchema;
  /** @deprecated use `Type1$outboundSchema` instead. */
  export const outboundSchema = Type1$outboundSchema;
}

/** @internal */
export const SupportTicketMessageLinksType$inboundSchema: z.ZodType<
  SupportTicketMessageLinksType,
  z.ZodTypeDef,
  unknown
> = z.union([Type1$inboundSchema, z.string()]);

/** @internal */
export type SupportTicketMessageLinksType$Outbound = string | string;

/** @internal */
export const SupportTicketMessageLinksType$outboundSchema: z.ZodType<
  SupportTicketMessageLinksType$Outbound,
  z.ZodTypeDef,
  SupportTicketMessageLinksType
> = z.union([Type1$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketMessageLinksType$ {
  /** @deprecated use `SupportTicketMessageLinksType$inboundSchema` instead. */
  export const inboundSchema = SupportTicketMessageLinksType$inboundSchema;
  /** @deprecated use `SupportTicketMessageLinksType$outboundSchema` instead. */
  export const outboundSchema = SupportTicketMessageLinksType$outboundSchema;
  /** @deprecated use `SupportTicketMessageLinksType$Outbound` instead. */
  export type Outbound = SupportTicketMessageLinksType$Outbound;
}

export function supportTicketMessageLinksTypeToJSON(
  supportTicketMessageLinksType: SupportTicketMessageLinksType,
): string {
  return JSON.stringify(
    SupportTicketMessageLinksType$outboundSchema.parse(
      supportTicketMessageLinksType,
    ),
  );
}

export function supportTicketMessageLinksTypeFromJSON(
  jsonString: string,
): SafeParseResult<SupportTicketMessageLinksType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SupportTicketMessageLinksType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupportTicketMessageLinksType' from JSON`,
  );
}

/** @internal */
export const SupportTicketMessageLinks$inboundSchema: z.ZodType<
  SupportTicketMessageLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  label: z.nullable(z.string()).optional(),
  url: z.string(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  type: z.nullable(z.union([Type1$inboundSchema, z.string()])).optional(),
  breadcrumbs: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type SupportTicketMessageLinks$Outbound = {
  label?: string | null | undefined;
  url: string;
  title?: string | null | undefined;
  description?: string | null | undefined;
  type?: string | string | null | undefined;
  breadcrumbs?: Array<string> | null | undefined;
};

/** @internal */
export const SupportTicketMessageLinks$outboundSchema: z.ZodType<
  SupportTicketMessageLinks$Outbound,
  z.ZodTypeDef,
  SupportTicketMessageLinks
> = z.object({
  label: z.nullable(z.string()).optional(),
  url: z.string(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  type: z.nullable(z.union([Type1$outboundSchema, z.string()])).optional(),
  breadcrumbs: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketMessageLinks$ {
  /** @deprecated use `SupportTicketMessageLinks$inboundSchema` instead. */
  export const inboundSchema = SupportTicketMessageLinks$inboundSchema;
  /** @deprecated use `SupportTicketMessageLinks$outboundSchema` instead. */
  export const outboundSchema = SupportTicketMessageLinks$outboundSchema;
  /** @deprecated use `SupportTicketMessageLinks$Outbound` instead. */
  export type Outbound = SupportTicketMessageLinks$Outbound;
}

export function supportTicketMessageLinksToJSON(
  supportTicketMessageLinks: SupportTicketMessageLinks,
): string {
  return JSON.stringify(
    SupportTicketMessageLinks$outboundSchema.parse(supportTicketMessageLinks),
  );
}

export function supportTicketMessageLinksFromJSON(
  jsonString: string,
): SafeParseResult<SupportTicketMessageLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SupportTicketMessageLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupportTicketMessageLinks' from JSON`,
  );
}

/** @internal */
export const SupportTicketMessageProperties$inboundSchema: z.ZodType<
  SupportTicketMessageProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SupportTicketMessageProperties$Outbound = {};

/** @internal */
export const SupportTicketMessageProperties$outboundSchema: z.ZodType<
  SupportTicketMessageProperties$Outbound,
  z.ZodTypeDef,
  SupportTicketMessageProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketMessageProperties$ {
  /** @deprecated use `SupportTicketMessageProperties$inboundSchema` instead. */
  export const inboundSchema = SupportTicketMessageProperties$inboundSchema;
  /** @deprecated use `SupportTicketMessageProperties$outboundSchema` instead. */
  export const outboundSchema = SupportTicketMessageProperties$outboundSchema;
  /** @deprecated use `SupportTicketMessageProperties$Outbound` instead. */
  export type Outbound = SupportTicketMessageProperties$Outbound;
}

export function supportTicketMessagePropertiesToJSON(
  supportTicketMessageProperties: SupportTicketMessageProperties,
): string {
  return JSON.stringify(
    SupportTicketMessageProperties$outboundSchema.parse(
      supportTicketMessageProperties,
    ),
  );
}

export function supportTicketMessagePropertiesFromJSON(
  jsonString: string,
): SafeParseResult<SupportTicketMessageProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SupportTicketMessageProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupportTicketMessageProperties' from JSON`,
  );
}

/** @internal */
export const SupportTicketMessageUserProperties$inboundSchema: z.ZodType<
  SupportTicketMessageUserProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SupportTicketMessageUserProperties$Outbound = {};

/** @internal */
export const SupportTicketMessageUserProperties$outboundSchema: z.ZodType<
  SupportTicketMessageUserProperties$Outbound,
  z.ZodTypeDef,
  SupportTicketMessageUserProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketMessageUserProperties$ {
  /** @deprecated use `SupportTicketMessageUserProperties$inboundSchema` instead. */
  export const inboundSchema = SupportTicketMessageUserProperties$inboundSchema;
  /** @deprecated use `SupportTicketMessageUserProperties$outboundSchema` instead. */
  export const outboundSchema =
    SupportTicketMessageUserProperties$outboundSchema;
  /** @deprecated use `SupportTicketMessageUserProperties$Outbound` instead. */
  export type Outbound = SupportTicketMessageUserProperties$Outbound;
}

export function supportTicketMessageUserPropertiesToJSON(
  supportTicketMessageUserProperties: SupportTicketMessageUserProperties,
): string {
  return JSON.stringify(
    SupportTicketMessageUserProperties$outboundSchema.parse(
      supportTicketMessageUserProperties,
    ),
  );
}

export function supportTicketMessageUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<SupportTicketMessageUserProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SupportTicketMessageUserProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupportTicketMessageUserProperties' from JSON`,
  );
}

/** @internal */
export const SupportTicketMessage$inboundSchema: z.ZodType<
  SupportTicketMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: SupportTicketMessageType$inboundSchema,
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  conversationId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  role: z.string(),
  content: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  links: z.nullable(
    z.array(z.lazy(() => SupportTicketMessageLinks$inboundSchema)),
  ).optional(),
  properties: z.nullable(
    z.lazy(() => SupportTicketMessageProperties$inboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => SupportTicketMessageUserProperties$inboundSchema),
  ).optional(),
});

/** @internal */
export type SupportTicketMessage$Outbound = {
  id: string;
  type: string;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  conversationId: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  content?: string | null | undefined;
  name?: string | null | undefined;
  links?: Array<SupportTicketMessageLinks$Outbound> | null | undefined;
  properties?: SupportTicketMessageProperties$Outbound | null | undefined;
  userProperties?:
    | SupportTicketMessageUserProperties$Outbound
    | null
    | undefined;
};

/** @internal */
export const SupportTicketMessage$outboundSchema: z.ZodType<
  SupportTicketMessage$Outbound,
  z.ZodTypeDef,
  SupportTicketMessage
> = z.object({
  id: z.string(),
  type: SupportTicketMessageType$outboundSchema,
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  conversationId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  role: z.string(),
  content: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  links: z.nullable(
    z.array(z.lazy(() => SupportTicketMessageLinks$outboundSchema)),
  ).optional(),
  properties: z.nullable(
    z.lazy(() => SupportTicketMessageProperties$outboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => SupportTicketMessageUserProperties$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportTicketMessage$ {
  /** @deprecated use `SupportTicketMessage$inboundSchema` instead. */
  export const inboundSchema = SupportTicketMessage$inboundSchema;
  /** @deprecated use `SupportTicketMessage$outboundSchema` instead. */
  export const outboundSchema = SupportTicketMessage$outboundSchema;
  /** @deprecated use `SupportTicketMessage$Outbound` instead. */
  export type Outbound = SupportTicketMessage$Outbound;
}

export function supportTicketMessageToJSON(
  supportTicketMessage: SupportTicketMessage,
): string {
  return JSON.stringify(
    SupportTicketMessage$outboundSchema.parse(supportTicketMessage),
  );
}

export function supportTicketMessageFromJSON(
  jsonString: string,
): SafeParseResult<SupportTicketMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SupportTicketMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupportTicketMessage' from JSON`,
  );
}
