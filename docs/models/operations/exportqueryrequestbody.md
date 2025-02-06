# ExportQueryRequestBody

Note: The maximum size of the request body is 2 MB.

## Example Usage

```typescript
import { ExportQueryRequestBody } from "inkeep-analytics-typescript/models/operations";

let value: ExportQueryRequestBody = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `select`                                                                         | *operations.ExportQuerySelect*[]                                                 | :heavy_minus_sign:                                                               | N/A                                                                              |
| `groupBy`                                                                        | [operations.ExportQueryGroupBy](../../models/operations/exportquerygroupby.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `where`                                                                          | *components.SemanticThreadFilter*                                                | :heavy_minus_sign:                                                               | N/A                                                                              |
| `orderBy`                                                                        | [operations.ExportQueryOrderBy](../../models/operations/exportqueryorderby.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |