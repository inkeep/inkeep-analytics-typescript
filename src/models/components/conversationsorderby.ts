/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ConversationsOrderByField = {
  Id: "id",
  UserMessageCount: "userMessageCount",
  OrganizationId: "organizationId",
  ProjectId: "projectId",
  IntegrationId: "integrationId",
  FirstMessageTime: "firstMessageTime",
  Type: "type",
  Properties: "properties",
  UserProperties: "userProperties",
  IdHour: "id_hour",
  IdDay: "id_day",
  IdWeek: "id_week",
  IdMonth: "id_month",
  UserMessageCountHour: "userMessageCount_hour",
  UserMessageCountDay: "userMessageCount_day",
  UserMessageCountWeek: "userMessageCount_week",
  UserMessageCountMonth: "userMessageCount_month",
  OrganizationIdHour: "organizationId_hour",
  OrganizationIdDay: "organizationId_day",
  OrganizationIdWeek: "organizationId_week",
  OrganizationIdMonth: "organizationId_month",
  ProjectIdHour: "projectId_hour",
  ProjectIdDay: "projectId_day",
  ProjectIdWeek: "projectId_week",
  ProjectIdMonth: "projectId_month",
  IntegrationIdHour: "integrationId_hour",
  IntegrationIdDay: "integrationId_day",
  IntegrationIdWeek: "integrationId_week",
  IntegrationIdMonth: "integrationId_month",
  FirstMessageTimeHour: "firstMessageTime_hour",
  FirstMessageTimeDay: "firstMessageTime_day",
  FirstMessageTimeWeek: "firstMessageTime_week",
  FirstMessageTimeMonth: "firstMessageTime_month",
  TypeHour: "type_hour",
  TypeDay: "type_day",
  TypeWeek: "type_week",
  TypeMonth: "type_month",
  PropertiesHour: "properties_hour",
  PropertiesDay: "properties_day",
  PropertiesWeek: "properties_week",
  PropertiesMonth: "properties_month",
  UserPropertiesHour: "userProperties_hour",
  UserPropertiesDay: "userProperties_day",
  UserPropertiesWeek: "userProperties_week",
  UserPropertiesMonth: "userProperties_month",
  SumId: "sum_id",
  SumUserMessageCount: "sum_userMessageCount",
  SumOrganizationId: "sum_organizationId",
  SumProjectId: "sum_projectId",
  SumIntegrationId: "sum_integrationId",
  SumFirstMessageTime: "sum_firstMessageTime",
  SumType: "sum_type",
  SumProperties: "sum_properties",
  SumUserProperties: "sum_userProperties",
  CountId: "count_id",
  CountUserMessageCount: "count_userMessageCount",
  CountOrganizationId: "count_organizationId",
  CountProjectId: "count_projectId",
  CountIntegrationId: "count_integrationId",
  CountFirstMessageTime: "count_firstMessageTime",
  CountType: "count_type",
  CountProperties: "count_properties",
  CountUserProperties: "count_userProperties",
  AvgId: "avg_id",
  AvgUserMessageCount: "avg_userMessageCount",
  AvgOrganizationId: "avg_organizationId",
  AvgProjectId: "avg_projectId",
  AvgIntegrationId: "avg_integrationId",
  AvgFirstMessageTime: "avg_firstMessageTime",
  AvgType: "avg_type",
  AvgProperties: "avg_properties",
  AvgUserProperties: "avg_userProperties",
  MinId: "min_id",
  MinUserMessageCount: "min_userMessageCount",
  MinOrganizationId: "min_organizationId",
  MinProjectId: "min_projectId",
  MinIntegrationId: "min_integrationId",
  MinFirstMessageTime: "min_firstMessageTime",
  MinType: "min_type",
  MinProperties: "min_properties",
  MinUserProperties: "min_userProperties",
  MaxId: "max_id",
  MaxUserMessageCount: "max_userMessageCount",
  MaxOrganizationId: "max_organizationId",
  MaxProjectId: "max_projectId",
  MaxIntegrationId: "max_integrationId",
  MaxFirstMessageTime: "max_firstMessageTime",
  MaxType: "max_type",
  MaxProperties: "max_properties",
  MaxUserProperties: "max_userProperties",
} as const;
export type ConversationsOrderByField = ClosedEnum<
  typeof ConversationsOrderByField
>;

export const Direction = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type Direction = ClosedEnum<typeof Direction>;

/**
 * Specifies how to order Conversations query results by field and direction
 */
export type ConversationsOrderBy = {
  field: ConversationsOrderByField;
  direction: Direction;
};

/** @internal */
export const ConversationsOrderByField$inboundSchema: z.ZodNativeEnum<
  typeof ConversationsOrderByField
> = z.nativeEnum(ConversationsOrderByField);

/** @internal */
export const ConversationsOrderByField$outboundSchema: z.ZodNativeEnum<
  typeof ConversationsOrderByField
> = ConversationsOrderByField$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsOrderByField$ {
  /** @deprecated use `ConversationsOrderByField$inboundSchema` instead. */
  export const inboundSchema = ConversationsOrderByField$inboundSchema;
  /** @deprecated use `ConversationsOrderByField$outboundSchema` instead. */
  export const outboundSchema = ConversationsOrderByField$outboundSchema;
}

/** @internal */
export const Direction$inboundSchema: z.ZodNativeEnum<typeof Direction> = z
  .nativeEnum(Direction);

/** @internal */
export const Direction$outboundSchema: z.ZodNativeEnum<typeof Direction> =
  Direction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Direction$ {
  /** @deprecated use `Direction$inboundSchema` instead. */
  export const inboundSchema = Direction$inboundSchema;
  /** @deprecated use `Direction$outboundSchema` instead. */
  export const outboundSchema = Direction$outboundSchema;
}

/** @internal */
export const ConversationsOrderBy$inboundSchema: z.ZodType<
  ConversationsOrderBy,
  z.ZodTypeDef,
  unknown
> = z.object({
  field: ConversationsOrderByField$inboundSchema,
  direction: Direction$inboundSchema,
});

/** @internal */
export type ConversationsOrderBy$Outbound = {
  field: string;
  direction: string;
};

/** @internal */
export const ConversationsOrderBy$outboundSchema: z.ZodType<
  ConversationsOrderBy$Outbound,
  z.ZodTypeDef,
  ConversationsOrderBy
> = z.object({
  field: ConversationsOrderByField$outboundSchema,
  direction: Direction$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsOrderBy$ {
  /** @deprecated use `ConversationsOrderBy$inboundSchema` instead. */
  export const inboundSchema = ConversationsOrderBy$inboundSchema;
  /** @deprecated use `ConversationsOrderBy$outboundSchema` instead. */
  export const outboundSchema = ConversationsOrderBy$outboundSchema;
  /** @deprecated use `ConversationsOrderBy$Outbound` instead. */
  export type Outbound = ConversationsOrderBy$Outbound;
}

export function conversationsOrderByToJSON(
  conversationsOrderBy: ConversationsOrderBy,
): string {
  return JSON.stringify(
    ConversationsOrderBy$outboundSchema.parse(conversationsOrderBy),
  );
}

export function conversationsOrderByFromJSON(
  jsonString: string,
): SafeParseResult<ConversationsOrderBy, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConversationsOrderBy$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConversationsOrderBy' from JSON`,
  );
}
