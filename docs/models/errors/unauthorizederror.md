# UnauthorizedError

## Example Usage

```typescript
import { UnauthorizedError } from "@inkeep/inkeep-analytics/models/errors";

let value: UnauthorizedError = {
  code: "unauthorized",
  message: "Unauthorized",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `code`                                                             | [errors.UnauthorizedCode](../../models/errors/unauthorizedcode.md) | :heavy_check_mark:                                                 | A short code indicating the error code returned.                   | unauthorized                                                       |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | A human readable error message.                                    | Unauthorized                                                       |