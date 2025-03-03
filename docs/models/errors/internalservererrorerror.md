# InternalServerErrorError

Legacy error format for backward compatibility.

## Example Usage

```typescript
import { InternalServerErrorError } from "@inkeep/inkeep-analytics/models/errors";

let value: InternalServerErrorError = {
  code: "internal_server_error",
  message: "Internal Server Error",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                  | [errors.InternalServerErrorErrorCode](../../models/errors/internalservererrorerrorcode.md)              | :heavy_check_mark:                                                                                      | A short code indicating the error code returned.                                                        | internal_server_error                                                                                   |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | A concise error message suitable for display to end users. May be truncated if the full detail is long. | Internal Server Error                                                                                   |