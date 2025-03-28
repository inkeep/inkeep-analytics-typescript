/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const QueryConversationsResponseDataType = {
  Openai: "openai",
  SupportTicket: "support_ticket",
  SupportCopilot: "support_copilot",
} as const;
export type QueryConversationsResponseDataType = ClosedEnum<
  typeof QueryConversationsResponseDataType
>;

export type ConversationsResultItem = {
  id?: string | undefined;
  userMessageCount?: number | undefined;
  organizationId?: string | null | undefined;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  firstMessageTime?: Date | undefined;
  type?: QueryConversationsResponseDataType | null | undefined;
  /**
   * A customizable collection of custom properties or attributes.
   */
  properties?: { [k: string]: any } | null | undefined;
  /**
   * A customizable collection of custom properties or attributes.
   */
  userProperties?: { [k: string]: any } | null | undefined;
  sum?: number | undefined;
  count?: number | undefined;
  avg?: number | undefined;
  min?: number | undefined;
  max?: number | undefined;
  idHour?: string | undefined;
  idDay?: string | undefined;
  idWeek?: string | undefined;
  idMonth?: string | undefined;
  userMessageCountHour?: string | undefined;
  userMessageCountDay?: string | undefined;
  userMessageCountWeek?: string | undefined;
  userMessageCountMonth?: string | undefined;
  organizationIdHour?: string | undefined;
  organizationIdDay?: string | undefined;
  organizationIdWeek?: string | undefined;
  organizationIdMonth?: string | undefined;
  projectIdHour?: string | undefined;
  projectIdDay?: string | undefined;
  projectIdWeek?: string | undefined;
  projectIdMonth?: string | undefined;
  integrationIdHour?: string | undefined;
  integrationIdDay?: string | undefined;
  integrationIdWeek?: string | undefined;
  integrationIdMonth?: string | undefined;
  firstMessageTimeHour?: string | undefined;
  firstMessageTimeDay?: string | undefined;
  firstMessageTimeWeek?: string | undefined;
  firstMessageTimeMonth?: string | undefined;
  typeHour?: string | undefined;
  typeDay?: string | undefined;
  typeWeek?: string | undefined;
  typeMonth?: string | undefined;
  propertiesHour?: string | undefined;
  propertiesDay?: string | undefined;
  propertiesWeek?: string | undefined;
  propertiesMonth?: string | undefined;
  userPropertiesHour?: string | undefined;
  userPropertiesDay?: string | undefined;
  userPropertiesWeek?: string | undefined;
  userPropertiesMonth?: string | undefined;
  sumId?: number | undefined;
  sumUserMessageCount?: number | undefined;
  sumOrganizationId?: number | undefined;
  sumProjectId?: number | undefined;
  sumIntegrationId?: number | undefined;
  sumFirstMessageTime?: number | undefined;
  sumType?: number | undefined;
  sumProperties?: number | undefined;
  sumUserProperties?: number | undefined;
  countId?: number | undefined;
  countUserMessageCount?: number | undefined;
  countOrganizationId?: number | undefined;
  countProjectId?: number | undefined;
  countIntegrationId?: number | undefined;
  countFirstMessageTime?: number | undefined;
  countType?: number | undefined;
  countProperties?: number | undefined;
  countUserProperties?: number | undefined;
  avgId?: number | undefined;
  avgUserMessageCount?: number | undefined;
  avgOrganizationId?: number | undefined;
  avgProjectId?: number | undefined;
  avgIntegrationId?: number | undefined;
  avgFirstMessageTime?: number | undefined;
  avgType?: number | undefined;
  avgProperties?: number | undefined;
  avgUserProperties?: number | undefined;
  minId?: number | undefined;
  minUserMessageCount?: number | undefined;
  minOrganizationId?: number | undefined;
  minProjectId?: number | undefined;
  minIntegrationId?: number | undefined;
  minFirstMessageTime?: number | undefined;
  minType?: number | undefined;
  minProperties?: number | undefined;
  minUserProperties?: number | undefined;
  maxId?: number | undefined;
  maxUserMessageCount?: number | undefined;
  maxOrganizationId?: number | undefined;
  maxProjectId?: number | undefined;
  maxIntegrationId?: number | undefined;
  maxFirstMessageTime?: number | undefined;
  maxType?: number | undefined;
  maxProperties?: number | undefined;
  maxUserProperties?: number | undefined;
};

/**
 * Data object containing QueryConversations query results and pagination information
 */
export type QueryConversationsResponseData = {
  result: Array<ConversationsResultItem>;
  /**
   * Total number of results matching the query
   */
  total: number;
  /**
   * Number of results per page
   */
  pageSize: number;
  /**
   * Number of results in the current response
   */
  count: number;
};

/** @internal */
export const QueryConversationsResponseDataType$inboundSchema: z.ZodNativeEnum<
  typeof QueryConversationsResponseDataType
> = z.nativeEnum(QueryConversationsResponseDataType);

/** @internal */
export const QueryConversationsResponseDataType$outboundSchema: z.ZodNativeEnum<
  typeof QueryConversationsResponseDataType
> = QueryConversationsResponseDataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryConversationsResponseDataType$ {
  /** @deprecated use `QueryConversationsResponseDataType$inboundSchema` instead. */
  export const inboundSchema = QueryConversationsResponseDataType$inboundSchema;
  /** @deprecated use `QueryConversationsResponseDataType$outboundSchema` instead. */
  export const outboundSchema =
    QueryConversationsResponseDataType$outboundSchema;
}

/** @internal */
export const ConversationsResultItem$inboundSchema: z.ZodType<
  ConversationsResultItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  userMessageCount: z.number().optional(),
  organizationId: z.nullable(z.string()).optional(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  firstMessageTime: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  type: z.nullable(QueryConversationsResponseDataType$inboundSchema).optional(),
  properties: z.nullable(z.record(z.any())).optional(),
  userProperties: z.nullable(z.record(z.any())).optional(),
  sum: z.number().optional(),
  count: z.number().optional(),
  avg: z.number().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  id_hour: z.string().optional(),
  id_day: z.string().optional(),
  id_week: z.string().optional(),
  id_month: z.string().optional(),
  userMessageCount_hour: z.string().optional(),
  userMessageCount_day: z.string().optional(),
  userMessageCount_week: z.string().optional(),
  userMessageCount_month: z.string().optional(),
  organizationId_hour: z.string().optional(),
  organizationId_day: z.string().optional(),
  organizationId_week: z.string().optional(),
  organizationId_month: z.string().optional(),
  projectId_hour: z.string().optional(),
  projectId_day: z.string().optional(),
  projectId_week: z.string().optional(),
  projectId_month: z.string().optional(),
  integrationId_hour: z.string().optional(),
  integrationId_day: z.string().optional(),
  integrationId_week: z.string().optional(),
  integrationId_month: z.string().optional(),
  firstMessageTime_hour: z.string().optional(),
  firstMessageTime_day: z.string().optional(),
  firstMessageTime_week: z.string().optional(),
  firstMessageTime_month: z.string().optional(),
  type_hour: z.string().optional(),
  type_day: z.string().optional(),
  type_week: z.string().optional(),
  type_month: z.string().optional(),
  properties_hour: z.string().optional(),
  properties_day: z.string().optional(),
  properties_week: z.string().optional(),
  properties_month: z.string().optional(),
  userProperties_hour: z.string().optional(),
  userProperties_day: z.string().optional(),
  userProperties_week: z.string().optional(),
  userProperties_month: z.string().optional(),
  sum_id: z.number().optional(),
  sum_userMessageCount: z.number().optional(),
  sum_organizationId: z.number().optional(),
  sum_projectId: z.number().optional(),
  sum_integrationId: z.number().optional(),
  sum_firstMessageTime: z.number().optional(),
  sum_type: z.number().optional(),
  sum_properties: z.number().optional(),
  sum_userProperties: z.number().optional(),
  count_id: z.number().optional(),
  count_userMessageCount: z.number().optional(),
  count_organizationId: z.number().optional(),
  count_projectId: z.number().optional(),
  count_integrationId: z.number().optional(),
  count_firstMessageTime: z.number().optional(),
  count_type: z.number().optional(),
  count_properties: z.number().optional(),
  count_userProperties: z.number().optional(),
  avg_id: z.number().optional(),
  avg_userMessageCount: z.number().optional(),
  avg_organizationId: z.number().optional(),
  avg_projectId: z.number().optional(),
  avg_integrationId: z.number().optional(),
  avg_firstMessageTime: z.number().optional(),
  avg_type: z.number().optional(),
  avg_properties: z.number().optional(),
  avg_userProperties: z.number().optional(),
  min_id: z.number().optional(),
  min_userMessageCount: z.number().optional(),
  min_organizationId: z.number().optional(),
  min_projectId: z.number().optional(),
  min_integrationId: z.number().optional(),
  min_firstMessageTime: z.number().optional(),
  min_type: z.number().optional(),
  min_properties: z.number().optional(),
  min_userProperties: z.number().optional(),
  max_id: z.number().optional(),
  max_userMessageCount: z.number().optional(),
  max_organizationId: z.number().optional(),
  max_projectId: z.number().optional(),
  max_integrationId: z.number().optional(),
  max_firstMessageTime: z.number().optional(),
  max_type: z.number().optional(),
  max_properties: z.number().optional(),
  max_userProperties: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    "id_hour": "idHour",
    "id_day": "idDay",
    "id_week": "idWeek",
    "id_month": "idMonth",
    "userMessageCount_hour": "userMessageCountHour",
    "userMessageCount_day": "userMessageCountDay",
    "userMessageCount_week": "userMessageCountWeek",
    "userMessageCount_month": "userMessageCountMonth",
    "organizationId_hour": "organizationIdHour",
    "organizationId_day": "organizationIdDay",
    "organizationId_week": "organizationIdWeek",
    "organizationId_month": "organizationIdMonth",
    "projectId_hour": "projectIdHour",
    "projectId_day": "projectIdDay",
    "projectId_week": "projectIdWeek",
    "projectId_month": "projectIdMonth",
    "integrationId_hour": "integrationIdHour",
    "integrationId_day": "integrationIdDay",
    "integrationId_week": "integrationIdWeek",
    "integrationId_month": "integrationIdMonth",
    "firstMessageTime_hour": "firstMessageTimeHour",
    "firstMessageTime_day": "firstMessageTimeDay",
    "firstMessageTime_week": "firstMessageTimeWeek",
    "firstMessageTime_month": "firstMessageTimeMonth",
    "type_hour": "typeHour",
    "type_day": "typeDay",
    "type_week": "typeWeek",
    "type_month": "typeMonth",
    "properties_hour": "propertiesHour",
    "properties_day": "propertiesDay",
    "properties_week": "propertiesWeek",
    "properties_month": "propertiesMonth",
    "userProperties_hour": "userPropertiesHour",
    "userProperties_day": "userPropertiesDay",
    "userProperties_week": "userPropertiesWeek",
    "userProperties_month": "userPropertiesMonth",
    "sum_id": "sumId",
    "sum_userMessageCount": "sumUserMessageCount",
    "sum_organizationId": "sumOrganizationId",
    "sum_projectId": "sumProjectId",
    "sum_integrationId": "sumIntegrationId",
    "sum_firstMessageTime": "sumFirstMessageTime",
    "sum_type": "sumType",
    "sum_properties": "sumProperties",
    "sum_userProperties": "sumUserProperties",
    "count_id": "countId",
    "count_userMessageCount": "countUserMessageCount",
    "count_organizationId": "countOrganizationId",
    "count_projectId": "countProjectId",
    "count_integrationId": "countIntegrationId",
    "count_firstMessageTime": "countFirstMessageTime",
    "count_type": "countType",
    "count_properties": "countProperties",
    "count_userProperties": "countUserProperties",
    "avg_id": "avgId",
    "avg_userMessageCount": "avgUserMessageCount",
    "avg_organizationId": "avgOrganizationId",
    "avg_projectId": "avgProjectId",
    "avg_integrationId": "avgIntegrationId",
    "avg_firstMessageTime": "avgFirstMessageTime",
    "avg_type": "avgType",
    "avg_properties": "avgProperties",
    "avg_userProperties": "avgUserProperties",
    "min_id": "minId",
    "min_userMessageCount": "minUserMessageCount",
    "min_organizationId": "minOrganizationId",
    "min_projectId": "minProjectId",
    "min_integrationId": "minIntegrationId",
    "min_firstMessageTime": "minFirstMessageTime",
    "min_type": "minType",
    "min_properties": "minProperties",
    "min_userProperties": "minUserProperties",
    "max_id": "maxId",
    "max_userMessageCount": "maxUserMessageCount",
    "max_organizationId": "maxOrganizationId",
    "max_projectId": "maxProjectId",
    "max_integrationId": "maxIntegrationId",
    "max_firstMessageTime": "maxFirstMessageTime",
    "max_type": "maxType",
    "max_properties": "maxProperties",
    "max_userProperties": "maxUserProperties",
  });
});

/** @internal */
export type ConversationsResultItem$Outbound = {
  id?: string | undefined;
  userMessageCount?: number | undefined;
  organizationId?: string | null | undefined;
  projectId?: string | null | undefined;
  integrationId?: string | null | undefined;
  firstMessageTime?: string | undefined;
  type?: string | null | undefined;
  properties?: { [k: string]: any } | null | undefined;
  userProperties?: { [k: string]: any } | null | undefined;
  sum?: number | undefined;
  count?: number | undefined;
  avg?: number | undefined;
  min?: number | undefined;
  max?: number | undefined;
  id_hour?: string | undefined;
  id_day?: string | undefined;
  id_week?: string | undefined;
  id_month?: string | undefined;
  userMessageCount_hour?: string | undefined;
  userMessageCount_day?: string | undefined;
  userMessageCount_week?: string | undefined;
  userMessageCount_month?: string | undefined;
  organizationId_hour?: string | undefined;
  organizationId_day?: string | undefined;
  organizationId_week?: string | undefined;
  organizationId_month?: string | undefined;
  projectId_hour?: string | undefined;
  projectId_day?: string | undefined;
  projectId_week?: string | undefined;
  projectId_month?: string | undefined;
  integrationId_hour?: string | undefined;
  integrationId_day?: string | undefined;
  integrationId_week?: string | undefined;
  integrationId_month?: string | undefined;
  firstMessageTime_hour?: string | undefined;
  firstMessageTime_day?: string | undefined;
  firstMessageTime_week?: string | undefined;
  firstMessageTime_month?: string | undefined;
  type_hour?: string | undefined;
  type_day?: string | undefined;
  type_week?: string | undefined;
  type_month?: string | undefined;
  properties_hour?: string | undefined;
  properties_day?: string | undefined;
  properties_week?: string | undefined;
  properties_month?: string | undefined;
  userProperties_hour?: string | undefined;
  userProperties_day?: string | undefined;
  userProperties_week?: string | undefined;
  userProperties_month?: string | undefined;
  sum_id?: number | undefined;
  sum_userMessageCount?: number | undefined;
  sum_organizationId?: number | undefined;
  sum_projectId?: number | undefined;
  sum_integrationId?: number | undefined;
  sum_firstMessageTime?: number | undefined;
  sum_type?: number | undefined;
  sum_properties?: number | undefined;
  sum_userProperties?: number | undefined;
  count_id?: number | undefined;
  count_userMessageCount?: number | undefined;
  count_organizationId?: number | undefined;
  count_projectId?: number | undefined;
  count_integrationId?: number | undefined;
  count_firstMessageTime?: number | undefined;
  count_type?: number | undefined;
  count_properties?: number | undefined;
  count_userProperties?: number | undefined;
  avg_id?: number | undefined;
  avg_userMessageCount?: number | undefined;
  avg_organizationId?: number | undefined;
  avg_projectId?: number | undefined;
  avg_integrationId?: number | undefined;
  avg_firstMessageTime?: number | undefined;
  avg_type?: number | undefined;
  avg_properties?: number | undefined;
  avg_userProperties?: number | undefined;
  min_id?: number | undefined;
  min_userMessageCount?: number | undefined;
  min_organizationId?: number | undefined;
  min_projectId?: number | undefined;
  min_integrationId?: number | undefined;
  min_firstMessageTime?: number | undefined;
  min_type?: number | undefined;
  min_properties?: number | undefined;
  min_userProperties?: number | undefined;
  max_id?: number | undefined;
  max_userMessageCount?: number | undefined;
  max_organizationId?: number | undefined;
  max_projectId?: number | undefined;
  max_integrationId?: number | undefined;
  max_firstMessageTime?: number | undefined;
  max_type?: number | undefined;
  max_properties?: number | undefined;
  max_userProperties?: number | undefined;
};

