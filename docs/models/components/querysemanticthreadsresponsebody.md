# QuerySemanticThreadsResponseBody

Response body for QuerySemanticThreads query endpoint

## Example Usage

```typescript
import { QuerySemanticThreadsResponseBody } from "@inkeep/inkeep-analytics/models/components";

let value: QuerySemanticThreadsResponseBody = {
  status: "ok",
  data: {
    result: [
      {
        userProperties: {
          identificationType: "COOKIED",
        },
      },
    ],
    total: 5947.9,
    pageSize: 4857.56,
    count: 7822.57,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                               | [components.QuerySemanticThreadsResponseBodyStatus](../../models/components/querysemanticthreadsresponsebodystatus.md) | :heavy_check_mark:                                                                                                     | Status of the response                                                                                                 |
| `data`                                                                                                                 | [components.QuerySemanticThreadsResponseData](../../models/components/querysemanticthreadsresponsedata.md)             | :heavy_check_mark:                                                                                                     | Data object containing QuerySemanticThreads query results and pagination information                                   |