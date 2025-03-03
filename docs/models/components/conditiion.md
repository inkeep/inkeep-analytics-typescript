# Conditiion

## Example Usage

```typescript
import { Conditiion } from "@inkeep/inkeep-analytics/models/components";

let value: Conditiion = {
  condition: {
    field: "firstPartyEntities",
    operator: "eq",
    value: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `condition`                                                  | [components.Condition](../../models/components/condition.md) | :heavy_check_mark:                                           | N/A                                                          |