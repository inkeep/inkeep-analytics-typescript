# QuerySemanticThreadsData

## Example Usage

```typescript
import { QuerySemanticThreadsData } from "@inkeep/inkeep-analytics/models/operations";

let value: QuerySemanticThreadsData = {
  totalCount: 2322.34,
  result: [
    {},
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [operations.SemanticThreadResultItem](../../models/operations/semanticthreadresultitem.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |