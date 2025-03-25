# PropertyKeysRequestBody

Query Property Keys Params

## Example Usage

```typescript
import { PropertyKeysRequestBody } from "@inkeep/inkeep-analytics/models/components";

let value: PropertyKeysRequestBody = {
  field: "userProperties",
  views: [
    "events_view",
    "conversations_view",
    "semantic_threads_view",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `field`                                                                                            | [components.PropertyKeysRequestBodyField](../../models/components/propertykeysrequestbodyfield.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `views`                                                                                            | [components.Views](../../models/components/views.md)[]                                             | :heavy_minus_sign:                                                                                 | Optional list of views to query (defaults to all views)                                            | [<br/>"events_view",<br/>"conversations_view",<br/>"semantic_threads_view"<br/>]                   |
| `where`                                                                                            | *components.Where*                                                                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |