/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SelectSearchEventProperties = {};

export type SelectSearchEventUserProperties = {};

export const SelectSearchEventEntityType = {
  Search: "search",
} as const;
export type SelectSearchEventEntityType = ClosedEnum<
  typeof SelectSearchEventEntityType
>;

export type SelectSearchEvent = {
  id: string;
  type: string;
  searchQuery: string;
  createdAt: string;
  properties?: SelectSearchEventProperties | null | undefined;
  userProperties?: SelectSearchEventUserProperties | null | undefined;
  entityType: SelectSearchEventEntityType;
};

/** @internal */
export const SelectSearchEventProperties$inboundSchema: z.ZodType<
  SelectSearchEventProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SelectSearchEventProperties$Outbound = {};

/** @internal */
export const SelectSearchEventProperties$outboundSchema: z.ZodType<
  SelectSearchEventProperties$Outbound,
  z.ZodTypeDef,
  SelectSearchEventProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SelectSearchEventProperties$ {
  /** @deprecated use `SelectSearchEventProperties$inboundSchema` instead. */
  export const inboundSchema = SelectSearchEventProperties$inboundSchema;
  /** @deprecated use `SelectSearchEventProperties$outboundSchema` instead. */
  export const outboundSchema = SelectSearchEventProperties$outboundSchema;
  /** @deprecated use `SelectSearchEventProperties$Outbound` instead. */
  export type Outbound = SelectSearchEventProperties$Outbound;
}

export function selectSearchEventPropertiesToJSON(
  selectSearchEventProperties: SelectSearchEventProperties,
): string {
  return JSON.stringify(
    SelectSearchEventProperties$outboundSchema.parse(
      selectSearchEventProperties,
    ),
  );
}

export function selectSearchEventPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<SelectSearchEventProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SelectSearchEventProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SelectSearchEventProperties' from JSON`,
  );
}

/** @internal */
export const SelectSearchEventUserProperties$inboundSchema: z.ZodType<
  SelectSearchEventUserProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SelectSearchEventUserProperties$Outbound = {};

/** @internal */
export const SelectSearchEventUserProperties$outboundSchema: z.ZodType<
  SelectSearchEventUserProperties$Outbound,
  z.ZodTypeDef,
  SelectSearchEventUserProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SelectSearchEventUserProperties$ {
  /** @deprecated use `SelectSearchEventUserProperties$inboundSchema` instead. */
  export const inboundSchema = SelectSearchEventUserProperties$inboundSchema;
  /** @deprecated use `SelectSearchEventUserProperties$outboundSchema` instead. */
  export const outboundSchema = SelectSearchEventUserProperties$outboundSchema;
  /** @deprecated use `SelectSearchEventUserProperties$Outbound` instead. */
  export type Outbound = SelectSearchEventUserProperties$Outbound;
}

export function selectSearchEventUserPropertiesToJSON(
  selectSearchEventUserProperties: SelectSearchEventUserProperties,
): string {
  return JSON.stringify(
    SelectSearchEventUserProperties$outboundSchema.parse(
      selectSearchEventUserProperties,
    ),
  );
}

export function selectSearchEventUserPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<SelectSearchEventUserProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SelectSearchEventUserProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SelectSearchEventUserProperties' from JSON`,
  );
}

/** @internal */
export const SelectSearchEventEntityType$inboundSchema: z.ZodNativeEnum<
  typeof SelectSearchEventEntityType
> = z.nativeEnum(SelectSearchEventEntityType);

/** @internal */
export const SelectSearchEventEntityType$outboundSchema: z.ZodNativeEnum<
  typeof SelectSearchEventEntityType
> = SelectSearchEventEntityType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SelectSearchEventEntityType$ {
  /** @deprecated use `SelectSearchEventEntityType$inboundSchema` instead. */
  export const inboundSchema = SelectSearchEventEntityType$inboundSchema;
  /** @deprecated use `SelectSearchEventEntityType$outboundSchema` instead. */
  export const outboundSchema = SelectSearchEventEntityType$outboundSchema;
}

/** @internal */
export const SelectSearchEvent$inboundSchema: z.ZodType<
  SelectSearchEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: z.string(),
  searchQuery: z.string(),
  createdAt: z.string(),
  properties: z.nullable(
    z.lazy(() => SelectSearchEventProperties$inboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => SelectSearchEventUserProperties$inboundSchema),
  ).optional(),
  entityType: SelectSearchEventEntityType$inboundSchema,
});

/** @internal */
export type SelectSearchEvent$Outbound = {
  id: string;
  type: string;
  searchQuery: string;
  createdAt: string;
  properties?: SelectSearchEventProperties$Outbound | null | undefined;
  userProperties?: SelectSearchEventUserProperties$Outbound | null | undefined;
  entityType: string;
};

/** @internal */
export const SelectSearchEvent$outboundSchema: z.ZodType<
  SelectSearchEvent$Outbound,
  z.ZodTypeDef,
  SelectSearchEvent
> = z.object({
  id: z.string(),
  type: z.string(),
  searchQuery: z.string(),
  createdAt: z.string(),
  properties: z.nullable(
    z.lazy(() => SelectSearchEventProperties$outboundSchema),
  ).optional(),
  userProperties: z.nullable(
    z.lazy(() => SelectSearchEventUserProperties$outboundSchema),
  ).optional(),
  entityType: SelectSearchEventEntityType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SelectSearchEvent$ {
  /** @deprecated use `SelectSearchEvent$inboundSchema` instead. */
  export const inboundSchema = SelectSearchEvent$inboundSchema;
  /** @deprecated use `SelectSearchEvent$outboundSchema` instead. */
  export const outboundSchema = SelectSearchEvent$outboundSchema;
  /** @deprecated use `SelectSearchEvent$Outbound` instead. */
  export type Outbound = SelectSearchEvent$Outbound;
}

export function selectSearchEventToJSON(
  selectSearchEvent: SelectSearchEvent,
): string {
  return JSON.stringify(
    SelectSearchEvent$outboundSchema.parse(selectSearchEvent),
  );
}

export function selectSearchEventFromJSON(
  jsonString: string,
): SafeParseResult<SelectSearchEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SelectSearchEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SelectSearchEvent' from JSON`,
  );
}
