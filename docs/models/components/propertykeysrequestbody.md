# PropertyKeysRequestBody

## Example Usage

```typescript
import { PropertyKeysRequestBody } from "@inkeep/inkeep-analytics/models/components";

let value: PropertyKeysRequestBody = {
  field: "properties",
  search: "theme",
  views: [
    "events_view",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `field`                                                                                            | [components.PropertyKeysRequestBodyField](../../models/components/propertykeysrequestbodyfield.md) | :heavy_check_mark:                                                                                 | Which JSON field to query keys from                                                                | properties                                                                                         |
| `search`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Optional search term to filter keys                                                                | theme                                                                                              |
| `views`                                                                                            | [components.Views](../../models/components/views.md)[]                                             | :heavy_minus_sign:                                                                                 | Optional list of views to query (defaults to all views)                                            | [<br/>"events_view"<br/>]                                                                          |