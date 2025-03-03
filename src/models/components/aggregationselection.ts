/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const AggregationSelectionType = {
  Aggregation: "aggregation",
} as const;
export type AggregationSelectionType = ClosedEnum<
  typeof AggregationSelectionType
>;

export const AggregationSelectionAggregation = {
  Sum: "sum",
  Count: "count",
  Avg: "avg",
  Min: "min",
  Max: "max",
} as const;
export type AggregationSelectionAggregation = ClosedEnum<
  typeof AggregationSelectionAggregation
>;

export const AggregationSelectionField = {
  Id: "id",
  MessageIds: "messageIds",
  MessagesCount: "messagesCount",
  OrganizationId: "organizationId",
  Question: "question",
  QuestionLength: "questionLength",
  Answer: "answer",
  IsOnTopic: "isOnTopic",
  IsClear: "isClear",
  IsDocumented: "isDocumented",
  IsFeatureSupported: "isFeatureSupported",
  IsAnswerConfident: "isAnswerConfident",
  GapSummary: "gapSummary",
  Subject: "subject",
  Category: "category",
  Languages: "languages",
  FirstPartyEntities: "firstPartyEntities",
  ThirdPartyEntities: "thirdPartyEntities",
  Emotion: "emotion",
  Sentiment: "sentiment",
  QuestionType: "questionType",
  ProjectId: "projectId",
  IntegrationId: "integrationId",
  FirstMessageTime: "firstMessageTime",
  LastMessageTime: "lastMessageTime",
  LastUpdated: "lastUpdated",
  HasPositiveFeedback: "hasPositiveFeedback",
  HasNegativeFeedback: "hasNegativeFeedback",
  ConversationIds: "conversationIds",
  AreAIAnnotationsVerified: "areAIAnnotationsVerified",
  IsInitialQuestionAnswer: "isInitialQuestionAnswer",
} as const;
export type AggregationSelectionField = ClosedEnum<
  typeof AggregationSelectionField
>;

export type AggregationSelection = {
  type: AggregationSelectionType;
  aggregation: AggregationSelectionAggregation;
  field?: AggregationSelectionField | undefined;
};

/** @internal */
export const AggregationSelectionType$inboundSchema: z.ZodNativeEnum<
  typeof AggregationSelectionType
> = z.nativeEnum(AggregationSelectionType);

/** @internal */
export const AggregationSelectionType$outboundSchema: z.ZodNativeEnum<
  typeof AggregationSelectionType
> = AggregationSelectionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AggregationSelectionType$ {
  /** @deprecated use `AggregationSelectionType$inboundSchema` instead. */
  export const inboundSchema = AggregationSelectionType$inboundSchema;
  /** @deprecated use `AggregationSelectionType$outboundSchema` instead. */
  export const outboundSchema = AggregationSelectionType$outboundSchema;
}

/** @internal */
export const AggregationSelectionAggregation$inboundSchema: z.ZodNativeEnum<
  typeof AggregationSelectionAggregation
> = z.nativeEnum(AggregationSelectionAggregation);

/** @internal */
export const AggregationSelectionAggregation$outboundSchema: z.ZodNativeEnum<
  typeof AggregationSelectionAggregation
> = AggregationSelectionAggregation$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AggregationSelectionAggregation$ {
  /** @deprecated use `AggregationSelectionAggregation$inboundSchema` instead. */
  export const inboundSchema = AggregationSelectionAggregation$inboundSchema;
  /** @deprecated use `AggregationSelectionAggregation$outboundSchema` instead. */
  export const outboundSchema = AggregationSelectionAggregation$outboundSchema;
}

/** @internal */
export const AggregationSelectionField$inboundSchema: z.ZodNativeEnum<
  typeof AggregationSelectionField
> = z.nativeEnum(AggregationSelectionField);

/** @internal */
export const AggregationSelectionField$outboundSchema: z.ZodNativeEnum<
  typeof AggregationSelectionField
> = AggregationSelectionField$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AggregationSelectionField$ {
  /** @deprecated use `AggregationSelectionField$inboundSchema` instead. */
  export const inboundSchema = AggregationSelectionField$inboundSchema;
  /** @deprecated use `AggregationSelectionField$outboundSchema` instead. */
  export const outboundSchema = AggregationSelectionField$outboundSchema;
}

/** @internal */
export const AggregationSelection$inboundSchema: z.ZodType<
  AggregationSelection,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: AggregationSelectionType$inboundSchema,
  aggregation: AggregationSelectionAggregation$inboundSchema,
  field: AggregationSelectionField$inboundSchema.optional(),
});

/** @internal */
export type AggregationSelection$Outbound = {
  type: string;
  aggregation: string;
  field?: string | undefined;
};

/** @internal */
export const AggregationSelection$outboundSchema: z.ZodType<
  AggregationSelection$Outbound,
  z.ZodTypeDef,
  AggregationSelection
> = z.object({
  type: AggregationSelectionType$outboundSchema,
  aggregation: AggregationSelectionAggregation$outboundSchema,
  field: AggregationSelectionField$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AggregationSelection$ {
  /** @deprecated use `AggregationSelection$inboundSchema` instead. */
  export const inboundSchema = AggregationSelection$inboundSchema;
  /** @deprecated use `AggregationSelection$outboundSchema` instead. */
  export const outboundSchema = AggregationSelection$outboundSchema;
  /** @deprecated use `AggregationSelection$Outbound` instead. */
  export type Outbound = AggregationSelection$Outbound;
}

export function aggregationSelectionToJSON(
  aggregationSelection: AggregationSelection,
): string {
  return JSON.stringify(
    AggregationSelection$outboundSchema.parse(aggregationSelection),
  );
}

export function aggregationSelectionFromJSON(
  jsonString: string,
): SafeParseResult<AggregationSelection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AggregationSelection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AggregationSelection' from JSON`,
  );
}
