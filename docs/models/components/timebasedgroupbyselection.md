# TimeBasedGroupBySelection

## Example Usage

```typescript
import { TimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: TimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "month",
  field: "isClear",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.TimeBasedGroupBySelectionType](../../models/components/timebasedgroupbyselectiontype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `timeUnit`                                                                                           | *components.TimeBasedGroupBySelectionTimeUnit*                                                       | :heavy_check_mark:                                                                                   | Available Time Units                                                                                 |
| `field`                                                                                              | *components.TimeBasedGroupBySelectionField*                                                          | :heavy_check_mark:                                                                                   | N/A                                                                                                  |