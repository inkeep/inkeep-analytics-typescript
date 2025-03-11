# Query
(*query*)

## Overview

### Available Operations

* [conversations](#conversations) - Query Conversations
* [queryEvents](#queryevents) - Query Events
* [querySemanticThreads](#querysemanticthreads) - Query Semantic Threads
* [exportSemanticThreadsQueryResults](#exportsemanticthreadsqueryresults) - Export Semantic Threads Query Results

## conversations

Query Conversations

### Example Usage

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics();

async function run() {
  const result = await inkeepAnalytics.query.conversations({
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "@inkeep/inkeep-analytics/core.js";
import { queryConversations } from "@inkeep/inkeep-analytics/funcs/queryConversations.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore();

async function run() {
  const res = await queryConversations(inkeepAnalytics, {
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {});

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
| `request`                                                                                                                                                                      | [components.QueryConversationsRequestBody](../../models/components/queryconversationsrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryConversationsSecurity](../../models/operations/queryconversationssecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.QueryConversationsResponseBody](../../models/components/queryconversationsresponsebody.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/problem+json   |
| errors.Unauthorized        | 401                        | application/problem+json   |
| errors.Forbidden           | 403                        | application/problem+json   |
| errors.UnprocessableEntity | 422                        | application/problem+json   |
| errors.InternalServerError | 500                        | application/problem+json   |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## queryEvents

Query Events

### Example Usage

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics();

async function run() {
  const result = await inkeepAnalytics.query.queryEvents({
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "@inkeep/inkeep-analytics/core.js";
import { queryQueryEvents } from "@inkeep/inkeep-analytics/funcs/queryQueryEvents.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore();

async function run() {
  const res = await queryQueryEvents(inkeepAnalytics, {
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {});

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
| `request`                                                                                                                                                                      | [components.QueryEventsRequestBody](../../models/components/queryeventsrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryEventsSecurity](../../models/operations/queryeventssecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.QueryEventsResponseBody](../../models/components/queryeventsresponsebody.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/problem+json   |
| errors.Unauthorized        | 401                        | application/problem+json   |
| errors.Forbidden           | 403                        | application/problem+json   |
| errors.UnprocessableEntity | 422                        | application/problem+json   |
| errors.InternalServerError | 500                        | application/problem+json   |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## querySemanticThreads

Query Semantic Threads

### Example Usage

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics();

async function run() {
  const result = await inkeepAnalytics.query.querySemanticThreads({
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "@inkeep/inkeep-analytics/core.js";
import { queryQuerySemanticThreads } from "@inkeep/inkeep-analytics/funcs/queryQuerySemanticThreads.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore();

async function run() {
  const res = await queryQuerySemanticThreads(inkeepAnalytics, {
    webIntegrationKey: process.env["INKEEPANALYTICS_WEB_INTEGRATION_KEY"] ?? "",
  }, {});

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
| `request`                                                                                                                                                                      | [components.QuerySemanticThreadsRequestBody](../../models/components/querysemanticthreadsrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QuerySemanticThreadsSecurity](../../models/operations/querysemanticthreadssecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.QuerySemanticThreadsResponseBody](../../models/components/querysemanticthreadsresponsebody.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/problem+json   |
| errors.Unauthorized        | 401                        | application/problem+json   |
| errors.Forbidden           | 403                        | application/problem+json   |
| errors.UnprocessableEntity | 422                        | application/problem+json   |
| errors.InternalServerError | 500                        | application/problem+json   |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## exportSemanticThreadsQueryResults

Export Semantic Threads Query Results

### Example Usage

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.query.exportSemanticThreadsQueryResults({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "@inkeep/inkeep-analytics/core.js";
import { queryExportSemanticThreadsQueryResults } from "@inkeep/inkeep-analytics/funcs/queryExportSemanticThreadsQueryResults.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const res = await queryExportSemanticThreadsQueryResults(inkeepAnalytics, {});

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
| `request`                                                                                                                                                                      | [components.QuerySemanticThreadsRequestBody](../../models/components/querysemanticthreadsrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/problem+json   |
| errors.Unauthorized        | 401                        | application/problem+json   |
| errors.Forbidden           | 403                        | application/problem+json   |
| errors.UnprocessableEntity | 422                        | application/problem+json   |
| errors.InternalServerError | 500                        | application/problem+json   |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |