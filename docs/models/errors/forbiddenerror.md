# ForbiddenError

Legacy error format for backward compatibility.

## Example Usage

```typescript
import { ForbiddenError } from "@inkeep/inkeep-analytics/models/errors";

let value: ForbiddenError = {
  code: "forbidden",
  message: "Forbidden",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                  | [errors.ForbiddenErrorCode](../../models/errors/forbiddenerrorcode.md)                                  | :heavy_check_mark:                                                                                      | A short code indicating the error code returned.                                                        | forbidden                                                                                               |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | A concise error message suitable for display to end users. May be truncated if the full detail is long. | Forbidden                                                                                               |