# ConversationsTimeBasedGroupBySelection

## Example Usage

```typescript
import { ConversationsTimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "hour",
  field: "type",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [components.ConversationsTimeBasedGroupBySelectionType](../../models/components/conversationstimebasedgroupbyselectiontype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `timeUnit`                                                                                                                     | [components.TimeUnit](../../models/components/timeunit.md)                                                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `field`                                                                                                                        | *components.ConversationsTimeBasedGroupBySelectionField*                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |