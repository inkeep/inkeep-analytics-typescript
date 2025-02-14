# EventsFilter1

## Example Usage

```typescript
import { EventsFilter1 } from "@inkeep/inkeep-analytics/models/components";

let value: EventsFilter1 = {
  condition: {
    field: "createdAt",
    operator: "gte",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `condition`                                                              | [components.EventsCondition](../../models/components/eventscondition.md) | :heavy_check_mark:                                                       | N/A                                                                      |