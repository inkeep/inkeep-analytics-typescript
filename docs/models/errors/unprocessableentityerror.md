# UnprocessableEntityError

Legacy error format for backward compatibility.

## Example Usage

```typescript
import { UnprocessableEntityError } from "@inkeep/inkeep-analytics/models/errors";

let value: UnprocessableEntityError = {
  code: "unprocessable_entity",
  message: "Unprocessable Entity",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                  | [errors.UnprocessableEntityErrorCode](../../models/errors/unprocessableentityerrorcode.md)              | :heavy_check_mark:                                                                                      | A short code indicating the error code returned.                                                        | unprocessable_entity                                                                                    |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | A concise error message suitable for display to end users. May be truncated if the full detail is long. | Unprocessable Entity                                                                                    |