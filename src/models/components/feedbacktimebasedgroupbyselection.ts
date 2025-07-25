/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TimeUnit,
  TimeUnit$inboundSchema,
  TimeUnit$outboundSchema,
} from "./timeunit.js";

export const FeedbackTimeBasedGroupBySelectionType = {
  Time: "time",
} as const;
export type FeedbackTimeBasedGroupBySelectionType = ClosedEnum<
  typeof FeedbackTimeBasedGroupBySelectionType
>;

export const FeedbackTimeBasedGroupBySelectionField = {
  Id: "id",
  Type: "type",
  MessageId: "messageId",
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
  OrganizationId: "organizationId",
  Reasons: "reasons",
  Sources: "sources",
  Details: "details",
  Properties: "properties",
  UserProperties: "userProperties",
  ConversationId: "conversationId",
  ProjectId: "projectId",
  IntegrationId: "integrationId",
} as const;
export type FeedbackTimeBasedGroupBySelectionField = ClosedEnum<
  typeof FeedbackTimeBasedGroupBySelectionField
>;

export type FeedbackTimeBasedGroupBySelection = {
  type: FeedbackTimeBasedGroupBySelectionType;
  /**
   * Valid time units for time-based operations
   */
  timeUnit: TimeUnit;
  field?: FeedbackTimeBasedGroupBySelectionField | undefined;
};

/** @internal */
export const FeedbackTimeBasedGroupBySelectionType$inboundSchema:
  z.ZodNativeEnum<typeof FeedbackTimeBasedGroupBySelectionType> = z.nativeEnum(
    FeedbackTimeBasedGroupBySelectionType,
  );

/** @internal */
export const FeedbackTimeBasedGroupBySelectionType$outboundSchema:
  z.ZodNativeEnum<typeof FeedbackTimeBasedGroupBySelectionType> =
    FeedbackTimeBasedGroupBySelectionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeedbackTimeBasedGroupBySelectionType$ {
  /** @deprecated use `FeedbackTimeBasedGroupBySelectionType$inboundSchema` instead. */
  export const inboundSchema =
    FeedbackTimeBasedGroupBySelectionType$inboundSchema;
  /** @deprecated use `FeedbackTimeBasedGroupBySelectionType$outboundSchema` instead. */
  export const outboundSchema =
    FeedbackTimeBasedGroupBySelectionType$outboundSchema;
}

/** @internal */
export const FeedbackTimeBasedGroupBySelectionField$inboundSchema:
  z.ZodNativeEnum<typeof FeedbackTimeBasedGroupBySelectionField> = z.nativeEnum(
    FeedbackTimeBasedGroupBySelectionField,
  );

/** @internal */
export const FeedbackTimeBasedGroupBySelectionField$outboundSchema:
  z.ZodNativeEnum<typeof FeedbackTimeBasedGroupBySelectionField> =
    FeedbackTimeBasedGroupBySelectionField$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeedbackTimeBasedGroupBySelectionField$ {
  /** @deprecated use `FeedbackTimeBasedGroupBySelectionField$inboundSchema` instead. */
  export const inboundSchema =
    FeedbackTimeBasedGroupBySelectionField$inboundSchema;
  /** @deprecated use `FeedbackTimeBasedGroupBySelectionField$outboundSchema` instead. */
  export const outboundSchema =
    FeedbackTimeBasedGroupBySelectionField$outboundSchema;
}

/** @internal */
export const FeedbackTimeBasedGroupBySelection$inboundSchema: z.ZodType<
  FeedbackTimeBasedGroupBySelection,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: FeedbackTimeBasedGroupBySelectionType$inboundSchema,
  timeUnit: TimeUnit$inboundSchema,
  field: FeedbackTimeBasedGroupBySelectionField$inboundSchema.optional(),
});

/** @internal */
export type FeedbackTimeBasedGroupBySelection$Outbound = {
  type: string;
  timeUnit: string;
  field?: string | undefined;
};

/** @internal */
export const FeedbackTimeBasedGroupBySelection$outboundSchema: z.ZodType<
  FeedbackTimeBasedGroupBySelection$Outbound,
  z.ZodTypeDef,
  FeedbackTimeBasedGroupBySelection
> = z.object({
  type: FeedbackTimeBasedGroupBySelectionType$outboundSchema,
  timeUnit: TimeUnit$outboundSchema,
  field: FeedbackTimeBasedGroupBySelectionField$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeedbackTimeBasedGroupBySelection$ {
  /** @deprecated use `FeedbackTimeBasedGroupBySelection$inboundSchema` instead. */
  export const inboundSchema = FeedbackTimeBasedGroupBySelection$inboundSchema;
  /** @deprecated use `FeedbackTimeBasedGroupBySelection$outboundSchema` instead. */
  export const outboundSchema =
    FeedbackTimeBasedGroupBySelection$outboundSchema;
  /** @deprecated use `FeedbackTimeBasedGroupBySelection$Outbound` instead. */
  export type Outbound = FeedbackTimeBasedGroupBySelection$Outbound;
}

export function feedbackTimeBasedGroupBySelectionToJSON(
  feedbackTimeBasedGroupBySelection: FeedbackTimeBasedGroupBySelection,
): string {
  return JSON.stringify(
    FeedbackTimeBasedGroupBySelection$outboundSchema.parse(
      feedbackTimeBasedGroupBySelection,
    ),
  );
}

export function feedbackTimeBasedGroupBySelectionFromJSON(
  jsonString: string,
): SafeParseResult<FeedbackTimeBasedGroupBySelection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FeedbackTimeBasedGroupBySelection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FeedbackTimeBasedGroupBySelection' from JSON`,
  );
}
