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
    total: 1832.8,
    pageSize: 1448.47,
    count: 4880.56,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [operations.QueryConversationsStatus](../../models/operations/queryconversationsstatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [operations.QueryConversationsData](../../models/operations/queryconversationsdata.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |