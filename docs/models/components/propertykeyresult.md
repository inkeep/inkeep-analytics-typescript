# PropertyKeyResult

## Example Usage

```typescript
import { PropertyKeyResult } from "@inkeep/inkeep-analytics/models/components";

let value: PropertyKeyResult = {
  key: "theme",
  count: 42,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `key`                            | *string*                         | :heavy_check_mark:               | Property key name                | theme                            |
| `count`                          | *number*                         | :heavy_check_mark:               | Number of times this key appears | 42                               |