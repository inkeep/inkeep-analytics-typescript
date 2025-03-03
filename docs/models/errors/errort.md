# ErrorT

Legacy error format for backward compatibility.

## Example Usage

```typescript
import { ErrorT } from "@inkeep/inkeep-analytics/models/errors";

let value: ErrorT = {
  code: "bad_request",
  message: "Bad Request",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                  | [errors.BadRequestCode](../../models/errors/badrequestcode.md)                                          | :heavy_check_mark:                                                                                      | A short code indicating the error code returned.                                                        | bad_request                                                                                             |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | A concise error message suitable for display to end users. May be truncated if the full detail is long. | Bad Request                                                                                             |