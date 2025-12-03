# EventsTimeBasedGroupBySelection

## Example Usage

```typescript
import { EventsTimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: EventsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | *"time"*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `timeUnit`                                                                                                         | [components.TimeUnit](../../models/components/timeunit.md)                                                         | :heavy_check_mark:                                                                                                 | Valid time units for time-based operations                                                                         |
| `field`                                                                                                            | [components.EventsTimeBasedGroupBySelectionField](../../models/components/eventstimebasedgroupbyselectionfield.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |