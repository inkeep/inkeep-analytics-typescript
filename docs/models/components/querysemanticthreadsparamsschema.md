# QuerySemanticThreadsParamsSchema

## Example Usage

```typescript
import { QuerySemanticThreadsParamsSchema } from "@inkeep/inkeep-analytics/models/components";

let value: QuerySemanticThreadsParamsSchema = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `select`                                                                       | *components.SelectionSchema*[]                                                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `groupBy`                                                                      | [components.GroupByItemSchema](../../models/components/groupbyitemschema.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `where`                                                                        | *components.SemanticThreadFilter*                                              | :heavy_minus_sign:                                                             | N/A                                                                            |
| `orderBy`                                                                      | [components.OrderBySchema](../../models/components/orderbyschema.md)[]         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `notes`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | Notes for the query                                                            |