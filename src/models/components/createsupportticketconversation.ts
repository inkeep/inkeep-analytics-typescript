/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CreateSupportTicketConversationType = {
  SupportTicket: "support_ticket",
} as const;
export type CreateSupportTicketConversationType = ClosedEnum<
  typeof CreateSupportTicketConversationType
>;

export type CreateSupportTicketConversationProperties = {};

export type CreateSupportTicketConversationUserProperties = {};

export const CreateSupportTicketConversationVisibility = {
  Private: "private",
  Public: "public",
} as const;
export type CreateSupportTicketConversationVisibility = ClosedEnum<
  typeof CreateSupportTicketConversationVisibility
>;

export const CreateSupportTicketConversationType1 = {
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
export type CreateSupportTicketConversationType1 = ClosedEnum<
  typeof CreateSupportTicketConversationType1
>;

export type CreateSupportTicketConversationMessagesType =
  | CreateSupportTicketConversationType1
  | string;

export type CreateSupportTicketConversationLinks = {
  label?: string | null | undefined;
  url: string;
  title?: string | null | undefined;
  description?: string | null | undefined;
  type?: CreateSupportTicketConversationType1 | string | null | undefined;
  breadcrumbs?: Array<string> | null | undefined;
};

export type CreateSupportTicketConversationMessagesProperties = {};

export type CreateSupportTicketConversationMessagesUserProperties = {};

export type CreateSupportTicketConversationMessages = {
  id?: string | undefined;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  createdAt?: Date | null | undefined;
  updatedAt?: Date | null | undefined;
  role: string;
  content?: string | null | undefined;
  name?: string | null | undefined;
  links?: Array<CreateSupportTicketConversationLinks> | null | undefined;
  properties?:
    | CreateSupportTicketConversationMessagesProperties
    | null
    | undefined;
  userProperties?:
    | CreateSupportTicketConversationMessagesUserProperties
    | null
    | undefined;
};

export type CreateSupportTicketConversation = {
  id?: string | null | undefined;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  type: CreateSupportTicketConversationType;
  supportTicketConversationId?: string | null | undefined;
  createdAt?: Date | null | undefined;
  updatedAt?: Date | null | undefined;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  properties?: CreateSupportTicketConversationProperties | null | undefined;
  userProperties?:
    | CreateSupportTicketConversationUserProperties
    | null
    | undefined;
  tags?: Array<string> | null | undefined;
  visibility?: CreateSupportTicketConversationVisibility | null | undefined;
  messages: Array<CreateSupportTicketConversationMessages>;
};

/** @internal */
export const CreateSupportTicketConversationType$inboundSchema: z.ZodNativeEnum<
  typeof CreateSupportTicketConversationType
> = z.nativeEnum(CreateSupportTicketConversationType);

/** @internal */
export const CreateSupportTicketConversationType$outboundSchema:
  z.ZodNativeEnum<typeof CreateSupportTicketConversationType> =
    CreateSupportTicketConversationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationType$ {
  /** @deprecated use `CreateSupportTicketConversationType$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationType$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationType$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationType$outboundSchema;
}

/** @internal */
export const CreateSupportTicketConversationProperties$inboundSchema: z.ZodType<
  CreateSupportTicketConversationProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateSupportTicketConversationProperties$Outbound = {};

/** @internal */
export const CreateSupportTicketConversationProperties$outboundSchema:
  z.ZodType<
    CreateSupportTicketConversationProperties$Outbound,
    z.ZodTypeDef,
    CreateSupportTicketConversationProperties
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationProperties$ {
  /** @deprecated use `CreateSupportTicketConversationProperties$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationProperties$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationProperties$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationProperties$outboundSchema;
  /** @deprecated use `CreateSupportTicketConversationProperties$Outbound` instead. */
  export type Outbound = CreateSupportTicketConversationProperties$Outbound;
}

export function createSupportTicketConversationPropertiesToJSON(
  createSupportTicketConversationProperties:
    CreateSupportTicketConversationProperties,
): string {
  return JSON.stringify(
    CreateSupportTicketConversationProperties$outboundSchema.parse(
      createSupportTicketConversationProperties,
    ),
  );
}

export function createSupportTicketConversationPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateSupportTicketConversationProperties,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSupportTicketConversationProperties$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateSupportTicketConversationProperties' from JSON`,
  );
}

/** @internal */
export const CreateSupportTicketConversationUserProperties$inboundSchema:
  z.ZodType<
    CreateSupportTicketConversationUserProperties,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type CreateSupportTicketConversationUserProperties$Outbound = {};

/** @internal */
export const CreateSupportTicketConversationUserProperties$outboundSchema:
  z.ZodType<
    CreateSupportTicketConversationUserProperties$Outbound,
    z.ZodTypeDef,
    CreateSupportTicketConversationUserProperties
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationUserProperties$ {
  /** @deprecated use `CreateSupportTicketConversationUserProperties$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationUserProperties$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationUserProperties$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationUserProperties$outboundSchema;
  /** @deprecated use `CreateSupportTicketConversationUserProperties$Outbound` instead. */
  export type Outbound = CreateSupportTicketConversationUserProperties$Outbound;
}

export function createSupportTicketConversationUserPropertiesToJSON(
  createSupportTicketConversationUserProperties:
    CreateSupportTicketConversationUserProperties,
): string {
  return JSON.stringify(
    CreateSupportTicketConversationUserProperties$outboundSchema.parse(
      createSupportTicketConversationUserProperties,
    ),
  );
}

export function createSupportTicketConversationUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateSupportTicketConversationUserProperties,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSupportTicketConversationUserProperties$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateSupportTicketConversationUserProperties' from JSON`,
  );
}

/** @internal */
export const CreateSupportTicketConversationVisibility$inboundSchema:
  z.ZodNativeEnum<typeof CreateSupportTicketConversationVisibility> = z
    .nativeEnum(CreateSupportTicketConversationVisibility);

/** @internal */
export const CreateSupportTicketConversationVisibility$outboundSchema:
  z.ZodNativeEnum<typeof CreateSupportTicketConversationVisibility> =
    CreateSupportTicketConversationVisibility$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationVisibility$ {
  /** @deprecated use `CreateSupportTicketConversationVisibility$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationVisibility$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationVisibility$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationVisibility$outboundSchema;
}

/** @internal */
export const CreateSupportTicketConversationType1$inboundSchema:
  z.ZodNativeEnum<typeof CreateSupportTicketConversationType1> = z.nativeEnum(
    CreateSupportTicketConversationType1,
  );

/** @internal */
export const CreateSupportTicketConversationType1$outboundSchema:
  z.ZodNativeEnum<typeof CreateSupportTicketConversationType1> =
    CreateSupportTicketConversationType1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationType1$ {
  /** @deprecated use `CreateSupportTicketConversationType1$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationType1$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationType1$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationType1$outboundSchema;
}

/** @internal */
export const CreateSupportTicketConversationMessagesType$inboundSchema:
  z.ZodType<
    CreateSupportTicketConversationMessagesType,
    z.ZodTypeDef,
    unknown
  > = z.union([CreateSupportTicketConversationType1$inboundSchema, z.string()]);

/** @internal */
export type CreateSupportTicketConversationMessagesType$Outbound =
  | string
  | string;

/** @internal */
export const CreateSupportTicketConversationMessagesType$outboundSchema:
  z.ZodType<
    CreateSupportTicketConversationMessagesType$Outbound,
    z.ZodTypeDef,
    CreateSupportTicketConversationMessagesType
  > = z.union([
    CreateSupportTicketConversationType1$outboundSchema,
    z.string(),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationMessagesType$ {
  /** @deprecated use `CreateSupportTicketConversationMessagesType$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationMessagesType$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationMessagesType$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationMessagesType$outboundSchema;
  /** @deprecated use `CreateSupportTicketConversationMessagesType$Outbound` instead. */
  export type Outbound = CreateSupportTicketConversationMessagesType$Outbound;
}

export function createSupportTicketConversationMessagesTypeToJSON(
  createSupportTicketConversationMessagesType:
    CreateSupportTicketConversationMessagesType,
): string {
  return JSON.stringify(
    CreateSupportTicketConversationMessagesType$outboundSchema.parse(
      createSupportTicketConversationMessagesType,
    ),
  );
}

export function createSupportTicketConversationMessagesTypeFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateSupportTicketConversationMessagesType,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSupportTicketConversationMessagesType$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateSupportTicketConversationMessagesType' from JSON`,
  );
}

/** @internal */
export const CreateSupportTicketConversationLinks$inboundSchema: z.ZodType<
  CreateSupportTicketConversationLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  label: z.nullable(z.string()).optional(),
  url: z.string(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  type: z.nullable(
    z.union([CreateSupportTicketConversationType1$inboundSchema, z.string()]),
  ).optional(),
  breadcrumbs: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type CreateSupportTicketConversationLinks$Outbound = {
  label?: string | null | undefined;
  url: string;
  title?: string | null | undefined;
  description?: string | null | undefined;
  type?: string | string | null | undefined;
  breadcrumbs?: Array<string> | null | undefined;
};

/** @internal */
export const CreateSupportTicketConversationLinks$outboundSchema: z.ZodType<
  CreateSupportTicketConversationLinks$Outbound,
  z.ZodTypeDef,
  CreateSupportTicketConversationLinks
> = z.object({
  label: z.nullable(z.string()).optional(),
  url: z.string(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  type: z.nullable(
    z.union([CreateSupportTicketConversationType1$outboundSchema, z.string()]),
  ).optional(),
  breadcrumbs: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationLinks$ {
  /** @deprecated use `CreateSupportTicketConversationLinks$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationLinks$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationLinks$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationLinks$outboundSchema;
  /** @deprecated use `CreateSupportTicketConversationLinks$Outbound` instead. */
  export type Outbound = CreateSupportTicketConversationLinks$Outbound;
}

export function createSupportTicketConversationLinksToJSON(
  createSupportTicketConversationLinks: CreateSupportTicketConversationLinks,
): string {
  return JSON.stringify(
    CreateSupportTicketConversationLinks$outboundSchema.parse(
      createSupportTicketConversationLinks,
    ),
  );
}

export function createSupportTicketConversationLinksFromJSON(
  jsonString: string,
): SafeParseResult<CreateSupportTicketConversationLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSupportTicketConversationLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSupportTicketConversationLinks' from JSON`,
  );
}

/** @internal */
export const CreateSupportTicketConversationMessagesProperties$inboundSchema:
  z.ZodType<
    CreateSupportTicketConversationMessagesProperties,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type CreateSupportTicketConversationMessagesProperties$Outbound = {};

/** @internal */
export const CreateSupportTicketConversationMessagesProperties$outboundSchema:
  z.ZodType<
    CreateSupportTicketConversationMessagesProperties$Outbound,
    z.ZodTypeDef,
    CreateSupportTicketConversationMessagesProperties
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationMessagesProperties$ {
  /** @deprecated use `CreateSupportTicketConversationMessagesProperties$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationMessagesProperties$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationMessagesProperties$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationMessagesProperties$outboundSchema;
  /** @deprecated use `CreateSupportTicketConversationMessagesProperties$Outbound` instead. */
  export type Outbound =
    CreateSupportTicketConversationMessagesProperties$Outbound;
}

export function createSupportTicketConversationMessagesPropertiesToJSON(
  createSupportTicketConversationMessagesProperties:
    CreateSupportTicketConversationMessagesProperties,
): string {
  return JSON.stringify(
    CreateSupportTicketConversationMessagesProperties$outboundSchema.parse(
      createSupportTicketConversationMessagesProperties,
    ),
  );
}

export function createSupportTicketConversationMessagesPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateSupportTicketConversationMessagesProperties,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSupportTicketConversationMessagesProperties$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateSupportTicketConversationMessagesProperties' from JSON`,
  );
}

/** @internal */
export const CreateSupportTicketConversationMessagesUserProperties$inboundSchema:
  z.ZodType<
    CreateSupportTicketConversationMessagesUserProperties,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type CreateSupportTicketConversationMessagesUserProperties$Outbound = {};

/** @internal */
export const CreateSupportTicketConversationMessagesUserProperties$outboundSchema:
  z.ZodType<
    CreateSupportTicketConversationMessagesUserProperties$Outbound,
    z.ZodTypeDef,
    CreateSupportTicketConversationMessagesUserProperties
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationMessagesUserProperties$ {
  /** @deprecated use `CreateSupportTicketConversationMessagesUserProperties$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationMessagesUserProperties$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationMessagesUserProperties$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationMessagesUserProperties$outboundSchema;
  /** @deprecated use `CreateSupportTicketConversationMessagesUserProperties$Outbound` instead. */
  export type Outbound =
    CreateSupportTicketConversationMessagesUserProperties$Outbound;
}

export function createSupportTicketConversationMessagesUserPropertiesToJSON(
  createSupportTicketConversationMessagesUserProperties:
    CreateSupportTicketConversationMessagesUserProperties,
): string {
  return JSON.stringify(
    CreateSupportTicketConversationMessagesUserProperties$outboundSchema.parse(
      createSupportTicketConversationMessagesUserProperties,
    ),
  );
}

export function createSupportTicketConversationMessagesUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateSupportTicketConversationMessagesUserProperties,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSupportTicketConversationMessagesUserProperties$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateSupportTicketConversationMessagesUserProperties' from JSON`,
  );
}

