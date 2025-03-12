# InsertMessageEvent

## Example Usage

```typescript
import { InsertMessageEvent } from "@inkeep/inkeep-analytics/models/components";

let value: InsertMessageEvent = {
  type: "<value>",
  messageId: "<id>",
  entityType: "message",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `type`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `messageId`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_minus_sign:                                                                                        | A timestamp in ISO 8601 format with timezone information. If not provided, the current time will be used. |
| `projectId`                                                                                               | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `integrationId`                                                                                           | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `properties`                                                                                              | Record<string, *any*>                                                                                     | :heavy_minus_sign:                                                                                        | A customizable collection of custom properties or attributes.                                             |
| `userProperties`                                                                                          | Record<string, *any*>                                                                                     | :heavy_minus_sign:                                                                                        | A customizable collection of custom properties or attributes.                                             |
| `entityType`                                                                                              | [components.EntityType](../../models/components/entitytype.md)                                            | :heavy_check_mark:                                                                                        | N/A                                                                                                       |