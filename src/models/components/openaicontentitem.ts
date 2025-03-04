/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OpenAIImageUrlObject,
  OpenAIImageUrlObject$inboundSchema,
  OpenAIImageUrlObject$Outbound,
  OpenAIImageUrlObject$outboundSchema,
} from "./openaiimageurlobject.js";

export const OpenAIContentItemType = {
  Text: "text",
  ImageUrl: "image_url",
} as const;
export type OpenAIContentItemType = ClosedEnum<typeof OpenAIContentItemType>;

export type OpenAIContentItem = {
  type: OpenAIContentItemType;
  text?: string | null | undefined;
  imageUrl?: OpenAIImageUrlObject | null | undefined;
};

/** @internal */
export const OpenAIContentItemType$inboundSchema: z.ZodNativeEnum<
  typeof OpenAIContentItemType
> = z.nativeEnum(OpenAIContentItemType);

/** @internal */
export const OpenAIContentItemType$outboundSchema: z.ZodNativeEnum<
  typeof OpenAIContentItemType
> = OpenAIContentItemType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenAIContentItemType$ {
  /** @deprecated use `OpenAIContentItemType$inboundSchema` instead. */
  export const inboundSchema = OpenAIContentItemType$inboundSchema;
  /** @deprecated use `OpenAIContentItemType$outboundSchema` instead. */
  export const outboundSchema = OpenAIContentItemType$outboundSchema;
}

/** @internal */
export const OpenAIContentItem$inboundSchema: z.ZodType<
  OpenAIContentItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: OpenAIContentItemType$inboundSchema,
  text: z.nullable(z.string()).optional(),
  image_url: z.nullable(OpenAIImageUrlObject$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "image_url": "imageUrl",
  });
});

/** @internal */
export type OpenAIContentItem$Outbound = {
  type: string;
  text?: string | null | undefined;
  image_url?: OpenAIImageUrlObject$Outbound | null | undefined;
};

/** @internal */
export const OpenAIContentItem$outboundSchema: z.ZodType<
  OpenAIContentItem$Outbound,
  z.ZodTypeDef,
  OpenAIContentItem
> = z.object({
  type: OpenAIContentItemType$outboundSchema,
  text: z.nullable(z.string()).optional(),
  imageUrl: z.nullable(OpenAIImageUrlObject$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    imageUrl: "image_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenAIContentItem$ {
  /** @deprecated use `OpenAIContentItem$inboundSchema` instead. */
  export const inboundSchema = OpenAIContentItem$inboundSchema;
  /** @deprecated use `OpenAIContentItem$outboundSchema` instead. */
  export const outboundSchema = OpenAIContentItem$outboundSchema;
  /** @deprecated use `OpenAIContentItem$Outbound` instead. */
  export type Outbound = OpenAIContentItem$Outbound;
}

export function openAIContentItemToJSON(
  openAIContentItem: OpenAIContentItem,
): string {
  return JSON.stringify(
    OpenAIContentItem$outboundSchema.parse(openAIContentItem),
  );
}

export function openAIContentItemFromJSON(
  jsonString: string,
): SafeParseResult<OpenAIContentItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OpenAIContentItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OpenAIContentItem' from JSON`,
  );
}
