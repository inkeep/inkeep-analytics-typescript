# QueryConversationsRequestBody

Note: The maximum size of the request body is 2 MB.

## Example Usage

```typescript
import { QueryConversationsRequestBody } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryConversationsRequestBody = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `select`                                                   | *operations.SelectionSchema*[]                             | :heavy_minus_sign:                                         | N/A                                                        |
| `groupBy`                                                  | [operations.GroupBy](../../models/operations/groupby.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
| `where`                                                    | *components.ConversationsFilter*                           | :heavy_minus_sign:                                         | N/A                                                        |
| `orderBy`                                                  | [operations.OrderBy](../../models/operations/orderby.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
| `notes`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Notes for the query                                        |