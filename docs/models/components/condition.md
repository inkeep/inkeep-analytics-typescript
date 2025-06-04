# Condition

## Example Usage

```typescript
import { Condition } from "@inkeep/inkeep-analytics/models/components";

let value: Condition = {
  field: "id",
  operator: "in",
  value: {
    "path": [
      "/root",
      "/home",
      "/usr/X11R6",
    ],
    "value": 134.82,
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                       | [components.ConversationsField](../../models/components/conversationsfield.md)                                | :heavy_check_mark:                                                                                            | Available fields for Conversations                                                                            |
| `operator`                                                                                                    | [components.FilterOperator](../../models/components/filteroperator.md)                                        | :heavy_check_mark:                                                                                            | Available operators for filtering data                                                                        |
| `value`                                                                                                       | *any*                                                                                                         | :heavy_check_mark:                                                                                            | The value to compare the field against. For JSON fields, can be either a JSON object or a {path, value} pair. |