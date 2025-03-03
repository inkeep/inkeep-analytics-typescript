# ConversationsFilterCondition

## Example Usage

```typescript
import { ConversationsFilterCondition } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsFilterCondition = {
  field: "integrationId",
  operator: "eq",
  value: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `field`                                                                | *components.ConversationsFilterField*                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `operator`                                                             | [components.FilterOperator](../../models/components/filteroperator.md) | :heavy_check_mark:                                                     | Available Select Operators                                             |
| `value`                                                                | *components.ConversationsFilterValue*                                  | :heavy_check_mark:                                                     | N/A                                                                    |