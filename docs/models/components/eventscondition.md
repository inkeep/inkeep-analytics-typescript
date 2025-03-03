# EventsCondition

## Example Usage

```typescript
import { EventsCondition } from "@inkeep/inkeep-analytics/models/components";

let value: EventsCondition = {
  field: "projectId",
  operator: "lt",
  value: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `field`                                                                | *components.EventsConditionField*                                      | :heavy_check_mark:                                                     | N/A                                                                    |
| `operator`                                                             | [components.FilterOperator](../../models/components/filteroperator.md) | :heavy_check_mark:                                                     | Available Select Operators                                             |
| `value`                                                                | *components.Value*                                                     | :heavy_check_mark:                                                     | N/A                                                                    |