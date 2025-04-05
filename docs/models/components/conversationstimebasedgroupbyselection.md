# ConversationsTimeBasedGroupBySelection

## Example Usage

```typescript
import { ConversationsTimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [components.ConversationsTimeBasedGroupBySelectionType](../../models/components/conversationstimebasedgroupbyselectiontype.md)   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `timeUnit`                                                                                                                       | [components.TimeUnit](../../models/components/timeunit.md)                                                                       | :heavy_check_mark:                                                                                                               | Valid time units for time-based operations                                                                                       |
| `field`                                                                                                                          | [components.ConversationsTimeBasedGroupBySelectionField](../../models/components/conversationstimebasedgroupbyselectionfield.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |