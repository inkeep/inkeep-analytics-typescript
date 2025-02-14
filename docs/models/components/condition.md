# Condition

## Example Usage

```typescript
import { Condition } from "@inkeep/inkeep-analytics/models/components";

let value: Condition = {
  field: "organizationId",
  operator: "notIn",
  value: false,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `field`                                         | *components.ConversationsFilterField*           | :heavy_check_mark:                              | N/A                                             |
| `operator`                                      | *components.ConversationsFilterSelectOperators* | :heavy_check_mark:                              | Available Select Operators                      |
| `value`                                         | *components.ConversationsFilterValue*           | :heavy_check_mark:                              | N/A                                             |