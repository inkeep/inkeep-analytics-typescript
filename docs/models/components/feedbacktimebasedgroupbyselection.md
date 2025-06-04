# FeedbackTimeBasedGroupBySelection

## Example Usage

```typescript
import { FeedbackTimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: FeedbackTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "week",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.FeedbackTimeBasedGroupBySelectionType](../../models/components/feedbacktimebasedgroupbyselectiontype.md)   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `timeUnit`                                                                                                             | [components.TimeUnit](../../models/components/timeunit.md)                                                             | :heavy_check_mark:                                                                                                     | Valid time units for time-based operations                                                                             |
| `field`                                                                                                                | [components.FeedbackTimeBasedGroupBySelectionField](../../models/components/feedbacktimebasedgroupbyselectionfield.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |