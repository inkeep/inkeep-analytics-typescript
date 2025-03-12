# SelectSearchEvent

## Example Usage

```typescript
import { SelectSearchEvent } from "@inkeep/inkeep-analytics/models/components";

let value: SelectSearchEvent = {
  id: "<id>",
  type: "<value>",
  searchQuery: "<value>",
  createdAt: "1713098609930",
  projectId: "<id>",
  integrationId: "<id>",
  entityType: "search",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `searchQuery`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `projectId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `integrationId`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `properties`                                                                                     | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | A customizable collection of custom properties or attributes.                                    |
| `userProperties`                                                                                 | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | A customizable collection of custom properties or attributes.                                    |
| `entityType`                                                                                     | [components.SelectSearchEventEntityType](../../models/components/selectsearchevententitytype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |