# QueryConversationsResponseBody

Query results

## Example Usage

```typescript
import { QueryConversationsResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryConversationsResponseBody = {
  status: "ok",
  data: {
    result: [
      {},
    ],
    total: 2155.07,
    pageSize: 9473.71,
    count: 7308.56,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [operations.QueryConversationsStatus](../../models/operations/queryconversationsstatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [operations.QueryConversationsData](../../models/operations/queryconversationsdata.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |