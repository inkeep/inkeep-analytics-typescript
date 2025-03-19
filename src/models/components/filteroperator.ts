/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Available operators for filtering data
 */
export const FilterOperator = {
  Eq: "eq",
  Neq: "neq",
  Gt: "gt",
  Gte: "gte",
  Lt: "lt",
  Lte: "lte",
  In: "in",
  NotIn: "notIn",
  ArrayContains: "arrayContains",
  JsonContains: "jsonContains",
  JsonContainedBy: "jsonContainedBy",
  JsonHasKey: "jsonHasKey",
  JsonHasAnyKey: "jsonHasAnyKey",
  JsonHasAllKeys: "jsonHasAllKeys",
} as const;
/**
 * Available operators for filtering data
 */
export type FilterOperator = ClosedEnum<typeof FilterOperator>;

/** @internal */
export const FilterOperator$inboundSchema: z.ZodNativeEnum<
  typeof FilterOperator
> = z.nativeEnum(FilterOperator);

/** @internal */
export const FilterOperator$outboundSchema: z.ZodNativeEnum<
  typeof FilterOperator
> = FilterOperator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilterOperator$ {
  /** @deprecated use `FilterOperator$inboundSchema` instead. */
  export const inboundSchema = FilterOperator$inboundSchema;
  /** @deprecated use `FilterOperator$outboundSchema` instead. */
  export const outboundSchema = FilterOperator$outboundSchema;
}
