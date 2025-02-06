# QueryTableRequest

## Example Usage

```typescript
import { QueryTableRequest } from "@inkeep/inkeep-analytics/models/operations";

let value: QueryTableRequest = {
  table: "semantic_threads_view",
  requestBody: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `table`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | semantic_threads_view                                                                |
| `requestBody`                                                                        | [operations.QueryTableRequestBody](../../models/operations/querytablerequestbody.md) | :heavy_check_mark:                                                                   | Note: The maximum size of the request body is 2 MB.                                  |                                                                                      |