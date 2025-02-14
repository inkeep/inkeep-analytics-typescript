# EventsCondition

## Example Usage

```typescript
import { EventsCondition } from "@inkeep/inkeep-analytics/models/components";

let value: EventsCondition = {
  field: "type",
  operator: "eq",
  value: false,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `field`                           | *components.EventsConditionField* | :heavy_check_mark:                | N/A                               |
| `operator`                        | *components.SelectOperators*      | :heavy_check_mark:                | Available Select Operators        |
| `value`                           | *components.Value*                | :heavy_check_mark:                | N/A                               |