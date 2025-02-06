# ForbiddenError

## Example Usage

```typescript
import { ForbiddenError } from "inkeep-analytics-typescript/models/errors";

let value: ForbiddenError = {
  code: "forbidden",
  message: "Forbidden",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `code`                                                       | [errors.ForbiddenCode](../../models/errors/forbiddencode.md) | :heavy_check_mark:                                           | A short code indicating the error code returned.             | forbidden                                                    |
| `message`                                                    | *string*                                                     | :heavy_check_mark:                                           | A human readable error message.                              | Forbidden                                                    |