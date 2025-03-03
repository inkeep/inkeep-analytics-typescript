# QuerySemanticThreadsResponseBody

Query Semantic Threads result

## Example Usage

```typescript
import { QuerySemanticThreadsResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: QuerySemanticThreadsResponseBody = {
  status: "ok",
  data: {
    result: [
      {},
    ],
    total: 1369,
    pageSize: 8221.18,
    count: 1898.48,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `status`                                                                                       | [operations.QuerySemanticThreadsStatus](../../models/operations/querysemanticthreadsstatus.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.QuerySemanticThreadsData](../../models/operations/querysemanticthreadsdata.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |