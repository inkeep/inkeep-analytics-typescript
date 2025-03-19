<!-- Start SDK Example Usage [usage] -->
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics();

async function run() {
  const result = await inkeepAnalytics.postQueryPropertyKeys({
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {
    field: "properties",
    search: "theme",
    views: [
      "events_view",
    ],
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->