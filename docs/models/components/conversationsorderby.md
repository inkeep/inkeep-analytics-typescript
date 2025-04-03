# ConversationsOrderBy

Specifies how to order Conversations query results by field and direction

## Example Usage

```typescript
import { ConversationsOrderBy } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsOrderBy = {
  field: "userMessageCount_month",
  direction: "desc",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `field`                                                                                      | [components.ConversationsOrderByField](../../models/components/conversationsorderbyfield.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `direction`                                                                                  | [components.Direction](../../models/components/direction.md)                                 | :heavy_check_mark:                                                                           | N/A                                                                                          |