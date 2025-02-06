# ExportQueryRequest

## Example Usage

```typescript
import { ExportQueryRequest } from "@inkeep/inkeep-analytics/models/operations";

let value: ExportQueryRequest = {
  table: "semantic_threads_view",
  requestBody: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `table`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | semantic_threads_view                                                                  |
| `requestBody`                                                                          | [operations.ExportQueryRequestBody](../../models/operations/exportqueryrequestbody.md) | :heavy_check_mark:                                                                     | Note: The maximum size of the request body is 2 MB.                                    |                                                                                        |