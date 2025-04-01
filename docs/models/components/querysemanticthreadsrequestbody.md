# QuerySemanticThreadsRequestBody

Query Semantic Threads Params

## Example Usage

```typescript
import { QuerySemanticThreadsRequestBody } from "@inkeep/inkeep-analytics/models/components";

let value: QuerySemanticThreadsRequestBody = {
  notes: "Count of chat sessions with documentation gaps by integration",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `query`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `select`                                                                               | *components.SemanticThreadSelection*[]                                                 | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `groupBy`                                                                              | [components.SemanticThreadGroupBy](../../models/components/semanticthreadgroupby.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `where`                                                                                | *components.SemanticThreadFilter*                                                      | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `orderBy`                                                                              | [components.SemanticThreadOrderBy](../../models/components/semanticthreadorderby.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `notes`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | Notes are not persisted, but may be useful for your debugging purposes                 | Count of chat sessions with documentation gaps by integration                          |