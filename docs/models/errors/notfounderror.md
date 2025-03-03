# NotFoundError

Legacy error format for backward compatibility.

## Example Usage

```typescript
import { NotFoundError } from "@inkeep/inkeep-analytics/models/errors";

let value: NotFoundError = {
  code: "not_found",
  message: "Not Found",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                  | [errors.NotFoundErrorCode](../../models/errors/notfounderrorcode.md)                                    | :heavy_check_mark:                                                                                      | A short code indicating the error code returned.                                                        | not_found                                                                                               |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | A concise error message suitable for display to end users. May be truncated if the full detail is long. | Not Found                                                                                               |