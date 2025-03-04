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

export const EventsSimpleFieldSelectionField12 = {
  SearchQuery: "searchQuery",
} as const;
export type EventsSimpleFieldSelectionField12 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField12
>;

export const EventsSimpleFieldSelectionField11 = {
  ConversationId: "conversationId",
} as const;
export type EventsSimpleFieldSelectionField11 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField11
>;

export const EventsSimpleFieldSelectionField10 = {
  MessageId: "messageId",
} as const;
export type EventsSimpleFieldSelectionField10 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField10
>;

export const EventsSimpleFieldSelectionField9 = {
  UserProperties: "userProperties",
} as const;
export type EventsSimpleFieldSelectionField9 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField9
>;

export const EventsSimpleFieldSelectionField8 = {
  Properties: "properties",
} as const;
export type EventsSimpleFieldSelectionField8 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField8
>;

export const EventsSimpleFieldSelectionField7 = {
  IntegrationId: "integrationId",
} as const;
export type EventsSimpleFieldSelectionField7 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField7
>;

export const EventsSimpleFieldSelectionField6 = {
  ProjectId: "projectId",
} as const;
export type EventsSimpleFieldSelectionField6 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField6
>;

export const EventsSimpleFieldSelectionField5 = {
  OrganizationId: "organizationId",
} as const;
export type EventsSimpleFieldSelectionField5 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField5
>;

export const EventsSimpleFieldSelectionField4 = {
  CreatedAt: "createdAt",
} as const;
export type EventsSimpleFieldSelectionField4 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField4
>;

export const EventsSimpleFieldSelectionField3 = {
  Type: "type",
} as const;
export type EventsSimpleFieldSelectionField3 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField3
>;

export const EventsSimpleFieldSelectionField2 = {
  Id: "id",
} as const;
export type EventsSimpleFieldSelectionField2 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField2
>;

export const EventsSimpleFieldSelectionField1 = {
  EventType: "eventType",
} as const;
export type EventsSimpleFieldSelectionField1 = ClosedEnum<
  typeof EventsSimpleFieldSelectionField1
>;

export type EventsSimpleFieldSelectionField =
  | EventsSimpleFieldSelectionField1
  | EventsSimpleFieldSelectionField2
  | EventsSimpleFieldSelectionField3
  | EventsSimpleFieldSelectionField4
  | EventsSimpleFieldSelectionField5
  | EventsSimpleFieldSelectionField6
  | EventsSimpleFieldSelectionField7
  | EventsSimpleFieldSelectionField8
  | EventsSimpleFieldSelectionField9
  | EventsSimpleFieldSelectionField10
  | EventsSimpleFieldSelectionField11
  | EventsSimpleFieldSelectionField12;

export type EventsSimpleFieldSelection = {
  type: EventsSimpleFieldSelectionType;
  field:
    | EventsSimpleFieldSelectionField1
    | EventsSimpleFieldSelectionField2
    | EventsSimpleFieldSelectionField3
    | EventsSimpleFieldSelectionField4
    | EventsSimpleFieldSelectionField5
    | EventsSimpleFieldSelectionField6
    | EventsSimpleFieldSelectionField7
    | EventsSimpleFieldSelectionField8
    | EventsSimpleFieldSelectionField9
    | EventsSimpleFieldSelectionField10
    | EventsSimpleFieldSelectionField11
    | EventsSimpleFieldSelectionField12;
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
export const EventsSimpleFieldSelectionField12$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField12
> = z.nativeEnum(EventsSimpleFieldSelectionField12);

/** @internal */
export const EventsSimpleFieldSelectionField12$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField12
> = EventsSimpleFieldSelectionField12$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField12$ {
  /** @deprecated use `EventsSimpleFieldSelectionField12$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField12$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField12$outboundSchema` instead. */
  export const outboundSchema =
    EventsSimpleFieldSelectionField12$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField11$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField11
> = z.nativeEnum(EventsSimpleFieldSelectionField11);

/** @internal */
export const EventsSimpleFieldSelectionField11$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField11
> = EventsSimpleFieldSelectionField11$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField11$ {
  /** @deprecated use `EventsSimpleFieldSelectionField11$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField11$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField11$outboundSchema` instead. */
  export const outboundSchema =
    EventsSimpleFieldSelectionField11$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField10$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField10
> = z.nativeEnum(EventsSimpleFieldSelectionField10);

/** @internal */
export const EventsSimpleFieldSelectionField10$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField10
> = EventsSimpleFieldSelectionField10$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField10$ {
  /** @deprecated use `EventsSimpleFieldSelectionField10$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField10$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField10$outboundSchema` instead. */
  export const outboundSchema =
    EventsSimpleFieldSelectionField10$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField9$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField9
> = z.nativeEnum(EventsSimpleFieldSelectionField9);

/** @internal */
export const EventsSimpleFieldSelectionField9$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField9
> = EventsSimpleFieldSelectionField9$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField9$ {
  /** @deprecated use `EventsSimpleFieldSelectionField9$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField9$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField9$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField9$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField8$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField8
> = z.nativeEnum(EventsSimpleFieldSelectionField8);

/** @internal */
export const EventsSimpleFieldSelectionField8$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField8
> = EventsSimpleFieldSelectionField8$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField8$ {
  /** @deprecated use `EventsSimpleFieldSelectionField8$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField8$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField8$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField8$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField7$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField7
> = z.nativeEnum(EventsSimpleFieldSelectionField7);

/** @internal */
export const EventsSimpleFieldSelectionField7$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField7
> = EventsSimpleFieldSelectionField7$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField7$ {
  /** @deprecated use `EventsSimpleFieldSelectionField7$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField7$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField7$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField7$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField6$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField6
> = z.nativeEnum(EventsSimpleFieldSelectionField6);

/** @internal */
export const EventsSimpleFieldSelectionField6$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField6
> = EventsSimpleFieldSelectionField6$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField6$ {
  /** @deprecated use `EventsSimpleFieldSelectionField6$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField6$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField6$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField6$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField5$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField5
> = z.nativeEnum(EventsSimpleFieldSelectionField5);

/** @internal */
export const EventsSimpleFieldSelectionField5$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField5
> = EventsSimpleFieldSelectionField5$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField5$ {
  /** @deprecated use `EventsSimpleFieldSelectionField5$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField5$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField5$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField5$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField4$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField4
> = z.nativeEnum(EventsSimpleFieldSelectionField4);

/** @internal */
export const EventsSimpleFieldSelectionField4$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField4
> = EventsSimpleFieldSelectionField4$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField4$ {
  /** @deprecated use `EventsSimpleFieldSelectionField4$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField4$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField4$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField4$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField3$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField3
> = z.nativeEnum(EventsSimpleFieldSelectionField3);

/** @internal */
export const EventsSimpleFieldSelectionField3$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField3
> = EventsSimpleFieldSelectionField3$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField3$ {
  /** @deprecated use `EventsSimpleFieldSelectionField3$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField3$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField3$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField3$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField2$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField2
> = z.nativeEnum(EventsSimpleFieldSelectionField2);

/** @internal */
export const EventsSimpleFieldSelectionField2$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField2
> = EventsSimpleFieldSelectionField2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField2$ {
  /** @deprecated use `EventsSimpleFieldSelectionField2$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField2$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField2$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField2$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField1$inboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField1
> = z.nativeEnum(EventsSimpleFieldSelectionField1);

/** @internal */
export const EventsSimpleFieldSelectionField1$outboundSchema: z.ZodNativeEnum<
  typeof EventsSimpleFieldSelectionField1
> = EventsSimpleFieldSelectionField1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField1$ {
  /** @deprecated use `EventsSimpleFieldSelectionField1$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField1$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField1$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField1$outboundSchema;
}

/** @internal */
export const EventsSimpleFieldSelectionField$inboundSchema: z.ZodType<
  EventsSimpleFieldSelectionField,
  z.ZodTypeDef,
  unknown
> = z.union([
  EventsSimpleFieldSelectionField1$inboundSchema,
  EventsSimpleFieldSelectionField2$inboundSchema,
  EventsSimpleFieldSelectionField3$inboundSchema,
  EventsSimpleFieldSelectionField4$inboundSchema,
  EventsSimpleFieldSelectionField5$inboundSchema,
  EventsSimpleFieldSelectionField6$inboundSchema,
  EventsSimpleFieldSelectionField7$inboundSchema,
  EventsSimpleFieldSelectionField8$inboundSchema,
  EventsSimpleFieldSelectionField9$inboundSchema,
  EventsSimpleFieldSelectionField10$inboundSchema,
  EventsSimpleFieldSelectionField11$inboundSchema,
  EventsSimpleFieldSelectionField12$inboundSchema,
]);

/** @internal */
export type EventsSimpleFieldSelectionField$Outbound =
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
export const EventsSimpleFieldSelectionField$outboundSchema: z.ZodType<
  EventsSimpleFieldSelectionField$Outbound,
  z.ZodTypeDef,
  EventsSimpleFieldSelectionField
> = z.union([
  EventsSimpleFieldSelectionField1$outboundSchema,
  EventsSimpleFieldSelectionField2$outboundSchema,
  EventsSimpleFieldSelectionField3$outboundSchema,
  EventsSimpleFieldSelectionField4$outboundSchema,
  EventsSimpleFieldSelectionField5$outboundSchema,
  EventsSimpleFieldSelectionField6$outboundSchema,
  EventsSimpleFieldSelectionField7$outboundSchema,
  EventsSimpleFieldSelectionField8$outboundSchema,
  EventsSimpleFieldSelectionField9$outboundSchema,
  EventsSimpleFieldSelectionField10$outboundSchema,
  EventsSimpleFieldSelectionField11$outboundSchema,
  EventsSimpleFieldSelectionField12$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsSimpleFieldSelectionField$ {
  /** @deprecated use `EventsSimpleFieldSelectionField$inboundSchema` instead. */
  export const inboundSchema = EventsSimpleFieldSelectionField$inboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField$outboundSchema` instead. */
  export const outboundSchema = EventsSimpleFieldSelectionField$outboundSchema;
  /** @deprecated use `EventsSimpleFieldSelectionField$Outbound` instead. */
  export type Outbound = EventsSimpleFieldSelectionField$Outbound;
}

export function eventsSimpleFieldSelectionFieldToJSON(
  eventsSimpleFieldSelectionField: EventsSimpleFieldSelectionField,
): string {
  return JSON.stringify(
    EventsSimpleFieldSelectionField$outboundSchema.parse(
      eventsSimpleFieldSelectionField,
    ),
  );
}

export function eventsSimpleFieldSelectionFieldFromJSON(
  jsonString: string,
): SafeParseResult<EventsSimpleFieldSelectionField, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventsSimpleFieldSelectionField$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventsSimpleFieldSelectionField' from JSON`,
  );
}

/** @internal */
export const EventsSimpleFieldSelection$inboundSchema: z.ZodType<
  EventsSimpleFieldSelection,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: EventsSimpleFieldSelectionType$inboundSchema,
  field: z.union([
    EventsSimpleFieldSelectionField1$inboundSchema,
    EventsSimpleFieldSelectionField2$inboundSchema,
    EventsSimpleFieldSelectionField3$inboundSchema,
    EventsSimpleFieldSelectionField4$inboundSchema,
    EventsSimpleFieldSelectionField5$inboundSchema,
    EventsSimpleFieldSelectionField6$inboundSchema,
    EventsSimpleFieldSelectionField7$inboundSchema,
    EventsSimpleFieldSelectionField8$inboundSchema,
    EventsSimpleFieldSelectionField9$inboundSchema,
    EventsSimpleFieldSelectionField10$inboundSchema,
    EventsSimpleFieldSelectionField11$inboundSchema,
    EventsSimpleFieldSelectionField12$inboundSchema,
  ]),
});

/** @internal */
export type EventsSimpleFieldSelection$Outbound = {
  type: string;
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
};

/** @internal */
export const EventsSimpleFieldSelection$outboundSchema: z.ZodType<
  EventsSimpleFieldSelection$Outbound,
  z.ZodTypeDef,
  EventsSimpleFieldSelection
> = z.object({
  type: EventsSimpleFieldSelectionType$outboundSchema,
  field: z.union([
    EventsSimpleFieldSelectionField1$outboundSchema,
    EventsSimpleFieldSelectionField2$outboundSchema,
    EventsSimpleFieldSelectionField3$outboundSchema,
    EventsSimpleFieldSelectionField4$outboundSchema,
    EventsSimpleFieldSelectionField5$outboundSchema,
    EventsSimpleFieldSelectionField6$outboundSchema,
    EventsSimpleFieldSelectionField7$outboundSchema,
    EventsSimpleFieldSelectionField8$outboundSchema,
    EventsSimpleFieldSelectionField9$outboundSchema,
    EventsSimpleFieldSelectionField10$outboundSchema,
    EventsSimpleFieldSelectionField11$outboundSchema,
    EventsSimpleFieldSelectionField12$outboundSchema,
  ]),
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
