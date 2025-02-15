/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ConversationsTimeBasedGroupBySelectionType = {
  Time: "time",
} as const;
export type ConversationsTimeBasedGroupBySelectionType = ClosedEnum<
  typeof ConversationsTimeBasedGroupBySelectionType
>;

export const TimeUnit4 = {
  Month: "month",
} as const;
export type TimeUnit4 = ClosedEnum<typeof TimeUnit4>;

export const TimeUnit3 = {
  Week: "week",
} as const;
export type TimeUnit3 = ClosedEnum<typeof TimeUnit3>;

export const TimeUnit2 = {
  Day: "day",
} as const;
export type TimeUnit2 = ClosedEnum<typeof TimeUnit2>;

export const TimeUnit1 = {
  Hour: "hour",
} as const;
export type TimeUnit1 = ClosedEnum<typeof TimeUnit1>;

/**
 * Available Time Units
 */
export type TimeUnit = TimeUnit1 | TimeUnit2 | TimeUnit3 | TimeUnit4;

export const Field7 = {
  Type: "type",
} as const;
export type Field7 = ClosedEnum<typeof Field7>;

export const Field6 = {
  FirstMessageTime: "firstMessageTime",
} as const;
export type Field6 = ClosedEnum<typeof Field6>;

export const ConversationsTimeBasedGroupBySelectionField5 = {
  IntegrationId: "integrationId",
} as const;
export type ConversationsTimeBasedGroupBySelectionField5 = ClosedEnum<
  typeof ConversationsTimeBasedGroupBySelectionField5
>;

export const ConversationsTimeBasedGroupBySelectionField4 = {
  ProjectId: "projectId",
} as const;
export type ConversationsTimeBasedGroupBySelectionField4 = ClosedEnum<
  typeof ConversationsTimeBasedGroupBySelectionField4
>;

export const ConversationsTimeBasedGroupBySelectionField3 = {
  OrganizationId: "organizationId",
} as const;
export type ConversationsTimeBasedGroupBySelectionField3 = ClosedEnum<
  typeof ConversationsTimeBasedGroupBySelectionField3
>;

export const ConversationsTimeBasedGroupBySelectionField2 = {
  UserMessageCount: "userMessageCount",
} as const;
export type ConversationsTimeBasedGroupBySelectionField2 = ClosedEnum<
  typeof ConversationsTimeBasedGroupBySelectionField2
>;

export const ConversationsTimeBasedGroupBySelectionField1 = {
  Id: "id",
} as const;
export type ConversationsTimeBasedGroupBySelectionField1 = ClosedEnum<
  typeof ConversationsTimeBasedGroupBySelectionField1
>;

export type ConversationsTimeBasedGroupBySelectionField =
  | ConversationsTimeBasedGroupBySelectionField1
  | ConversationsTimeBasedGroupBySelectionField2
  | ConversationsTimeBasedGroupBySelectionField3
  | ConversationsTimeBasedGroupBySelectionField4
  | ConversationsTimeBasedGroupBySelectionField5
  | Field6
  | Field7;

export type ConversationsTimeBasedGroupBySelection = {
  type: ConversationsTimeBasedGroupBySelectionType;
  /**
   * Available Time Units
   */
  timeUnit: TimeUnit1 | TimeUnit2 | TimeUnit3 | TimeUnit4;
  field:
    | ConversationsTimeBasedGroupBySelectionField1
    | ConversationsTimeBasedGroupBySelectionField2
    | ConversationsTimeBasedGroupBySelectionField3
    | ConversationsTimeBasedGroupBySelectionField4
    | ConversationsTimeBasedGroupBySelectionField5
    | Field6
    | Field7;
};

/** @internal */
export const ConversationsTimeBasedGroupBySelectionType$inboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionType> = z
    .nativeEnum(ConversationsTimeBasedGroupBySelectionType);

/** @internal */
export const ConversationsTimeBasedGroupBySelectionType$outboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionType> =
    ConversationsTimeBasedGroupBySelectionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsTimeBasedGroupBySelectionType$ {
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionType$inboundSchema` instead. */
  export const inboundSchema =
    ConversationsTimeBasedGroupBySelectionType$inboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionType$outboundSchema` instead. */
  export const outboundSchema =
    ConversationsTimeBasedGroupBySelectionType$outboundSchema;
}

/** @internal */
export const TimeUnit4$inboundSchema: z.ZodNativeEnum<typeof TimeUnit4> = z
  .nativeEnum(TimeUnit4);

