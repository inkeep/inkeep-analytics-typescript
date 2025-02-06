# Condition

## Example Usage

```typescript
import { Condition } from "inkeep-analytics-typescript/models/components";

let value: Condition = {
  field: "id",
  operator: "lte",
  value: [
    "<value>",
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `field`                               | *components.ConversationsFilterField* | :heavy_check_mark:                    | N/A                                   |
| `operator`                            | *components.Operator*                 | :heavy_check_mark:                    | N/A                                   |
| `value`                               | *components.Value*                    | :heavy_check_mark:                    | N/A                                   |