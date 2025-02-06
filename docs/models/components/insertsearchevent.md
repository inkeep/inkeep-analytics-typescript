# InsertSearchEvent

## Example Usage

```typescript
import { InsertSearchEvent } from "@inkeep/inkeep-analytics/models/components";

let value: InsertSearchEvent = {
  type: "<value>",
  searchQuery: "<value>",
  entityType: "search",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `searchQuery`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `properties`                                                                                             | [components.InsertSearchEventProperties](../../models/components/insertsearcheventproperties.md)         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `userProperties`                                                                                         | [components.InsertSearchEventUserProperties](../../models/components/insertsearcheventuserproperties.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `entityType`                                                                                             | [components.InsertSearchEventEntityType](../../models/components/insertsearchevententitytype.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |