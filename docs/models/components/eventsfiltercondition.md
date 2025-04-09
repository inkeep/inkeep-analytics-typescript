# EventsFilterCondition

## Example Usage

```typescript
import { EventsFilterCondition } from "@inkeep/inkeep-analytics/models/components";

let value: EventsFilterCondition = {
  condition: {
    field: "projectId",
    operator: "isNull",
    value: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `condition`                                                                                            | [components.EventsFilterConditionCondition](../../models/components/eventsfilterconditioncondition.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |