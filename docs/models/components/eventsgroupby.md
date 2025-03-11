# EventsGroupBy

Group by options for events

## Example Usage

```typescript
import { EventsGroupBy } from "@inkeep/inkeep-analytics/models/components";

let value: EventsGroupBy = {
  field: "integrationId",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `field`                                                          | [components.EventsField](../../models/components/eventsfield.md) | :heavy_check_mark:                                               | Available fields for Events                                      |
| `includeInSelect`                                                | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |