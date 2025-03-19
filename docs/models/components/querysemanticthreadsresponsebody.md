# QuerySemanticThreadsResponseBody

Response body for QuerySemanticThreads query endpoint

## Example Usage

```typescript
import { QuerySemanticThreadsResponseBody } from "@inkeep/inkeep-analytics/models/components";

let value: QuerySemanticThreadsResponseBody = {
  status: "ok",
  data: {
    result: [
      {},
    ],
    total: 1310.55,
    pageSize: 120.36,
    count: 1154.84,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                               | [components.QuerySemanticThreadsResponseBodyStatus](../../models/components/querysemanticthreadsresponsebodystatus.md) | :heavy_check_mark:                                                                                                     | Status of the response                                                                                                 |
| `data`                                                                                                                 | [components.QuerySemanticThreadsResponseData](../../models/components/querysemanticthreadsresponsedata.md)             | :heavy_check_mark:                                                                                                     | Data object containing QuerySemanticThreads query results and pagination information                                   |