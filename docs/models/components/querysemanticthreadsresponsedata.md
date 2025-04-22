# QuerySemanticThreadsResponseData

Data object containing QuerySemanticThreads query results and pagination information

## Example Usage

```typescript
import { QuerySemanticThreadsResponseData } from "@inkeep/inkeep-analytics/models/components";

let value: QuerySemanticThreadsResponseData = {
  result: [
    {
      userProperties: {
        identificationType: "COOKIED",
      },
    },
  ],
  total: 3226.28,
  pageSize: 3107.52,
  count: 4381.35,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.SemanticThreadResultItem](../../models/components/semanticthreadresultitem.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `total`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | Total number of results matching the query                                                   |
| `pageSize`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | Number of results per page                                                                   |
| `count`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | Number of results in the current response                                                    |