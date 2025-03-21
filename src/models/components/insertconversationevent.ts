/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const InsertConversationEventEntityType = {
  Conversation: "conversation",
} as const;
export type InsertConversationEventEntityType = ClosedEnum<
  typeof InsertConversationEventEntityType
>;

export type InsertConversationEvent = {
  id?: string | undefined;
  type: string;
  conversationId: string;
  /**
   * A timestamp in ISO 8601 format with timezone information. If not provided, the current time will be used.
   */
  createdAt?: Date | null | undefined;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  /**
   * A customizable collection of custom properties or attributes.
   */
  properties?: { [k: string]: any } | null | undefined;
  /**
   * A customizable collection of custom properties or attributes.
   */
  userProperties?: { [k: string]: any } | null | undefined;
  entityType: InsertConversationEventEntityType;
};

/** @internal */
export const InsertConversationEventEntityType$inboundSchema: z.ZodNativeEnum<
  typeof InsertConversationEventEntityType
> = z.nativeEnum(InsertConversationEventEntityType);

/** @internal */
export const InsertConversationEventEntityType$outboundSchema: z.ZodNativeEnum<
  typeof InsertConversationEventEntityType
> = InsertConversationEventEntityType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsertConversationEventEntityType$ {
  /** @deprecated use `InsertConversationEventEntityType$inboundSchema` instead. */
  export const inboundSchema = InsertConversationEventEntityType$inboundSchema;
  /** @deprecated use `InsertConversationEventEntityType$outboundSchema` instead. */
  export const outboundSchema =
    InsertConversationEventEntityType$outboundSchema;
}

/** @internal */
export const InsertConversationEvent$inboundSchema: z.ZodType<
  InsertConversationEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: z.string(),
  conversationId: z.string(),
  createdAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  properties: z.nullable(z.record(z.any())).optional(),
  userProperties: z.nullable(z.record(z.any())).optional(),
  entityType: InsertConversationEventEntityType$inboundSchema,
});

/** @internal */
export type InsertConversationEvent$Outbound = {
  id?: string | undefined;
  type: string;
  conversationId: string;
  createdAt?: string | null | undefined;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  properties?: { [k: string]: any } | null | undefined;
  userProperties?: { [k: string]: any } | null | undefined;
  entityType: string;
};

/** @internal */
export const InsertConversationEvent$outboundSchema: z.ZodType<
  InsertConversationEvent$Outbound,
  z.ZodTypeDef,
  InsertConversationEvent
> = z.object({
  id: z.string().optional(),
  type: z.string(),
  conversationId: z.string(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  properties: z.nullable(z.record(z.any())).optional(),
  userProperties: z.nullable(z.record(z.any())).optional(),
  entityType: InsertConversationEventEntityType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsertConversationEvent$ {
  /** @deprecated use `InsertConversationEvent$inboundSchema` instead. */
  export const inboundSchema = InsertConversationEvent$inboundSchema;
  /** @deprecated use `InsertConversationEvent$outboundSchema` instead. */
  export const outboundSchema = InsertConversationEvent$outboundSchema;
  /** @deprecated use `InsertConversationEvent$Outbound` instead. */
  export type Outbound = InsertConversationEvent$Outbound;
}

export function insertConversationEventToJSON(
  insertConversationEvent: InsertConversationEvent,
): string {
  return JSON.stringify(
    InsertConversationEvent$outboundSchema.parse(insertConversationEvent),
  );
}

export function insertConversationEventFromJSON(
  jsonString: string,
): SafeParseResult<InsertConversationEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InsertConversationEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InsertConversationEvent' from JSON`,
  );
}
