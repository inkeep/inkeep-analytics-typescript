# NotFoundError

## Example Usage

```typescript
import { NotFoundError } from "@inkeep/inkeep-analytics/models/errors";

let value: NotFoundError = {
  code: "not_found",
  message: "Not Found",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `code`                                                     | [errors.NotFoundCode](../../models/errors/notfoundcode.md) | :heavy_check_mark:                                         | A short code indicating the error code returned.           | not_found                                                  |
| `message`                                                  | *string*                                                   | :heavy_check_mark:                                         | A human readable error message.                            | Not Found                                                  |