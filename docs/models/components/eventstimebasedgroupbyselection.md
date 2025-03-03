# EventsTimeBasedGroupBySelection

## Example Usage

```typescript
import { EventsTimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: EventsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
  field: "eventType",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [components.EventsTimeBasedGroupBySelectionType](../../models/components/eventstimebasedgroupbyselectiontype.md)         | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `timeUnit`                                                                                                               | [components.EventsTimeBasedGroupBySelectionTimeUnit](../../models/components/eventstimebasedgroupbyselectiontimeunit.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `field`                                                                                                                  | *components.EventsTimeBasedGroupBySelectionField*                                                                        | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |