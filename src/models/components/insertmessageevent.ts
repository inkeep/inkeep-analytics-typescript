/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type InsertMessageEventProperties = {};

export type InsertMessageEventUserProperties = {};

export const EntityType = {
  Message: "message",
} as const;
export type EntityType = ClosedEnum<typeof EntityType>;

export type InsertMessageEvent = {
  id?: string | undefined;
  type: string;
  messageId: string;
  createdAt?: string | null | undefined;
  properties?: InsertMessageEventProperties | null | undefined;
  userProperties?: InsertMessageEventUserProperties | null | undefined;
  entityType: EntityType;
};

/** @internal */
export const InsertMessageEventProperties$inboundSchema: z.ZodType<
  InsertMessageEventProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type InsertMessageEventProperties$Outbound = {};

/** @internal */
export const InsertMessageEventProperties$outboundSchema: z.ZodType<
  InsertMessageEventProperties$Outbound,
  z.ZodTypeDef,
  InsertMessageEventProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsertMessageEventProperties$ {
  /** @deprecated use `InsertMessageEventProperties$inboundSchema` instead. */
  export const inboundSchema = InsertMessageEventProperties$inboundSchema;
  /** @deprecated use `InsertMessageEventProperties$outboundSchema` instead. */
  export const outboundSchema = InsertMessageEventProperties$outboundSchema;
  /** @deprecated use `InsertMessageEventProperties$Outbound` instead. */
  export type Outbound = InsertMessageEventProperties$Outbound;
}

export function insertMessageEventPropertiesToJSON(
  insertMessageEventProperties: InsertMessageEventProperties,
): string {
  return JSON.stringify(
    InsertMessageEventProperties$outboundSchema.parse(
      insertMessageEventProperties,
    ),
  );
}

export function insertMessageEventPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<InsertMessageEventProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InsertMessageEventProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InsertMessageEventProperties' from JSON`,
  );
}

/** @internal */
export const InsertMessageEventUserProperties$inboundSchema: z.ZodType<
  InsertMessageEventUserProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type InsertMessageEventUserProperties$Outbound = {};

/** @internal */
export const InsertMessageEventUserProperties$outboundSchema: z.ZodType<
  InsertMessageEventUserProperties$Outbound,
  z.ZodTypeDef,
  InsertMessageEventUserProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsertMessageEventUserProperties$ {
  /** @deprecated use `InsertMessageEventUserProperties$inboundSchema` instead. */
  export const inboundSchema = InsertMessageEventUserProperties$inboundSchema;
  /** @deprecated use `InsertMessageEventUserProperties$outboundSchema` instead. */
  export const outboundSchema = InsertMessageEventUserProperties$outboundSchema;
  /** @deprecated use `InsertMessageEventUserProperties$Outbound` instead. */
  export type Outbound = InsertMessageEventUserProperties$Outbound;
}

export function insertMessageEventUserPropertiesToJSON(
  insertMessageEventUserProperties: InsertMessageEventUserProperties,
): string {
  return JSON.stringify(
    InsertMessageEventUserProperties$outboundSchema.parse(
      insertMessageEventUserProperties,
    ),
  );
}

export function insertMessageEventUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<InsertMessageEventUserProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InsertMessageEventUserProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InsertMessageEventUserProperties' from JSON`,
  );
}

/** @internal */
export const EntityType$inboundSchema: z.ZodNativeEnum<typeof EntityType> = z
  .nativeEnum(EntityType);

/** @internal */
export const EntityType$outboundSchema: z.ZodNativeEnum<typeof EntityType> =
  EntityType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityType$ {
  /** @deprecated use `EntityType$inboundSchema` instead. */
  export const inboundSchema = EntityType$inboundSchema;
  /** @deprecated use `EntityType$outboundSchema` instead. */
  export const outboundSchema = EntityType$outboundSchema;
}

/** @internal */
export const InsertMessageEvent$inboundSchema: z.ZodType<
  InsertMessageEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: z.string(),
  messageId: z.string(),
  createdAt: z.nullable(z.string()).optional(),
  properties: z.nullable(
    z.lazy(() => InsertMessageEventProperties$inboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => InsertMessageEventUserProperties$inboundSchema),
  ).optional(),
  entityType: EntityType$inboundSchema,
});

/** @internal */
export type InsertMessageEvent$Outbound = {
  id?: string | undefined;
  type: string;
  messageId: string;
  createdAt?: string | null | undefined;
  properties?: InsertMessageEventProperties$Outbound | null | undefined;
  userProperties?: InsertMessageEventUserProperties$Outbound | null | undefined;
  entityType: string;
};

/** @internal */
export const InsertMessageEvent$outboundSchema: z.ZodType<
  InsertMessageEvent$Outbound,
  z.ZodTypeDef,
  InsertMessageEvent
> = z.object({
  id: z.string().optional(),
  type: z.string(),
  messageId: z.string(),
  createdAt: z.nullable(z.string()).optional(),
  properties: z.nullable(
    z.lazy(() => InsertMessageEventProperties$outboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => InsertMessageEventUserProperties$outboundSchema),
  ).optional(),
  entityType: EntityType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsertMessageEvent$ {
  /** @deprecated use `InsertMessageEvent$inboundSchema` instead. */
  export const inboundSchema = InsertMessageEvent$inboundSchema;
  /** @deprecated use `InsertMessageEvent$outboundSchema` instead. */
  export const outboundSchema = InsertMessageEvent$outboundSchema;
  /** @deprecated use `InsertMessageEvent$Outbound` instead. */
  export type Outbound = InsertMessageEvent$Outbound;
}

export function insertMessageEventToJSON(
  insertMessageEvent: InsertMessageEvent,
): string {
  return JSON.stringify(
    InsertMessageEvent$outboundSchema.parse(insertMessageEvent),
  );
}

export function insertMessageEventFromJSON(
  jsonString: string,
): SafeParseResult<InsertMessageEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InsertMessageEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InsertMessageEvent' from JSON`,
  );
}