/** @internal */
export const CreateSupportTicketConversationMessages$inboundSchema: z.ZodType<
  CreateSupportTicketConversationMessages,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  createdAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  updatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  role: z.string(),
  content: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  links: z.nullable(
    z.array(z.lazy(() => CreateSupportTicketConversationLinks$inboundSchema)),
  ).optional(),
  properties: z.nullable(
    z.lazy(() =>
      CreateSupportTicketConversationMessagesProperties$inboundSchema
    ),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() =>
      CreateSupportTicketConversationMessagesUserProperties$inboundSchema
    ),
  ).optional(),
});

/** @internal */
export type CreateSupportTicketConversationMessages$Outbound = {
  id?: string | undefined;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  createdAt?: string | null | undefined;
  updatedAt?: string | null | undefined;
  role: string;
  content?: string | null | undefined;
  name?: string | null | undefined;
  links?:
    | Array<CreateSupportTicketConversationLinks$Outbound>
    | null
    | undefined;
  properties?:
    | CreateSupportTicketConversationMessagesProperties$Outbound
    | null
    | undefined;
  userProperties?:
    | CreateSupportTicketConversationMessagesUserProperties$Outbound
    | null
    | undefined;
};

/** @internal */
export const CreateSupportTicketConversationMessages$outboundSchema: z.ZodType<
  CreateSupportTicketConversationMessages$Outbound,
  z.ZodTypeDef,
  CreateSupportTicketConversationMessages
