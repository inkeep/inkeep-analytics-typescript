/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FilterOperator,
  FilterOperator$inboundSchema,
  FilterOperator$outboundSchema,
} from "./filteroperator.js";

export const EventsConditionField12 = {
  SearchQuery: "searchQuery",
} as const;
export type EventsConditionField12 = ClosedEnum<typeof EventsConditionField12>;

export const EventsConditionField11 = {
  ConversationId: "conversationId",
} as const;
export type EventsConditionField11 = ClosedEnum<typeof EventsConditionField11>;

export const EventsConditionField10 = {
  MessageId: "messageId",
} as const;
export type EventsConditionField10 = ClosedEnum<typeof EventsConditionField10>;

export const EventsConditionField9 = {
  UserProperties: "userProperties",
} as const;
export type EventsConditionField9 = ClosedEnum<typeof EventsConditionField9>;

export const EventsConditionField8 = {
  Properties: "properties",
} as const;
export type EventsConditionField8 = ClosedEnum<typeof EventsConditionField8>;

export const EventsConditionField7 = {
  IntegrationId: "integrationId",
} as const;
export type EventsConditionField7 = ClosedEnum<typeof EventsConditionField7>;

export const EventsConditionField6 = {
  ProjectId: "projectId",
} as const;
export type EventsConditionField6 = ClosedEnum<typeof EventsConditionField6>;

export const EventsConditionField5 = {
  OrganizationId: "organizationId",
} as const;
export type EventsConditionField5 = ClosedEnum<typeof EventsConditionField5>;

export const EventsConditionField4 = {
  CreatedAt: "createdAt",
} as const;
export type EventsConditionField4 = ClosedEnum<typeof EventsConditionField4>;

export const EventsConditionField3 = {
  Type: "type",
} as const;
export type EventsConditionField3 = ClosedEnum<typeof EventsConditionField3>;

export const EventsConditionField2 = {
  Id: "id",
} as const;
export type EventsConditionField2 = ClosedEnum<typeof EventsConditionField2>;

export const EventsConditionField1 = {
  EventType: "eventType",
} as const;
export type EventsConditionField1 = ClosedEnum<typeof EventsConditionField1>;

export type EventsConditionField =
  | EventsConditionField1
  | EventsConditionField2
  | EventsConditionField3
  | EventsConditionField4
  | EventsConditionField5
  | EventsConditionField6
  | EventsConditionField7
  | EventsConditionField8
  | EventsConditionField9
  | EventsConditionField10
  | EventsConditionField11
  | EventsConditionField12;

export type Value = string | boolean | number | Array<string>;

export type EventsCondition = {
  field:
    | EventsConditionField1
    | EventsConditionField2
    | EventsConditionField3
    | EventsConditionField4
    | EventsConditionField5
    | EventsConditionField6
    | EventsConditionField7
    | EventsConditionField8
    | EventsConditionField9
    | EventsConditionField10
    | EventsConditionField11
    | EventsConditionField12;
  /**
   * Available Select Operators
   */
  operator: FilterOperator;
  value: string | boolean | number | Array<string>;
};

/** @internal */
export const EventsConditionField12$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField12
> = z.nativeEnum(EventsConditionField12);

/** @internal */
export const EventsConditionField12$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField12
> = EventsConditionField12$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField12$ {
  /** @deprecated use `EventsConditionField12$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField12$inboundSchema;
  /** @deprecated use `EventsConditionField12$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField12$outboundSchema;
}

/** @internal */
export const EventsConditionField11$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField11
> = z.nativeEnum(EventsConditionField11);

/** @internal */
export const EventsConditionField11$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField11
> = EventsConditionField11$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField11$ {
  /** @deprecated use `EventsConditionField11$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField11$inboundSchema;
  /** @deprecated use `EventsConditionField11$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField11$outboundSchema;
}

/** @internal */
export const EventsConditionField10$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField10
> = z.nativeEnum(EventsConditionField10);

/** @internal */
export const EventsConditionField10$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField10
> = EventsConditionField10$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField10$ {
  /** @deprecated use `EventsConditionField10$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField10$inboundSchema;
  /** @deprecated use `EventsConditionField10$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField10$outboundSchema;
}

/** @internal */
export const EventsConditionField9$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField9
> = z.nativeEnum(EventsConditionField9);

/** @internal */
export const EventsConditionField9$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField9
> = EventsConditionField9$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField9$ {
  /** @deprecated use `EventsConditionField9$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField9$inboundSchema;
  /** @deprecated use `EventsConditionField9$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField9$outboundSchema;
}

/** @internal */
export const EventsConditionField8$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField8
> = z.nativeEnum(EventsConditionField8);

/** @internal */
export const EventsConditionField8$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField8
> = EventsConditionField8$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField8$ {
  /** @deprecated use `EventsConditionField8$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField8$inboundSchema;
  /** @deprecated use `EventsConditionField8$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField8$outboundSchema;
}

/** @internal */
export const EventsConditionField7$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField7
> = z.nativeEnum(EventsConditionField7);

/** @internal */
export const EventsConditionField7$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField7
> = EventsConditionField7$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField7$ {
  /** @deprecated use `EventsConditionField7$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField7$inboundSchema;
  /** @deprecated use `EventsConditionField7$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField7$outboundSchema;
}

/** @internal */
export const EventsConditionField6$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField6
> = z.nativeEnum(EventsConditionField6);

/** @internal */
export const EventsConditionField6$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField6
> = EventsConditionField6$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField6$ {
  /** @deprecated use `EventsConditionField6$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField6$inboundSchema;
  /** @deprecated use `EventsConditionField6$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField6$outboundSchema;
}

/** @internal */
export const EventsConditionField5$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField5
> = z.nativeEnum(EventsConditionField5);

/** @internal */
export const EventsConditionField5$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField5
> = EventsConditionField5$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField5$ {
  /** @deprecated use `EventsConditionField5$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField5$inboundSchema;
  /** @deprecated use `EventsConditionField5$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField5$outboundSchema;
}

/** @internal */
export const EventsConditionField4$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField4
> = z.nativeEnum(EventsConditionField4);

/** @internal */
export const EventsConditionField4$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField4
> = EventsConditionField4$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField4$ {
  /** @deprecated use `EventsConditionField4$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField4$inboundSchema;
  /** @deprecated use `EventsConditionField4$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField4$outboundSchema;
}

/** @internal */
export const EventsConditionField3$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField3
> = z.nativeEnum(EventsConditionField3);

/** @internal */
export const EventsConditionField3$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField3
> = EventsConditionField3$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField3$ {
  /** @deprecated use `EventsConditionField3$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField3$inboundSchema;
  /** @deprecated use `EventsConditionField3$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField3$outboundSchema;
}

/** @internal */
export const EventsConditionField2$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField2
> = z.nativeEnum(EventsConditionField2);

/** @internal */
export const EventsConditionField2$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField2
> = EventsConditionField2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField2$ {
  /** @deprecated use `EventsConditionField2$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField2$inboundSchema;
  /** @deprecated use `EventsConditionField2$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField2$outboundSchema;
}

/** @internal */
export const EventsConditionField1$inboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField1
> = z.nativeEnum(EventsConditionField1);

/** @internal */
export const EventsConditionField1$outboundSchema: z.ZodNativeEnum<
  typeof EventsConditionField1
> = EventsConditionField1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField1$ {
  /** @deprecated use `EventsConditionField1$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField1$inboundSchema;
  /** @deprecated use `EventsConditionField1$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField1$outboundSchema;
}

/** @internal */
export const EventsConditionField$inboundSchema: z.ZodType<
  EventsConditionField,
  z.ZodTypeDef,
  unknown
> = z.union([
  EventsConditionField1$inboundSchema,
  EventsConditionField2$inboundSchema,
  EventsConditionField3$inboundSchema,
  EventsConditionField4$inboundSchema,
  EventsConditionField5$inboundSchema,
  EventsConditionField6$inboundSchema,
  EventsConditionField7$inboundSchema,
  EventsConditionField8$inboundSchema,
  EventsConditionField9$inboundSchema,
  EventsConditionField10$inboundSchema,
  EventsConditionField11$inboundSchema,
  EventsConditionField12$inboundSchema,
]);

/** @internal */
export type EventsConditionField$Outbound =
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string;

/** @internal */
export const EventsConditionField$outboundSchema: z.ZodType<
  EventsConditionField$Outbound,
  z.ZodTypeDef,
  EventsConditionField
> = z.union([
  EventsConditionField1$outboundSchema,
  EventsConditionField2$outboundSchema,
  EventsConditionField3$outboundSchema,
  EventsConditionField4$outboundSchema,
  EventsConditionField5$outboundSchema,
  EventsConditionField6$outboundSchema,
  EventsConditionField7$outboundSchema,
  EventsConditionField8$outboundSchema,
  EventsConditionField9$outboundSchema,
  EventsConditionField10$outboundSchema,
  EventsConditionField11$outboundSchema,
  EventsConditionField12$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsConditionField$ {
  /** @deprecated use `EventsConditionField$inboundSchema` instead. */
  export const inboundSchema = EventsConditionField$inboundSchema;
  /** @deprecated use `EventsConditionField$outboundSchema` instead. */
  export const outboundSchema = EventsConditionField$outboundSchema;
  /** @deprecated use `EventsConditionField$Outbound` instead. */
  export type Outbound = EventsConditionField$Outbound;
}

export function eventsConditionFieldToJSON(
  eventsConditionField: EventsConditionField,
): string {
  return JSON.stringify(
    EventsConditionField$outboundSchema.parse(eventsConditionField),
  );
}

export function eventsConditionFieldFromJSON(
  jsonString: string,
): SafeParseResult<EventsConditionField, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventsConditionField$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventsConditionField' from JSON`,
  );
}

/** @internal */
export const Value$inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.boolean(), z.number(), z.array(z.string())]);

/** @internal */
export type Value$Outbound = string | boolean | number | Array<string>;

/** @internal */
export const Value$outboundSchema: z.ZodType<
  Value$Outbound,
  z.ZodTypeDef,
  Value
> = z.union([z.string(), z.boolean(), z.number(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Value$ {
  /** @deprecated use `Value$inboundSchema` instead. */
  export const inboundSchema = Value$inboundSchema;
  /** @deprecated use `Value$outboundSchema` instead. */
  export const outboundSchema = Value$outboundSchema;
  /** @deprecated use `Value$Outbound` instead. */
  export type Outbound = Value$Outbound;
}

export function valueToJSON(value: Value): string {
  return JSON.stringify(Value$outboundSchema.parse(value));
}

export function valueFromJSON(
  jsonString: string,
): SafeParseResult<Value, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Value$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Value' from JSON`,
  );
}

/** @internal */
export const EventsCondition$inboundSchema: z.ZodType<
  EventsCondition,
  z.ZodTypeDef,
  unknown
> = z.object({
  field: z.union([
    EventsConditionField1$inboundSchema,
    EventsConditionField2$inboundSchema,
    EventsConditionField3$inboundSchema,
    EventsConditionField4$inboundSchema,
    EventsConditionField5$inboundSchema,
    EventsConditionField6$inboundSchema,
    EventsConditionField7$inboundSchema,
    EventsConditionField8$inboundSchema,
    EventsConditionField9$inboundSchema,
    EventsConditionField10$inboundSchema,
    EventsConditionField11$inboundSchema,
    EventsConditionField12$inboundSchema,
  ]),
  operator: FilterOperator$inboundSchema,
  value: z.union([z.string(), z.boolean(), z.number(), z.array(z.string())]),
});

/** @internal */
export type EventsCondition$Outbound = {
  field:
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string;
  operator: string;
  value: string | boolean | number | Array<string>;
};

/** @internal */
export const EventsCondition$outboundSchema: z.ZodType<
  EventsCondition$Outbound,
  z.ZodTypeDef,
  EventsCondition
> = z.object({
  field: z.union([
    EventsConditionField1$outboundSchema,
    EventsConditionField2$outboundSchema,
    EventsConditionField3$outboundSchema,
    EventsConditionField4$outboundSchema,
    EventsConditionField5$outboundSchema,
    EventsConditionField6$outboundSchema,
    EventsConditionField7$outboundSchema,
    EventsConditionField8$outboundSchema,
    EventsConditionField9$outboundSchema,
    EventsConditionField10$outboundSchema,
    EventsConditionField11$outboundSchema,
    EventsConditionField12$outboundSchema,
  ]),
  operator: FilterOperator$outboundSchema,
  value: z.union([z.string(), z.boolean(), z.number(), z.array(z.string())]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsCondition$ {
  /** @deprecated use `EventsCondition$inboundSchema` instead. */
  export const inboundSchema = EventsCondition$inboundSchema;
  /** @deprecated use `EventsCondition$outboundSchema` instead. */
  export const outboundSchema = EventsCondition$outboundSchema;
  /** @deprecated use `EventsCondition$Outbound` instead. */
  export type Outbound = EventsCondition$Outbound;
}

export function eventsConditionToJSON(
  eventsCondition: EventsCondition,
): string {
  return JSON.stringify(EventsCondition$outboundSchema.parse(eventsCondition));
}

export function eventsConditionFromJSON(
  jsonString: string,
): SafeParseResult<EventsCondition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventsCondition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventsCondition' from JSON`,
  );
}
