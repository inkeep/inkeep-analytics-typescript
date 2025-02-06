<!-- Start SDK Example Usage [usage] -->
```typescript
import { InkeepAnalytics } from "inkeep-analytics-typescript";

const inkeepAnalytics = new InkeepAnalytics();

async function run() {
  const result = await inkeepAnalytics.conversations.log({
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {
    type: "support_ticket",
    messages: [
      {
        role: "<value>",
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->