> = z.object({
  id: z.string().optional(),
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  role: z.string(),
  content: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  links: z.nullable(
    z.array(z.lazy(() => CreateSupportTicketConversationLinks$outboundSchema)),
  ).optional(),
  properties: z.nullable(
    z.lazy(() =>
      CreateSupportTicketConversationMessagesProperties$outboundSchema
    ),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() =>
      CreateSupportTicketConversationMessagesUserProperties$outboundSchema
    ),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversationMessages$ {
  /** @deprecated use `CreateSupportTicketConversationMessages$inboundSchema` instead. */
  export const inboundSchema =
    CreateSupportTicketConversationMessages$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversationMessages$outboundSchema` instead. */
  export const outboundSchema =
    CreateSupportTicketConversationMessages$outboundSchema;
  /** @deprecated use `CreateSupportTicketConversationMessages$Outbound` instead. */
  export type Outbound = CreateSupportTicketConversationMessages$Outbound;
}

export function createSupportTicketConversationMessagesToJSON(
  createSupportTicketConversationMessages:
    CreateSupportTicketConversationMessages,
): string {
  return JSON.stringify(
    CreateSupportTicketConversationMessages$outboundSchema.parse(
      createSupportTicketConversationMessages,
    ),
  );
}

export function createSupportTicketConversationMessagesFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateSupportTicketConversationMessages,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSupportTicketConversationMessages$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateSupportTicketConversationMessages' from JSON`,
  );
}

/** @internal */
export const CreateSupportTicketConversation$inboundSchema: z.ZodType<
  CreateSupportTicketConversation,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  type: CreateSupportTicketConversationType$inboundSchema,
  supportTicketConversationId: z.nullable(z.string()).optional(),
  createdAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  updatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  properties: z.nullable(
    z.lazy(() => CreateSupportTicketConversationProperties$inboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => CreateSupportTicketConversationUserProperties$inboundSchema),
  ).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  visibility: z.nullable(
    CreateSupportTicketConversationVisibility$inboundSchema,
  ).optional(),
  messages: z.array(
    z.lazy(() => CreateSupportTicketConversationMessages$inboundSchema),
  ),
});

/** @internal */
export type CreateSupportTicketConversation$Outbound = {
  id?: string | null | undefined;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  type: string;
  supportTicketConversationId?: string | null | undefined;
  createdAt?: string | null | undefined;
  updatedAt?: string | null | undefined;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  properties?:
    | CreateSupportTicketConversationProperties$Outbound
    | null
    | undefined;
  userProperties?:
    | CreateSupportTicketConversationUserProperties$Outbound
    | null
    | undefined;
  tags?: Array<string> | null | undefined;
  visibility?: string | null | undefined;
  messages: Array<CreateSupportTicketConversationMessages$Outbound>;
};

/** @internal */
export const CreateSupportTicketConversation$outboundSchema: z.ZodType<
  CreateSupportTicketConversation$Outbound,
  z.ZodTypeDef,
  CreateSupportTicketConversation
> = z.object({
  id: z.nullable(z.string()).optional(),
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  type: CreateSupportTicketConversationType$outboundSchema,
  supportTicketConversationId: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  properties: z.nullable(
    z.lazy(() => CreateSupportTicketConversationProperties$outboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => CreateSupportTicketConversationUserProperties$outboundSchema),
  ).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  visibility: z.nullable(
    CreateSupportTicketConversationVisibility$outboundSchema,
  ).optional(),
  messages: z.array(
    z.lazy(() => CreateSupportTicketConversationMessages$outboundSchema),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSupportTicketConversation$ {
  /** @deprecated use `CreateSupportTicketConversation$inboundSchema` instead. */
  export const inboundSchema = CreateSupportTicketConversation$inboundSchema;
  /** @deprecated use `CreateSupportTicketConversation$outboundSchema` instead. */
  export const outboundSchema = CreateSupportTicketConversation$outboundSchema;
  /** @deprecated use `CreateSupportTicketConversation$Outbound` instead. */
  export type Outbound = CreateSupportTicketConversation$Outbound;
}

export function createSupportTicketConversationToJSON(
  createSupportTicketConversation: CreateSupportTicketConversation,
): string {
  return JSON.stringify(
    CreateSupportTicketConversation$outboundSchema.parse(
      createSupportTicketConversation,
    ),
  );
}

export function createSupportTicketConversationFromJSON(
  jsonString: string,
): SafeParseResult<CreateSupportTicketConversation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSupportTicketConversation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSupportTicketConversation' from JSON`,
  );
}
