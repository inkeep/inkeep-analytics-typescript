/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OpenAIContentItem,
  OpenAIContentItem$inboundSchema,
  OpenAIContentItem$Outbound,
  OpenAIContentItem$outboundSchema,
} from "./openaicontentitem.js";
import {
  OpenAIToolCall,
  OpenAIToolCall$inboundSchema,
  OpenAIToolCall$Outbound,
  OpenAIToolCall$outboundSchema,
} from "./openaitoolcall.js";

export const Type = {
  Openai: "openai",
} as const;
export type Type = ClosedEnum<typeof Type>;

export type Properties = {};

export type UserProperties = {};

export const Visibility = {
  Private: "private",
  Public: "public",
} as const;
export type Visibility = ClosedEnum<typeof Visibility>;

export const CreateOpenAIConversationRole = {
  System: "system",
  User: "user",
  Assistant: "assistant",
} as const;
export type CreateOpenAIConversationRole = ClosedEnum<
  typeof CreateOpenAIConversationRole
>;

export type CreateOpenAIConversationContent = string | Array<OpenAIContentItem>;

export const CreateOpenAIConversationType1 = {
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
export type CreateOpenAIConversationType1 = ClosedEnum<
  typeof CreateOpenAIConversationType1
>;

export type CreateOpenAIConversationType =
  | CreateOpenAIConversationType1
  | string;

export type CreateOpenAIConversationLinks = {
  label?: string | null | undefined;
  url: string;
  title?: string | null | undefined;
  description?: string | null | undefined;
  type?: CreateOpenAIConversationType1 | string | null | undefined;
  breadcrumbs?: Array<string> | null | undefined;
};

export type CreateOpenAIConversationProperties = {};

export type CreateOpenAIConversationUserProperties = {};

export type Messages = {
  id?: string | undefined;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  createdAt?: Date | null | undefined;
  updatedAt?: Date | null | undefined;
  role: CreateOpenAIConversationRole;
  content: string | Array<OpenAIContentItem>;
  name?: string | null | undefined;
  links?: Array<CreateOpenAIConversationLinks> | null | undefined;
  properties?: CreateOpenAIConversationProperties | null | undefined;
  userProperties?: CreateOpenAIConversationUserProperties | null | undefined;
  toolCalls?: Array<OpenAIToolCall> | null | undefined;
};

export type CreateOpenAIConversation = {
  id?: string | null | undefined;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  type: Type;
  supportTicketConversationId?: string | null | undefined;
  createdAt?: Date | null | undefined;
  updatedAt?: Date | null | undefined;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  properties?: Properties | null | undefined;
  userProperties?: UserProperties | null | undefined;
  tags?: Array<string> | null | undefined;
  visibility?: Visibility | null | undefined;
  /**
   * The messages in the conversation. Must be at least one message.
   */
  messages: Array<Messages>;
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
export const Properties$inboundSchema: z.ZodType<
  Properties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Properties$Outbound = {};

/** @internal */
export const Properties$outboundSchema: z.ZodType<
  Properties$Outbound,
  z.ZodTypeDef,
  Properties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Properties$ {
  /** @deprecated use `Properties$inboundSchema` instead. */
  export const inboundSchema = Properties$inboundSchema;
  /** @deprecated use `Properties$outboundSchema` instead. */
  export const outboundSchema = Properties$outboundSchema;
  /** @deprecated use `Properties$Outbound` instead. */
  export type Outbound = Properties$Outbound;
}

export function propertiesToJSON(properties: Properties): string {
  return JSON.stringify(Properties$outboundSchema.parse(properties));
}

export function propertiesFromJSON(
  jsonString: string,
): SafeParseResult<Properties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Properties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Properties' from JSON`,
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
export const Visibility$inboundSchema: z.ZodNativeEnum<typeof Visibility> = z
  .nativeEnum(Visibility);

/** @internal */
export const Visibility$outboundSchema: z.ZodNativeEnum<typeof Visibility> =
  Visibility$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Visibility$ {
  /** @deprecated use `Visibility$inboundSchema` instead. */
  export const inboundSchema = Visibility$inboundSchema;
  /** @deprecated use `Visibility$outboundSchema` instead. */
  export const outboundSchema = Visibility$outboundSchema;
}

/** @internal */
export const CreateOpenAIConversationRole$inboundSchema: z.ZodNativeEnum<
  typeof CreateOpenAIConversationRole
> = z.nativeEnum(CreateOpenAIConversationRole);

/** @internal */
export const CreateOpenAIConversationRole$outboundSchema: z.ZodNativeEnum<
  typeof CreateOpenAIConversationRole
> = CreateOpenAIConversationRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOpenAIConversationRole$ {
  /** @deprecated use `CreateOpenAIConversationRole$inboundSchema` instead. */
  export const inboundSchema = CreateOpenAIConversationRole$inboundSchema;
  /** @deprecated use `CreateOpenAIConversationRole$outboundSchema` instead. */
  export const outboundSchema = CreateOpenAIConversationRole$outboundSchema;
}

/** @internal */
export const CreateOpenAIConversationContent$inboundSchema: z.ZodType<
  CreateOpenAIConversationContent,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(OpenAIContentItem$inboundSchema)]);

/** @internal */
export type CreateOpenAIConversationContent$Outbound =
  | string
  | Array<OpenAIContentItem$Outbound>;

/** @internal */
export const CreateOpenAIConversationContent$outboundSchema: z.ZodType<
  CreateOpenAIConversationContent$Outbound,
  z.ZodTypeDef,
  CreateOpenAIConversationContent
> = z.union([z.string(), z.array(OpenAIContentItem$outboundSchema)]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOpenAIConversationContent$ {
  /** @deprecated use `CreateOpenAIConversationContent$inboundSchema` instead. */
  export const inboundSchema = CreateOpenAIConversationContent$inboundSchema;
  /** @deprecated use `CreateOpenAIConversationContent$outboundSchema` instead. */
  export const outboundSchema = CreateOpenAIConversationContent$outboundSchema;
  /** @deprecated use `CreateOpenAIConversationContent$Outbound` instead. */
  export type Outbound = CreateOpenAIConversationContent$Outbound;
}

export function createOpenAIConversationContentToJSON(
  createOpenAIConversationContent: CreateOpenAIConversationContent,
): string {
  return JSON.stringify(
    CreateOpenAIConversationContent$outboundSchema.parse(
      createOpenAIConversationContent,
    ),
  );
}

export function createOpenAIConversationContentFromJSON(
  jsonString: string,
): SafeParseResult<CreateOpenAIConversationContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOpenAIConversationContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOpenAIConversationContent' from JSON`,
  );
}

/** @internal */
export const CreateOpenAIConversationType1$inboundSchema: z.ZodNativeEnum<
  typeof CreateOpenAIConversationType1
> = z.nativeEnum(CreateOpenAIConversationType1);

/** @internal */
export const CreateOpenAIConversationType1$outboundSchema: z.ZodNativeEnum<
  typeof CreateOpenAIConversationType1
> = CreateOpenAIConversationType1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOpenAIConversationType1$ {
  /** @deprecated use `CreateOpenAIConversationType1$inboundSchema` instead. */
  export const inboundSchema = CreateOpenAIConversationType1$inboundSchema;
  /** @deprecated use `CreateOpenAIConversationType1$outboundSchema` instead. */
  export const outboundSchema = CreateOpenAIConversationType1$outboundSchema;
}

/** @internal */
export const CreateOpenAIConversationType$inboundSchema: z.ZodType<
  CreateOpenAIConversationType,
  z.ZodTypeDef,
  unknown
> = z.union([CreateOpenAIConversationType1$inboundSchema, z.string()]);

/** @internal */
export type CreateOpenAIConversationType$Outbound = string | string;

/** @internal */
export const CreateOpenAIConversationType$outboundSchema: z.ZodType<
  CreateOpenAIConversationType$Outbound,
  z.ZodTypeDef,
  CreateOpenAIConversationType
> = z.union([CreateOpenAIConversationType1$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOpenAIConversationType$ {
  /** @deprecated use `CreateOpenAIConversationType$inboundSchema` instead. */
  export const inboundSchema = CreateOpenAIConversationType$inboundSchema;
  /** @deprecated use `CreateOpenAIConversationType$outboundSchema` instead. */
  export const outboundSchema = CreateOpenAIConversationType$outboundSchema;
  /** @deprecated use `CreateOpenAIConversationType$Outbound` instead. */
  export type Outbound = CreateOpenAIConversationType$Outbound;
}

export function createOpenAIConversationTypeToJSON(
  createOpenAIConversationType: CreateOpenAIConversationType,
): string {
  return JSON.stringify(
    CreateOpenAIConversationType$outboundSchema.parse(
      createOpenAIConversationType,
    ),
  );
}

export function createOpenAIConversationTypeFromJSON(
  jsonString: string,
): SafeParseResult<CreateOpenAIConversationType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOpenAIConversationType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOpenAIConversationType' from JSON`,
  );
}

/** @internal */
export const CreateOpenAIConversationLinks$inboundSchema: z.ZodType<
  CreateOpenAIConversationLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  label: z.nullable(z.string()).optional(),
  url: z.string(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  type: z.nullable(
    z.union([CreateOpenAIConversationType1$inboundSchema, z.string()]),
  ).optional(),
  breadcrumbs: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type CreateOpenAIConversationLinks$Outbound = {
  label?: string | null | undefined;
  url: string;
  title?: string | null | undefined;
  description?: string | null | undefined;
  type?: string | string | null | undefined;
  breadcrumbs?: Array<string> | null | undefined;
};

/** @internal */
export const CreateOpenAIConversationLinks$outboundSchema: z.ZodType<
  CreateOpenAIConversationLinks$Outbound,
  z.ZodTypeDef,
  CreateOpenAIConversationLinks
> = z.object({
  label: z.nullable(z.string()).optional(),
  url: z.string(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  type: z.nullable(
    z.union([CreateOpenAIConversationType1$outboundSchema, z.string()]),
  ).optional(),
  breadcrumbs: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOpenAIConversationLinks$ {
  /** @deprecated use `CreateOpenAIConversationLinks$inboundSchema` instead. */
  export const inboundSchema = CreateOpenAIConversationLinks$inboundSchema;
  /** @deprecated use `CreateOpenAIConversationLinks$outboundSchema` instead. */
  export const outboundSchema = CreateOpenAIConversationLinks$outboundSchema;
  /** @deprecated use `CreateOpenAIConversationLinks$Outbound` instead. */
  export type Outbound = CreateOpenAIConversationLinks$Outbound;
}

export function createOpenAIConversationLinksToJSON(
  createOpenAIConversationLinks: CreateOpenAIConversationLinks,
): string {
  return JSON.stringify(
    CreateOpenAIConversationLinks$outboundSchema.parse(
      createOpenAIConversationLinks,
    ),
  );
}

export function createOpenAIConversationLinksFromJSON(
  jsonString: string,
): SafeParseResult<CreateOpenAIConversationLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOpenAIConversationLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOpenAIConversationLinks' from JSON`,
  );
}

/** @internal */
export const CreateOpenAIConversationProperties$inboundSchema: z.ZodType<
  CreateOpenAIConversationProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateOpenAIConversationProperties$Outbound = {};

/** @internal */
export const CreateOpenAIConversationProperties$outboundSchema: z.ZodType<
  CreateOpenAIConversationProperties$Outbound,
  z.ZodTypeDef,
  CreateOpenAIConversationProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOpenAIConversationProperties$ {
  /** @deprecated use `CreateOpenAIConversationProperties$inboundSchema` instead. */
  export const inboundSchema = CreateOpenAIConversationProperties$inboundSchema;
  /** @deprecated use `CreateOpenAIConversationProperties$outboundSchema` instead. */
  export const outboundSchema =
    CreateOpenAIConversationProperties$outboundSchema;
  /** @deprecated use `CreateOpenAIConversationProperties$Outbound` instead. */
  export type Outbound = CreateOpenAIConversationProperties$Outbound;
}

export function createOpenAIConversationPropertiesToJSON(
  createOpenAIConversationProperties: CreateOpenAIConversationProperties,
): string {
  return JSON.stringify(
    CreateOpenAIConversationProperties$outboundSchema.parse(
      createOpenAIConversationProperties,
    ),
  );
}

export function createOpenAIConversationPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<CreateOpenAIConversationProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateOpenAIConversationProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOpenAIConversationProperties' from JSON`,
  );
}

/** @internal */
export const CreateOpenAIConversationUserProperties$inboundSchema: z.ZodType<
  CreateOpenAIConversationUserProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateOpenAIConversationUserProperties$Outbound = {};

/** @internal */
export const CreateOpenAIConversationUserProperties$outboundSchema: z.ZodType<
  CreateOpenAIConversationUserProperties$Outbound,
  z.ZodTypeDef,
  CreateOpenAIConversationUserProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOpenAIConversationUserProperties$ {
  /** @deprecated use `CreateOpenAIConversationUserProperties$inboundSchema` instead. */
  export const inboundSchema =
    CreateOpenAIConversationUserProperties$inboundSchema;
  /** @deprecated use `CreateOpenAIConversationUserProperties$outboundSchema` instead. */
  export const outboundSchema =
    CreateOpenAIConversationUserProperties$outboundSchema;
  /** @deprecated use `CreateOpenAIConversationUserProperties$Outbound` instead. */
  export type Outbound = CreateOpenAIConversationUserProperties$Outbound;
}

export function createOpenAIConversationUserPropertiesToJSON(
  createOpenAIConversationUserProperties:
    CreateOpenAIConversationUserProperties,
): string {
  return JSON.stringify(
    CreateOpenAIConversationUserProperties$outboundSchema.parse(
      createOpenAIConversationUserProperties,
    ),
  );
}

export function createOpenAIConversationUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<CreateOpenAIConversationUserProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateOpenAIConversationUserProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOpenAIConversationUserProperties' from JSON`,
  );
}

/** @internal */
export const Messages$inboundSchema: z.ZodType<
  Messages,
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
  role: CreateOpenAIConversationRole$inboundSchema,
  content: z.union([z.string(), z.array(OpenAIContentItem$inboundSchema)]),
  name: z.nullable(z.string()).optional(),
  links: z.nullable(
    z.array(z.lazy(() => CreateOpenAIConversationLinks$inboundSchema)),
  ).optional(),
  properties: z.nullable(
    z.lazy(() => CreateOpenAIConversationProperties$inboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => CreateOpenAIConversationUserProperties$inboundSchema),
  ).optional(),
  tool_calls: z.nullable(z.array(OpenAIToolCall$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "tool_calls": "toolCalls",
  });
});

/** @internal */
export type Messages$Outbound = {
  id?: string | undefined;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  createdAt?: string | null | undefined;
  updatedAt?: string | null | undefined;
  role: string;
  content: string | Array<OpenAIContentItem$Outbound>;
  name?: string | null | undefined;
  links?: Array<CreateOpenAIConversationLinks$Outbound> | null | undefined;
  properties?: CreateOpenAIConversationProperties$Outbound | null | undefined;
  userProperties?:
    | CreateOpenAIConversationUserProperties$Outbound
    | null
    | undefined;
  tool_calls?: Array<OpenAIToolCall$Outbound> | null | undefined;
};

/** @internal */
export const Messages$outboundSchema: z.ZodType<
  Messages$Outbound,
  z.ZodTypeDef,
  Messages
> = z.object({
  id: z.string().optional(),
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  role: CreateOpenAIConversationRole$outboundSchema,
  content: z.union([z.string(), z.array(OpenAIContentItem$outboundSchema)]),
  name: z.nullable(z.string()).optional(),
  links: z.nullable(
    z.array(z.lazy(() => CreateOpenAIConversationLinks$outboundSchema)),
  ).optional(),
  properties: z.nullable(
    z.lazy(() => CreateOpenAIConversationProperties$outboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => CreateOpenAIConversationUserProperties$outboundSchema),
  ).optional(),
  toolCalls: z.nullable(z.array(OpenAIToolCall$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    toolCalls: "tool_calls",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Messages$ {
  /** @deprecated use `Messages$inboundSchema` instead. */
  export const inboundSchema = Messages$inboundSchema;
  /** @deprecated use `Messages$outboundSchema` instead. */
  export const outboundSchema = Messages$outboundSchema;
  /** @deprecated use `Messages$Outbound` instead. */
  export type Outbound = Messages$Outbound;
}

export function messagesToJSON(messages: Messages): string {
  return JSON.stringify(Messages$outboundSchema.parse(messages));
}

export function messagesFromJSON(
  jsonString: string,
): SafeParseResult<Messages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Messages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Messages' from JSON`,
  );
}

/** @internal */
export const CreateOpenAIConversation$inboundSchema: z.ZodType<
  CreateOpenAIConversation,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  type: Type$inboundSchema,
  supportTicketConversationId: z.nullable(z.string()).optional(),
  createdAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  updatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  properties: z.nullable(z.lazy(() => Properties$inboundSchema)).optional(),
  userProperties: z.nullable(z.lazy(() => UserProperties$inboundSchema))
    .optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  visibility: z.nullable(Visibility$inboundSchema).optional(),
  messages: z.array(z.lazy(() => Messages$inboundSchema)),
});

/** @internal */
export type CreateOpenAIConversation$Outbound = {
  id?: string | null | undefined;
  externalId?: string | null | undefined;
  externalUrl?: string | null | undefined;
  type: string;
  supportTicketConversationId?: string | null | undefined;
  createdAt?: string | null | undefined;
  updatedAt?: string | null | undefined;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  properties?: Properties$Outbound | null | undefined;
  userProperties?: UserProperties$Outbound | null | undefined;
  tags?: Array<string> | null | undefined;
  visibility?: string | null | undefined;
  messages: Array<Messages$Outbound>;
};

/** @internal */
export const CreateOpenAIConversation$outboundSchema: z.ZodType<
  CreateOpenAIConversation$Outbound,
  z.ZodTypeDef,
  CreateOpenAIConversation
> = z.object({
  id: z.nullable(z.string()).optional(),
  externalId: z.nullable(z.string()).optional(),
  externalUrl: z.nullable(z.string()).optional(),
  type: Type$outboundSchema,
  supportTicketConversationId: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  properties: z.nullable(z.lazy(() => Properties$outboundSchema)).optional(),
  userProperties: z.nullable(z.lazy(() => UserProperties$outboundSchema))
    .optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  visibility: z.nullable(Visibility$outboundSchema).optional(),
  messages: z.array(z.lazy(() => Messages$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOpenAIConversation$ {
  /** @deprecated use `CreateOpenAIConversation$inboundSchema` instead. */
  export const inboundSchema = CreateOpenAIConversation$inboundSchema;
  /** @deprecated use `CreateOpenAIConversation$outboundSchema` instead. */
  export const outboundSchema = CreateOpenAIConversation$outboundSchema;
  /** @deprecated use `CreateOpenAIConversation$Outbound` instead. */
  export type Outbound = CreateOpenAIConversation$Outbound;
}

export function createOpenAIConversationToJSON(
  createOpenAIConversation: CreateOpenAIConversation,
): string {
  return JSON.stringify(
    CreateOpenAIConversation$outboundSchema.parse(createOpenAIConversation),
  );
}

export function createOpenAIConversationFromJSON(
  jsonString: string,
): SafeParseResult<CreateOpenAIConversation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOpenAIConversation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOpenAIConversation' from JSON`,
  );
}
