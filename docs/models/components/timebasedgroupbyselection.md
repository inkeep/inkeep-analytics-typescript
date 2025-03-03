# TimeBasedGroupBySelection

## Example Usage

```typescript
import { TimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: TimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
  field: "thirdPartyEntities",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.TimeBasedGroupBySelectionType](../../models/components/timebasedgroupbyselectiontype.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `timeUnit`                                                                                                   | [components.TimeBasedGroupBySelectionTimeUnit](../../models/components/timebasedgroupbyselectiontimeunit.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `field`                                                                                                      | [components.TimeBasedGroupBySelectionField](../../models/components/timebasedgroupbyselectionfield.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |