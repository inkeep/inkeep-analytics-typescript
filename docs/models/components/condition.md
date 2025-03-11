# Condition

## Example Usage

```typescript
import { Condition } from "@inkeep/inkeep-analytics/models/components";

let value: Condition = {
  field: "organizationId",
  operator: "lte",
  value: 2378.93,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `field`                                                                        | [components.ConversationsField](../../models/components/conversationsfield.md) | :heavy_check_mark:                                                             | Available fields for Conversations                                             |
| `operator`                                                                     | [components.FilterOperator](../../models/components/filteroperator.md)         | :heavy_check_mark:                                                             | Available operators for filtering data                                         |
| `value`                                                                        | *components.ConversationsFilterConditionValue*                                 | :heavy_check_mark:                                                             | The value to compare the field against                                         |