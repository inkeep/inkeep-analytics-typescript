# QueryConversationsRequestBody

Query Conversations Params

## Example Usage

```typescript
import { QueryConversationsRequestBody } from "@inkeep/inkeep-analytics/models/components";

let value: QueryConversationsRequestBody = {
  notes: "Count of support ticket conversations by integration",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `select`                                                                             | *components.ConversationsSelection*[]                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `groupBy`                                                                            | [components.ConversationsGroupBy](../../models/components/conversationsgroupby.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `where`                                                                              | *components.ConversationsFilter*                                                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `orderBy`                                                                            | [components.ConversationsOrderBy](../../models/components/conversationsorderby.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `notes`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Notes are not persisted, but may be useful for your debugging purposes               | Count of support ticket conversations by integration                                 |