/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const EventsSimpleFieldSelectionType = {
  Field: "field",
} as const;
export type EventsSimpleFieldSelectionType = ClosedEnum<
  typeof EventsSimpleFieldSelectionType
>;

export const EventsSimpleFieldSelectionField = {
  Id: "id",
  OrganizationId: "organizationId",
  MessageId: "messageId",
  ConversationId: "conversationId",
  CreatedAt: "createdAt",
  ProjectId: "projectId",
  IntegrationId: "integrationId",
  EventType: "eventType",
  Type: "type",
  SearchQuery: "searchQuery",
  Properties: "properties",
  UserProperties: "userProperties",
} as const;
export type EventsSimpleFieldSelectionField = ClosedEnum<
  typeof EventsSimpleFieldSelectionField
>;

export type EventsSimpleFieldSelection = {
  type: EventsSimpleFieldSelectionType;
  field: EventsSimpleFieldSelectionField;
  path?: Array<string> | undefined;
};

/** @internal */
export const EventsSimpleFieldSelectionType$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionType
> = z.nativeEnum(EventsSimpleFieldSelectionType);

/** @internal */
export const EventsSimpleFieldSelectionType$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionType
> = EventsSimpleFieldSelectionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionType$ {
  /** @deprecated use `EventsSimpleFieldSelectionType$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionType$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionType$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionType$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField
> = z.nativeEnum(EventsSimpleFieldSelectionField);

/** @internal */
export const EventsSimpleFieldSelectionField$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField
> = EventsSimpleFieldSelectionField$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField$ {
  /** @deprecated use `EventsSimpleFieldSelectionField$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelection$inboundSchema: z.ZodType<
  EventsSimpleFieldSelection,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: EventsSimpleFieldSelectionType$inboundSchema,
  field: EventsSimpleFieldSelectionField$inboundSchema,
  path: z.array(z.string()).optional(),
});

/** @internal */
export type EventsSimpleFieldSelection$Outbound = {
  type: string;
  field: string;
  path?: Array<string> | undefined;
};

/** @internal */
export const EventsSimpleFieldSelection$outboundSchema: z.ZodType<
  EventsSimpleFieldSelection$Outbound,
  z.ZodTypeDef,
  EventsSimpleFieldSelection
> = z.object({
  type: EventsSimpleFieldSelectionType$outboundSchema,
  field: EventsSimpleFieldSelectionField$outboundSchema,
  path: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelection$ {
  /** @deprecated use `EventsSimpleFieldSelection$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelection$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelection$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelection$outboundSchema;
  /** @deprecated use `EventsSimpleFieldSelection$Outbound` instead. */
  export type Outbound = EventsSimpleFieldSelection$Outbound;
}

export function eventsSimpleFieldSelectionToJSON(
  eventsSimpleFieldSelection: EventsSimpleFieldSelection,
): string {
  return JSON.stringify(
    EventsSimpleFieldSelection$outboundSchema.parse(eventsSimpleFieldSelection),
  );
}

export function eventsSimpleFieldSelectionFromJSON(
  jsonString: string,
): SafeParseResult<EventsSimpleFieldSelection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventsSimpleFieldSelection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventsSimpleFieldSelection' from JSON`,
  );
}
