# TimeBasedGroupBySelection

## Example Usage

```typescript
import { TimeBasedGroupBySelection } from "inkeep-analytics-typescript/models/components";

let value: TimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "week",
  field: "thirdPartyEntities",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.TimeBasedGroupBySelectionType](../../models/components/timebasedgroupbyselectiontype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `timeUnit`                                                                                           | *components.TimeBasedGroupBySelectionTimeUnit*                                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `field`                                                                                              | *components.TimeBasedGroupBySelectionField*                                                          | :heavy_check_mark:                                                                                   | N/A                                                                                                  |