# UnauthorizedError

Legacy error format for backward compatibility.

## Example Usage

```typescript
import { UnauthorizedError } from "@inkeep/inkeep-analytics/models/errors";

let value: UnauthorizedError = {
  code: "unauthorized",
  message: "Unauthorized",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                  | [errors.UnauthorizedErrorCode](../../models/errors/unauthorizederrorcode.md)                            | :heavy_check_mark:                                                                                      | A short code indicating the error code returned.                                                        | unauthorized                                                                                            |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | A concise error message suitable for display to end users. May be truncated if the full detail is long. | Unauthorized                                                                                            |