/** @internal */
export const ConversationsResultItem$outboundSchema: z.ZodType<
  ConversationsResultItem$Outbound,
  z.ZodTypeDef,
  ConversationsResultItem
> = z.object({
  id: z.string().optional(),
  userMessageCount: z.number().optional(),
  organizationId: z.nullable(z.string()).optional(),
  projectId: z.nullable(z.string()).optional(),
  integrationId: z.nullable(z.string()).optional(),
  firstMessageTime: z.date().transform(v => v.toISOString()).optional(),
  type: z.nullable(QueryConversationsResponseDataType$outboundSchema)
    .optional(),
  properties: z.nullable(z.record(z.any())).optional(),
  userProperties: z.nullable(z.record(z.any())).optional(),
  sum: z.number().optional(),
  count: z.number().optional(),
  avg: z.number().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  idHour: z.string().optional(),
  idDay: z.string().optional(),
  idWeek: z.string().optional(),
  idMonth: z.string().optional(),
  userMessageCountHour: z.string().optional(),
  userMessageCountDay: z.string().optional(),
  userMessageCountWeek: z.string().optional(),
  userMessageCountMonth: z.string().optional(),
  organizationIdHour: z.string().optional(),
  organizationIdDay: z.string().optional(),
  organizationIdWeek: z.string().optional(),
  organizationIdMonth: z.string().optional(),
  projectIdHour: z.string().optional(),
  projectIdDay: z.string().optional(),
  projectIdWeek: z.string().optional(),
  projectIdMonth: z.string().optional(),
  integrationIdHour: z.string().optional(),
  integrationIdDay: z.string().optional(),
  integrationIdWeek: z.string().optional(),
  integrationIdMonth: z.string().optional(),
  firstMessageTimeHour: z.string().optional(),
  firstMessageTimeDay: z.string().optional(),
  firstMessageTimeWeek: z.string().optional(),
  firstMessageTimeMonth: z.string().optional(),
  typeHour: z.string().optional(),
  typeDay: z.string().optional(),
  typeWeek: z.string().optional(),
  typeMonth: z.string().optional(),
  propertiesHour: z.string().optional(),
  propertiesDay: z.string().optional(),
  propertiesWeek: z.string().optional(),
  propertiesMonth: z.string().optional(),
  userPropertiesHour: z.string().optional(),
  userPropertiesDay: z.string().optional(),
  userPropertiesWeek: z.string().optional(),
  userPropertiesMonth: z.string().optional(),
  sumId: z.number().optional(),
  sumUserMessageCount: z.number().optional(),
  sumOrganizationId: z.number().optional(),
  sumProjectId: z.number().optional(),
  sumIntegrationId: z.number().optional(),
  sumFirstMessageTime: z.number().optional(),
  sumType: z.number().optional(),
  sumProperties: z.number().optional(),
  sumUserProperties: z.number().optional(),
  countId: z.number().optional(),
  countUserMessageCount: z.number().optional(),
  countOrganizationId: z.number().optional(),
  countProjectId: z.number().optional(),
  countIntegrationId: z.number().optional(),
  countFirstMessageTime: z.number().optional(),
  countType: z.number().optional(),
  countProperties: z.number().optional(),
  countUserProperties: z.number().optional(),
  avgId: z.number().optional(),
  avgUserMessageCount: z.number().optional(),
  avgOrganizationId: z.number().optional(),
  avgProjectId: z.number().optional(),
  avgIntegrationId: z.number().optional(),
  avgFirstMessageTime: z.number().optional(),
  avgType: z.number().optional(),
  avgProperties: z.number().optional(),
  avgUserProperties: z.number().optional(),
  minId: z.number().optional(),
  minUserMessageCount: z.number().optional(),
  minOrganizationId: z.number().optional(),
  minProjectId: z.number().optional(),
  minIntegrationId: z.number().optional(),
  minFirstMessageTime: z.number().optional(),
  minType: z.number().optional(),
  minProperties: z.number().optional(),
  minUserProperties: z.number().optional(),
  maxId: z.number().optional(),
  maxUserMessageCount: z.number().optional(),
  maxOrganizationId: z.number().optional(),
  maxProjectId: z.number().optional(),
  maxIntegrationId: z.number().optional(),
  maxFirstMessageTime: z.number().optional(),
  maxType: z.number().optional(),
  maxProperties: z.number().optional(),
  maxUserProperties: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    idHour: "id_hour",
    idDay: "id_day",
    idWeek: "id_week",
    idMonth: "id_month",
    userMessageCountHour: "userMessageCount_hour",
    userMessageCountDay: "userMessageCount_day",
    userMessageCountWeek: "userMessageCount_week",
    userMessageCountMonth: "userMessageCount_month",
    organizationIdHour: "organizationId_hour",
    organizationIdDay: "organizationId_day",
    organizationIdWeek: "organizationId_week",
    organizationIdMonth: "organizationId_month",
    projectIdHour: "projectId_hour",
    projectIdDay: "projectId_day",
    projectIdWeek: "projectId_week",
    projectIdMonth: "projectId_month",
    integrationIdHour: "integrationId_hour",
    integrationIdDay: "integrationId_day",
    integrationIdWeek: "integrationId_week",
    integrationIdMonth: "integrationId_month",
    firstMessageTimeHour: "firstMessageTime_hour",
    firstMessageTimeDay: "firstMessageTime_day",
    firstMessageTimeWeek: "firstMessageTime_week",
    firstMessageTimeMonth: "firstMessageTime_month",
    typeHour: "type_hour",
    typeDay: "type_day",
    typeWeek: "type_week",
    typeMonth: "type_month",
    propertiesHour: "properties_hour",
    propertiesDay: "properties_day",
    propertiesWeek: "properties_week",
    propertiesMonth: "properties_month",
    userPropertiesHour: "userProperties_hour",
    userPropertiesDay: "userProperties_day",
    userPropertiesWeek: "userProperties_week",
    userPropertiesMonth: "userProperties_month",
    sumId: "sum_id",
    sumUserMessageCount: "sum_userMessageCount",
    sumOrganizationId: "sum_organizationId",
    sumProjectId: "sum_projectId",
    sumIntegrationId: "sum_integrationId",
    sumFirstMessageTime: "sum_firstMessageTime",
    sumType: "sum_type",
    sumProperties: "sum_properties",
    sumUserProperties: "sum_userProperties",
    countId: "count_id",
    countUserMessageCount: "count_userMessageCount",
    countOrganizationId: "count_organizationId",
    countProjectId: "count_projectId",
    countIntegrationId: "count_integrationId",
    countFirstMessageTime: "count_firstMessageTime",
    countType: "count_type",
    countProperties: "count_properties",
    countUserProperties: "count_userProperties",
    avgId: "avg_id",
    avgUserMessageCount: "avg_userMessageCount",
    avgOrganizationId: "avg_organizationId",
    avgProjectId: "avg_projectId",
    avgIntegrationId: "avg_integrationId",
    avgFirstMessageTime: "avg_firstMessageTime",
    avgType: "avg_type",
    avgProperties: "avg_properties",
    avgUserProperties: "avg_userProperties",
    minId: "min_id",
    minUserMessageCount: "min_userMessageCount",
    minOrganizationId: "min_organizationId",
    minProjectId: "min_projectId",
    minIntegrationId: "min_integrationId",
    minFirstMessageTime: "min_firstMessageTime",
    minType: "min_type",
    minProperties: "min_properties",
    minUserProperties: "min_userProperties",
    maxId: "max_id",
    maxUserMessageCount: "max_userMessageCount",
    maxOrganizationId: "max_organizationId",
    maxProjectId: "max_projectId",
    maxIntegrationId: "max_integrationId",
    maxFirstMessageTime: "max_firstMessageTime",
    maxType: "max_type",
    maxProperties: "max_properties",
    maxUserProperties: "max_userProperties",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsResultItem$ {
  /** @deprecated use `ConversationsResultItem$inboundSchema` instead. */
  export const inboundSchema = ConversationsResultItem$inboundSchema;
  /** @deprecated use `ConversationsResultItem$outboundSchema` instead. */
  export const outboundSchema = ConversationsResultItem$outboundSchema;
  /** @deprecated use `ConversationsResultItem$Outbound` instead. */
  export type Outbound = ConversationsResultItem$Outbound;
}

export function conversationsResultItemToJSON(
  conversationsResultItem: ConversationsResultItem,
): string {
  return JSON.stringify(
    ConversationsResultItem$outboundSchema.parse(conversationsResultItem),
  );
}

export function conversationsResultItemFromJSON(
  jsonString: string,
): SafeParseResult<ConversationsResultItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConversationsResultItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConversationsResultItem' from JSON`,
  );
}

/** @internal */
export const QueryConversationsResponseData$inboundSchema: z.ZodType<
  QueryConversationsResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  result: z.array(z.lazy(() => ConversationsResultItem$inboundSchema)),
  total: z.number(),
  pageSize: z.number(),
  count: z.number(),
});

/** @internal */
export type QueryConversationsResponseData$Outbound = {
  result: Array<ConversationsResultItem$Outbound>;
  total: number;
  pageSize: number;
  count: number;
};

/** @internal */
export const QueryConversationsResponseData$outboundSchema: z.ZodType<
  QueryConversationsResponseData$Outbound,
  z.ZodTypeDef,
  QueryConversationsResponseData
> = z.object({
  result: z.array(z.lazy(() => ConversationsResultItem$outboundSchema)),
  total: z.number(),
  pageSize: z.number(),
  count: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryConversationsResponseData$ {
  /** @deprecated use `QueryConversationsResponseData$inboundSchema` instead. */
  export const inboundSchema = QueryConversationsResponseData$inboundSchema;
  /** @deprecated use `QueryConversationsResponseData$outboundSchema` instead. */
  export const outboundSchema = QueryConversationsResponseData$outboundSchema;
  /** @deprecated use `QueryConversationsResponseData$Outbound` instead. */
  export type Outbound = QueryConversationsResponseData$Outbound;
}

export function queryConversationsResponseDataToJSON(
  queryConversationsResponseData: QueryConversationsResponseData,
): string {
  return JSON.stringify(
    QueryConversationsResponseData$outboundSchema.parse(
      queryConversationsResponseData,
    ),
  );
}

export function queryConversationsResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<QueryConversationsResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QueryConversationsResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QueryConversationsResponseData' from JSON`,
  );
}
