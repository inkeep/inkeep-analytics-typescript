# QueryEventsResponseBody

Query results

## Example Usage

```typescript
import { QueryEventsResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryEventsResponseBody = {
  status: "ok",
  data: {
    result: [
      {},
    ],
    total: 1481.41,
    pageSize: 9818.3,
    count: 4783.7,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `status`                                                                     | [operations.QueryEventsStatus](../../models/operations/queryeventsstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.QueryEventsData](../../models/operations/queryeventsdata.md)     | :heavy_check_mark:                                                           | N/A                                                                          |