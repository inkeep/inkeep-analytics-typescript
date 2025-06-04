# SemanticThreadFilterConditionCondition

## Example Usage

```typescript
import { SemanticThreadFilterConditionCondition } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadFilterConditionCondition = {
  field: "integrationId",
  operator: "jsonContains",
  value: 1761.69,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                       | [components.SemanticThreadField](../../models/components/semanticthreadfield.md)                              | :heavy_check_mark:                                                                                            | Available fields for SemanticThread                                                                           |
| `operator`                                                                                                    | [components.FilterOperator](../../models/components/filteroperator.md)                                        | :heavy_check_mark:                                                                                            | Available operators for filtering data                                                                        |
| `value`                                                                                                       | *any*                                                                                                         | :heavy_check_mark:                                                                                            | The value to compare the field against. For JSON fields, can be either a JSON object or a {path, value} pair. |