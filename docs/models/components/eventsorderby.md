# EventsOrderBy

Specifies how to order Events query results by field and direction

## Example Usage

```typescript
import { EventsOrderBy } from "@inkeep/inkeep-analytics/models/components";

let value: EventsOrderBy = {
  field: "avg_userProperties",
  direction: "desc",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `field`                                                                                | [components.EventsOrderByField](../../models/components/eventsorderbyfield.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `direction`                                                                            | [components.EventsOrderByDirection](../../models/components/eventsorderbydirection.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |