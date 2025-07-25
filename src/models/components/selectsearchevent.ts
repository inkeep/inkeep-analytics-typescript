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

/**
 * The unique identifier for the user. This value is sent by the inkeep widget.
 */
export type SelectSearchEventId = string | number;

/**
 * The unique identifier for the user. This value is sent by the Inkeep Support Agent Copilot. This value is used to create the graphs on the Inkeep Portal.
 */
export type SelectSearchEventUserId = string | number;

/**
 * A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description.
 */
export type SelectSearchEventUserProperties = {
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
  projectId: string | null;
  integrationId: string | null;
  /**
   * A customizable collection of custom properties or attributes.
   */
  properties?: { [k: string]: any } | null | undefined;
  /**
   * A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description.
   */
  userProperties?: SelectSearchEventUserProperties | null | undefined;
  entityType: SelectSearchEventEntityType;
};

/** @internal */
export const SelectSearchEventId$inboundSchema: z.ZodType<
  SelectSearchEventId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type SelectSearchEventId$Outbound = string | number;

/** @internal */
export const SelectSearchEventId$outboundSchema: z.ZodType<
  SelectSearchEventId$Outbound,
  z.ZodTypeDef,
  SelectSearchEventId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SelectSearchEventId$ {
  /** @deprecated use `SelectSearchEventId$inboundSchema` instead. */
  export const inboundSchema = SelectSearchEventId$inboundSchema;
  /** @deprecated use `SelectSearchEventId$outboundSchema` instead. */
  export const outboundSchema = SelectSearchEventId$outboundSchema;
  /** @deprecated use `SelectSearchEventId$Outbound` instead. */
  export type Outbound = SelectSearchEventId$Outbound;
}

export function selectSearchEventIdToJSON(
  selectSearchEventId: SelectSearchEventId,
): string {
  return JSON.stringify(
    SelectSearchEventId$outboundSchema.parse(selectSearchEventId),
  );
}

export function selectSearchEventIdFromJSON(
  jsonString: string,
): SafeParseResult<SelectSearchEventId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SelectSearchEventId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SelectSearchEventId' from JSON`,
  );
}

/** @internal */
export const SelectSearchEventUserId$inboundSchema: z.ZodType<
  SelectSearchEventUserId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type SelectSearchEventUserId$Outbound = string | number;

/** @internal */
export const SelectSearchEventUserId$outboundSchema: z.ZodType<
  SelectSearchEventUserId$Outbound,
  z.ZodTypeDef,
  SelectSearchEventUserId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SelectSearchEventUserId$ {
  /** @deprecated use `SelectSearchEventUserId$inboundSchema` instead. */
  export const inboundSchema = SelectSearchEventUserId$inboundSchema;
  /** @deprecated use `SelectSearchEventUserId$outboundSchema` instead. */
  export const outboundSchema = SelectSearchEventUserId$outboundSchema;
  /** @deprecated use `SelectSearchEventUserId$Outbound` instead. */
  export type Outbound = SelectSearchEventUserId$Outbound;
}

export function selectSearchEventUserIdToJSON(
  selectSearchEventUserId: SelectSearchEventUserId,
): string {
  return JSON.stringify(
    SelectSearchEventUserId$outboundSchema.parse(selectSearchEventUserId),
  );
}

export function selectSearchEventUserIdFromJSON(
  jsonString: string,
): SafeParseResult<SelectSearchEventUserId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SelectSearchEventUserId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SelectSearchEventUserId' from JSON`,
  );
}

/** @internal */
export const SelectSearchEventUserProperties$inboundSchema: z.ZodType<
  SelectSearchEventUserProperties,
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
export type SelectSearchEventUserProperties$Outbound = {
  id?: string | number | null | undefined;
  identificationType?: string | null | undefined;
  userId?: string | number | null | undefined;
  supportAgentName?: string | null | undefined;
  userType?: string | null | undefined;
  [additionalProperties: string]: unknown;
};

/** @internal */
export const SelectSearchEventUserProperties$outboundSchema: z.ZodType<
  SelectSearchEventUserProperties$Outbound,
  z.ZodTypeDef,
  SelectSearchEventUserProperties
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
  projectId: z.nullable(z.string()),
  integrationId: z.nullable(z.string()),
  properties: z.nullable(z.record(z.any())).optional(),
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
  projectId: string | null;
  integrationId: string | null;
  properties?: { [k: string]: any } | null | undefined;
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
  projectId: z.nullable(z.string()),
  integrationId: z.nullable(z.string()),
  properties: z.nullable(z.record(z.any())).optional(),
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
