# UnprocessableEntityError

## Example Usage

```typescript
import { UnprocessableEntityError } from "@inkeep/inkeep-analytics/models/errors";

let value: UnprocessableEntityError = {
  code: "unprocessable_entity",
  message: "Unprocessable Entity",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | [errors.UnprocessableEntityCode](../../models/errors/unprocessableentitycode.md) | :heavy_check_mark:                                                               | A short code indicating the error code returned.                                 | unprocessable_entity                                                             |
| `message`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | A human readable error message.                                                  | Unprocessable Entity                                                             |