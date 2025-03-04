# SelectSearchEvent

## Example Usage

```typescript
import { SelectSearchEvent } from "@inkeep/inkeep-analytics/models/components";

let value: SelectSearchEvent = {
  id: "<id>",
  type: "<value>",
  searchQuery: "<value>",
  createdAt: "1711223977330",
  entityType: "search",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `searchQuery`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `projectId`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `integrationId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `properties`                                                                                             | [components.SelectSearchEventProperties](../../models/components/selectsearcheventproperties.md)         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `userProperties`                                                                                         | [components.SelectSearchEventUserProperties](../../models/components/selectsearcheventuserproperties.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `entityType`                                                                                             | [components.SelectSearchEventEntityType](../../models/components/selectsearchevententitytype.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |