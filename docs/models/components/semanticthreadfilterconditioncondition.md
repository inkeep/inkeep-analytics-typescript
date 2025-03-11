# SemanticThreadFilterConditionCondition

## Example Usage

```typescript
import { SemanticThreadFilterConditionCondition } from "@inkeep/inkeep-analytics/models/components";

let value: SemanticThreadFilterConditionCondition = {
  field: "isInitialQuestionAnswer",
  operator: "notIn",
  value: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `field`                                                                          | [components.SemanticThreadField](../../models/components/semanticthreadfield.md) | :heavy_check_mark:                                                               | Available fields for SemanticThread                                              |
| `operator`                                                                       | [components.FilterOperator](../../models/components/filteroperator.md)           | :heavy_check_mark:                                                               | Available operators for filtering data                                           |
| `value`                                                                          | *components.SemanticThreadFilterConditionValue*                                  | :heavy_check_mark:                                                               | The value to compare the field against                                           |