/** @internal */
export const TimeUnit4$outboundSchema: z.ZodNativeEnum<typeof TimeUnit4> =
  TimeUnit4$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeUnit4$ {
  /** @deprecated use `TimeUnit4$inboundSchema` instead. */
  export const inboundSchema = TimeUnit4$inboundSchema;
  /** @deprecated use `TimeUnit4$outboundSchema` instead. */
  export const outboundSchema = TimeUnit4$outboundSchema;
}

/** @internal */
export const TimeUnit3$inboundSchema: z.ZodNativeEnum<typeof TimeUnit3> = z
  .nativeEnum(TimeUnit3);

/** @internal */
export const TimeUnit3$outboundSchema: z.ZodNativeEnum<typeof TimeUnit3> =
  TimeUnit3$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeUnit3$ {
  /** @deprecated use `TimeUnit3$inboundSchema` instead. */
  export const inboundSchema = TimeUnit3$inboundSchema;
  /** @deprecated use `TimeUnit3$outboundSchema` instead. */
  export const outboundSchema = TimeUnit3$outboundSchema;
}

/** @internal */
export const TimeUnit2$inboundSchema: z.ZodNativeEnum<typeof TimeUnit2> = z
  .nativeEnum(TimeUnit2);

/** @internal */
export const TimeUnit2$outboundSchema: z.ZodNativeEnum<typeof TimeUnit2> =
  TimeUnit2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeUnit2$ {
  /** @deprecated use `TimeUnit2$inboundSchema` instead. */
  export const inboundSchema = TimeUnit2$inboundSchema;
  /** @deprecated use `TimeUnit2$outboundSchema` instead. */
  export const outboundSchema = TimeUnit2$outboundSchema;
}

/** @internal */
export const TimeUnit1$inboundSchema: z.ZodNativeEnum<typeof TimeUnit1> = z
  .nativeEnum(TimeUnit1);

/** @internal */
export const TimeUnit1$outboundSchema: z.ZodNativeEnum<typeof TimeUnit1> =
  TimeUnit1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeUnit1$ {
  /** @deprecated use `TimeUnit1$inboundSchema` instead. */
  export const inboundSchema = TimeUnit1$inboundSchema;
  /** @deprecated use `TimeUnit1$outboundSchema` instead. */
  export const outboundSchema = TimeUnit1$outboundSchema;
}

/** @internal */
export const TimeUnit$inboundSchema: z.ZodType<
  TimeUnit,
  z.ZodTypeDef,
  unknown
> = z.union([
  TimeUnit1$inboundSchema,
  TimeUnit2$inboundSchema,
  TimeUnit3$inboundSchema,
  TimeUnit4$inboundSchema,
]);

/** @internal */
export type TimeUnit$Outbound = string | string | string | string;

/** @internal */
export const TimeUnit$outboundSchema: z.ZodType<
  TimeUnit$Outbound,
  z.ZodTypeDef,
  TimeUnit
> = z.union([
  TimeUnit1$outboundSchema,
  TimeUnit2$outboundSchema,
  TimeUnit3$outboundSchema,
  TimeUnit4$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeUnit$ {
  /** @deprecated use `TimeUnit$inboundSchema` instead. */
  export const inboundSchema = TimeUnit$inboundSchema;
  /** @deprecated use `TimeUnit$outboundSchema` instead. */
  export const outboundSchema = TimeUnit$outboundSchema;
  /** @deprecated use `TimeUnit$Outbound` instead. */
  export type Outbound = TimeUnit$Outbound;
}

export function timeUnitToJSON(timeUnit: TimeUnit): string {
  return JSON.stringify(TimeUnit$outboundSchema.parse(timeUnit));
}

export function timeUnitFromJSON(
  jsonString: string,
): SafeParseResult<TimeUnit, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TimeUnit$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TimeUnit' from JSON`,
  );
}

/** @internal */
export const Field7$inboundSchema: z.ZodNativeEnum<typeof Field7> = z
  .nativeEnum(Field7);

/** @internal */
export const Field7$outboundSchema: z.ZodNativeEnum<typeof Field7> =
  Field7$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Field7$ {
  /** @deprecated use `Field7$inboundSchema` instead. */
  export const inboundSchema = Field7$inboundSchema;
  /** @deprecated use `Field7$outboundSchema` instead. */
  export const outboundSchema = Field7$outboundSchema;
}

/** @internal */
export const Field6$inboundSchema: z.ZodNativeEnum<typeof Field6> = z
  .nativeEnum(Field6);

/** @internal */
export const Field6$outboundSchema: z.ZodNativeEnum<typeof Field6> =
  Field6$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Field6$ {
  /** @deprecated use `Field6$inboundSchema` instead. */
  export const inboundSchema = Field6$inboundSchema;
  /** @deprecated use `Field6$outboundSchema` instead. */
  export const outboundSchema = Field6$outboundSchema;
}

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField5$inboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField5> = z
    .nativeEnum(ConversationsTimeBasedGroupBySelectionField5);

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField5$outboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField5> =
    ConversationsTimeBasedGroupBySelectionField5$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsTimeBasedGroupBySelectionField5$ {
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField5$inboundSchema` instead. */
  export const inboundSchema =
    ConversationsTimeBasedGroupBySelectionField5$inboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField5$outboundSchema` instead. */
  export const outboundSchema =
    ConversationsTimeBasedGroupBySelectionField5$outboundSchema;
}

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField4$inboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField4> = z
    .nativeEnum(ConversationsTimeBasedGroupBySelectionField4);

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField4$outboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField4> =
    ConversationsTimeBasedGroupBySelectionField4$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsTimeBasedGroupBySelectionField4$ {
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField4$inboundSchema` instead. */
  export const inboundSchema =
    ConversationsTimeBasedGroupBySelectionField4$inboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField4$outboundSchema` instead. */
  export const outboundSchema =
    ConversationsTimeBasedGroupBySelectionField4$outboundSchema;
}

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField3$inboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField3> = z
    .nativeEnum(ConversationsTimeBasedGroupBySelectionField3);

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField3$outboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField3> =
    ConversationsTimeBasedGroupBySelectionField3$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsTimeBasedGroupBySelectionField3$ {
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField3$inboundSchema` instead. */
  export const inboundSchema =
    ConversationsTimeBasedGroupBySelectionField3$inboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField3$outboundSchema` instead. */
  export const outboundSchema =
    ConversationsTimeBasedGroupBySelectionField3$outboundSchema;
}

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField2$inboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField2> = z
    .nativeEnum(ConversationsTimeBasedGroupBySelectionField2);

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField2$outboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField2> =
    ConversationsTimeBasedGroupBySelectionField2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsTimeBasedGroupBySelectionField2$ {
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField2$inboundSchema` instead. */
  export const inboundSchema =
    ConversationsTimeBasedGroupBySelectionField2$inboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField2$outboundSchema` instead. */
  export const outboundSchema =
    ConversationsTimeBasedGroupBySelectionField2$outboundSchema;
}

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField1$inboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField1> = z
    .nativeEnum(ConversationsTimeBasedGroupBySelectionField1);

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField1$outboundSchema:
  z.ZodNativeEnum<typeof ConversationsTimeBasedGroupBySelectionField1> =
    ConversationsTimeBasedGroupBySelectionField1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsTimeBasedGroupBySelectionField1$ {
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField1$inboundSchema` instead. */
  export const inboundSchema =
    ConversationsTimeBasedGroupBySelectionField1$inboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField1$outboundSchema` instead. */
  export const outboundSchema =
    ConversationsTimeBasedGroupBySelectionField1$outboundSchema;
}

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField$inboundSchema:
  z.ZodType<
    ConversationsTimeBasedGroupBySelectionField,
    z.ZodTypeDef,
    unknown
  > = z.union([
    ConversationsTimeBasedGroupBySelectionField1$inboundSchema,
    ConversationsTimeBasedGroupBySelectionField2$inboundSchema,
    ConversationsTimeBasedGroupBySelectionField3$inboundSchema,
    ConversationsTimeBasedGroupBySelectionField4$inboundSchema,
    ConversationsTimeBasedGroupBySelectionField5$inboundSchema,
    Field6$inboundSchema,
    Field7$inboundSchema,
  ]);

/** @internal */
export type ConversationsTimeBasedGroupBySelectionField$Outbound =
  | string
  | string
  | string
  | string
  | string
  | string
  | string;

/** @internal */
export const ConversationsTimeBasedGroupBySelectionField$outboundSchema:
  z.ZodType<
    ConversationsTimeBasedGroupBySelectionField$Outbound,
    z.ZodTypeDef,
    ConversationsTimeBasedGroupBySelectionField
  > = z.union([
    ConversationsTimeBasedGroupBySelectionField1$outboundSchema,
    ConversationsTimeBasedGroupBySelectionField2$outboundSchema,
    ConversationsTimeBasedGroupBySelectionField3$outboundSchema,
    ConversationsTimeBasedGroupBySelectionField4$outboundSchema,
    ConversationsTimeBasedGroupBySelectionField5$outboundSchema,
    Field6$outboundSchema,
    Field7$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsTimeBasedGroupBySelectionField$ {
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField$inboundSchema` instead. */
  export const inboundSchema =
    ConversationsTimeBasedGroupBySelectionField$inboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField$outboundSchema` instead. */
  export const outboundSchema =
    ConversationsTimeBasedGroupBySelectionField$outboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelectionField$Outbound` instead. */
  export type Outbound = ConversationsTimeBasedGroupBySelectionField$Outbound;
}

export function conversationsTimeBasedGroupBySelectionFieldToJSON(
  conversationsTimeBasedGroupBySelectionField:
    ConversationsTimeBasedGroupBySelectionField,
): string {
  return JSON.stringify(
    ConversationsTimeBasedGroupBySelectionField$outboundSchema.parse(
      conversationsTimeBasedGroupBySelectionField,
    ),
  );
}

export function conversationsTimeBasedGroupBySelectionFieldFromJSON(
  jsonString: string,
): SafeParseResult<
  ConversationsTimeBasedGroupBySelectionField,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ConversationsTimeBasedGroupBySelectionField$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ConversationsTimeBasedGroupBySelectionField' from JSON`,
  );
}

/** @internal */
export const ConversationsTimeBasedGroupBySelection$inboundSchema: z.ZodType<
  ConversationsTimeBasedGroupBySelection,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ConversationsTimeBasedGroupBySelectionType$inboundSchema,
  timeUnit: z.union([
    TimeUnit1$inboundSchema,
    TimeUnit2$inboundSchema,
    TimeUnit3$inboundSchema,
    TimeUnit4$inboundSchema,
  ]),
  field: z.union([
    ConversationsTimeBasedGroupBySelectionField1$inboundSchema,
    ConversationsTimeBasedGroupBySelectionField2$inboundSchema,
    ConversationsTimeBasedGroupBySelectionField3$inboundSchema,
    ConversationsTimeBasedGroupBySelectionField4$inboundSchema,
    ConversationsTimeBasedGroupBySelectionField5$inboundSchema,
    Field6$inboundSchema,
    Field7$inboundSchema,
  ]),
});

/** @internal */
export type ConversationsTimeBasedGroupBySelection$Outbound = {
  type: string;
  timeUnit: string | string | string | string;
  field: string | string | string | string | string | string | string;
};

/** @internal */
export const ConversationsTimeBasedGroupBySelection$outboundSchema: z.ZodType<
  ConversationsTimeBasedGroupBySelection$Outbound,
  z.ZodTypeDef,
  ConversationsTimeBasedGroupBySelection
> = z.object({
  type: ConversationsTimeBasedGroupBySelectionType$outboundSchema,
  timeUnit: z.union([
    TimeUnit1$outboundSchema,
    TimeUnit2$outboundSchema,
    TimeUnit3$outboundSchema,
    TimeUnit4$outboundSchema,
  ]),
  field: z.union([
    ConversationsTimeBasedGroupBySelectionField1$outboundSchema,
    ConversationsTimeBasedGroupBySelectionField2$outboundSchema,
    ConversationsTimeBasedGroupBySelectionField3$outboundSchema,
    ConversationsTimeBasedGroupBySelectionField4$outboundSchema,
    ConversationsTimeBasedGroupBySelectionField5$outboundSchema,
    Field6$outboundSchema,
    Field7$outboundSchema,
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConversationsTimeBasedGroupBySelection$ {
  /** @deprecated use `ConversationsTimeBasedGroupBySelection$inboundSchema` instead. */
  export const inboundSchema =
    ConversationsTimeBasedGroupBySelection$inboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelection$outboundSchema` instead. */
  export const outboundSchema =
    ConversationsTimeBasedGroupBySelection$outboundSchema;
  /** @deprecated use `ConversationsTimeBasedGroupBySelection$Outbound` instead. */
  export type Outbound = ConversationsTimeBasedGroupBySelection$Outbound;
}

export function conversationsTimeBasedGroupBySelectionToJSON(
  conversationsTimeBasedGroupBySelection:
    ConversationsTimeBasedGroupBySelection,
): string {
  return JSON.stringify(
    ConversationsTimeBasedGroupBySelection$outboundSchema.parse(
      conversationsTimeBasedGroupBySelection,
    ),
  );
}

export function conversationsTimeBasedGroupBySelectionFromJSON(
  jsonString: string,
): SafeParseResult<ConversationsTimeBasedGroupBySelection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ConversationsTimeBasedGroupBySelection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConversationsTimeBasedGroupBySelection' from JSON`,
  );
}
