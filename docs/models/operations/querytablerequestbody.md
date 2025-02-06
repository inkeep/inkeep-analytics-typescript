# QueryTableRequestBody

Note: The maximum size of the request body is 2 MB.

## Example Usage

```typescript
import { QueryTableRequestBody } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryTableRequestBody = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `select`                                                                       | *operations.QueryTableSelect*[]                                                | :heavy_minus_sign:                                                             | N/A                                                                            |
| `groupBy`                                                                      | [operations.QueryTableGroupBy](../../models/operations/querytablegroupby.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `where`                                                                        | *components.SemanticThreadFilter*                                              | :heavy_minus_sign:                                                             | N/A                                                                            |
| `orderBy`                                                                      | [operations.QueryTableOrderBy](../../models/operations/querytableorderby.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |