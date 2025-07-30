# Query
(*query*)

## Overview

### Available Operations

* [conversations](#conversations) - Query Conversations
* [queryEvents](#queryevents) - Query Events
* [queryFeedback](#queryfeedback) - Query Feedback
* [querySemanticThreads](#querysemanticthreads) - Query Semantic Threads
* [exportSemanticThreadsQueryResults](#exportsemanticthreadsqueryresults) - Export Semantic Threads Query Results
* [queryPropertyKeys](#querypropertykeys) - Query Property Keys
* [queryPropertyValues](#querypropertyvalues) - Query Property Values

## conversations

Query Conversations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="queryConversations" method="post" path="/query/conversations" -->
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.query.conversations({
    notes: "Count of support ticket conversations by integration",
  });

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
const inkeepAnalytics = new InkeepAnalyticsCore({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const res = await queryConversations(inkeepAnalytics, {
    notes: "Count of support ticket conversations by integration",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queryConversations failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useQueryConversationsMutation
} from "@inkeep/inkeep-analytics/react-query/queryConversations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.QueryConversationsRequestBody](../../models/components/queryconversationsrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

<!-- UsageSnippet language="typescript" operationID="queryEvents" method="post" path="/query/events" -->
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.query.queryEvents({
    notes: "Count of events by type",
  });

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
const inkeepAnalytics = new InkeepAnalyticsCore({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const res = await queryQueryEvents(inkeepAnalytics, {
    notes: "Count of events by type",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queryQueryEvents failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useQueryQueryEventsMutation
} from "@inkeep/inkeep-analytics/react-query/queryQueryEvents.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.QueryEventsRequestBody](../../models/components/queryeventsrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## queryFeedback

Query Feedback

### Example Usage

<!-- UsageSnippet language="typescript" operationID="queryFeedback" method="post" path="/query/feedback" -->
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.query.queryFeedback({
    notes: "Count of feedback by type",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "@inkeep/inkeep-analytics/core.js";
import { queryQueryFeedback } from "@inkeep/inkeep-analytics/funcs/queryQueryFeedback.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const res = await queryQueryFeedback(inkeepAnalytics, {
    notes: "Count of feedback by type",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queryQueryFeedback failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useQueryQueryFeedbackMutation
} from "@inkeep/inkeep-analytics/react-query/queryQueryFeedback.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.QueryFeedbackRequestBody](../../models/components/queryfeedbackrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.QueryFeedbackResponseBody](../../models/components/queryfeedbackresponsebody.md)\>**

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

<!-- UsageSnippet language="typescript" operationID="querySemanticThreads" method="post" path="/query/semantic-threads" -->
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.query.querySemanticThreads({
    notes: "Count of chat sessions with documentation gaps by integration",
  });

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
const inkeepAnalytics = new InkeepAnalyticsCore({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const res = await queryQuerySemanticThreads(inkeepAnalytics, {
    notes: "Count of chat sessions with documentation gaps by integration",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queryQuerySemanticThreads failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useQueryQuerySemanticThreadsMutation
} from "@inkeep/inkeep-analytics/react-query/queryQuerySemanticThreads.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.QuerySemanticThreadsRequestBody](../../models/components/querysemanticthreadsrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

<!-- UsageSnippet language="typescript" operationID="exportSemanticThreadsQueryResults" method="post" path="/query/semantic-threads/export" -->
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.query.exportSemanticThreadsQueryResults({
    notes: "Count of chat sessions with documentation gaps by integration",
  });

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
  const res = await queryExportSemanticThreadsQueryResults(inkeepAnalytics, {
    notes: "Count of chat sessions with documentation gaps by integration",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queryExportSemanticThreadsQueryResults failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useQueryExportSemanticThreadsQueryResultsMutation
} from "@inkeep/inkeep-analytics/react-query/queryExportSemanticThreadsQueryResults.js";
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

## queryPropertyKeys

Query Property Keys

### Example Usage

<!-- UsageSnippet language="typescript" operationID="queryPropertyKeys" method="post" path="/query/property-keys" -->
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.query.queryPropertyKeys({
    field: "properties",
    views: [
      "events_view",
      "conversations_view",
      "semantic_threads_view",
      "feedback_view",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "@inkeep/inkeep-analytics/core.js";
import { queryQueryPropertyKeys } from "@inkeep/inkeep-analytics/funcs/queryQueryPropertyKeys.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const res = await queryQueryPropertyKeys(inkeepAnalytics, {
    field: "properties",
    views: [
      "events_view",
      "conversations_view",
      "semantic_threads_view",
      "feedback_view",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queryQueryPropertyKeys failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useQueryQueryPropertyKeysMutation
} from "@inkeep/inkeep-analytics/react-query/queryQueryPropertyKeys.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PropertyKeysRequestBody](../../models/components/propertykeysrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PropertyKeysResponseBody](../../models/components/propertykeysresponsebody.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/problem+json   |
| errors.Unauthorized        | 401                        | application/problem+json   |
| errors.Forbidden           | 403                        | application/problem+json   |
| errors.UnprocessableEntity | 422                        | application/problem+json   |
| errors.InternalServerError | 500                        | application/problem+json   |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## queryPropertyValues

Query Property Values

### Example Usage

<!-- UsageSnippet language="typescript" operationID="queryPropertyValues" method="post" path="/query/property-values" -->
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.query.queryPropertyValues({
    field: "properties",
    key: "theme",
    views: [
      "events_view",
      "conversations_view",
      "semantic_threads_view",
      "feedback_view",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "@inkeep/inkeep-analytics/core.js";
import { queryQueryPropertyValues } from "@inkeep/inkeep-analytics/funcs/queryQueryPropertyValues.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const res = await queryQueryPropertyValues(inkeepAnalytics, {
    field: "properties",
    key: "theme",
    views: [
      "events_view",
      "conversations_view",
      "semantic_threads_view",
      "feedback_view",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("queryQueryPropertyValues failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useQueryQueryPropertyValuesMutation
} from "@inkeep/inkeep-analytics/react-query/queryQueryPropertyValues.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PropertyValuesRequestBody](../../models/components/propertyvaluesrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PropertyValuesResponseBody](../../models/components/propertyvaluesresponsebody.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/problem+json   |
| errors.Unauthorized        | 401                        | application/problem+json   |
| errors.Forbidden           | 403                        | application/problem+json   |
| errors.UnprocessableEntity | 422                        | application/problem+json   |
| errors.InternalServerError | 500                        | application/problem+json   |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |