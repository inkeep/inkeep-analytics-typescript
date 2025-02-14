# EventsTimeBasedGroupBySelection

## Example Usage

```typescript
import { EventsTimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: EventsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "week",
  field: "createdAt",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [components.EventsTimeBasedGroupBySelectionType](../../models/components/eventstimebasedgroupbyselectiontype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `timeUnit`                                                                                                       | *components.EventsTimeBasedGroupBySelectionTimeUnit*                                                             | :heavy_check_mark:                                                                                               | Available Time Units                                                                                             |
| `field`                                                                                                          | *components.EventsTimeBasedGroupBySelectionField*                                                                | :heavy_check_mark:                                                                                               | N/A                                                                                                              |