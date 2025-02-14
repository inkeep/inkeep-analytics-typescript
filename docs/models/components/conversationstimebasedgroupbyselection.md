# ConversationsTimeBasedGroupBySelection

## Example Usage

```typescript
import { ConversationsTimeBasedGroupBySelection } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsTimeBasedGroupBySelection = {
  type: "time",
  timeUnit: "day",
  field: "integrationId",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [components.ConversationsTimeBasedGroupBySelectionType](../../models/components/conversationstimebasedgroupbyselectiontype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `timeUnit`                                                                                                                     | *components.TimeUnit*                                                                                                          | :heavy_check_mark:                                                                                                             | Available Time Units                                                                                                           |
| `field`                                                                                                                        | *components.ConversationsTimeBasedGroupBySelectionField*                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |