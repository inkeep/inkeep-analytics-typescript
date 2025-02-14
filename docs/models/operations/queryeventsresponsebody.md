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
    total: 7851.53,
    pageSize: 2817.3,
    count: 5864.1,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `status`                                                                     | [operations.QueryEventsStatus](../../models/operations/queryeventsstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.QueryEventsData](../../models/operations/queryeventsdata.md)     | :heavy_check_mark:                                                           | N/A                                                                          |