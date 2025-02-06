# Events
(*events*)

## Overview

Use to log conversation or message events, like "conversation_shared" or "message_code_snippet_copied".

### Available Operations

* [log](#log) - Log Event

## log

Log Event

### Example Usage

```typescript
import { InkeepAnalytics } from "inkeep-analytics-typescript";

const inkeepAnalytics = new InkeepAnalytics();

async function run() {
  const result = await inkeepAnalytics.events.log({
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {
    type: "<value>",
    searchQuery: "<value>",
    entityType: "search",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "inkeep-analytics-typescript/core.js";
import { eventsLog } from "inkeep-analytics-typescript/funcs/eventsLog.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore();

async function run() {
  const res = await eventsLog(inkeepAnalytics, {
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {
    type: "<value>",
    searchQuery: "<value>",
    entityType: "search",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.InsertEvent](../../models/components/insertevent.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.LogEventSecurity](../../models/operations/logeventsecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SelectEvent](../../models/components/selectevent.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.UnprocessableEntity | 422                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |