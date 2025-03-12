# EventsFilterConditionCondition

## Example Usage

```typescript
import { EventsFilterConditionCondition } from "@inkeep/inkeep-analytics/models/components";

let value: EventsFilterConditionCondition = {
  field: "properties",
  operator: "in",
  value: 3277.2,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `field`                                                                | [components.EventsField](../../models/components/eventsfield.md)       | :heavy_check_mark:                                                     | Available fields for Events                                            |
| `operator`                                                             | [components.FilterOperator](../../models/components/filteroperator.md) | :heavy_check_mark:                                                     | Available operators for filtering data                                 |
| `value`                                                                | *components.EventsFilterConditionValue*                                | :heavy_check_mark:                                                     | The value to compare the field against                                 |