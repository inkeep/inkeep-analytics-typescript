# Feedback
(*feedback*)

## Overview

Use to provide positive or negative feedback along with details.

### Available Operations

* [submit](#submit) - Submit Feedback
* [list](#list) - Get All Feedback

## submit

Submit Feedback

### Example Usage

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.feedback.submit({
    type: "negative",
    messageId: "<id>",
    userProperties: {
      identificationType: "COOKIED",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "@inkeep/inkeep-analytics/core.js";
import { feedbackSubmit } from "@inkeep/inkeep-analytics/funcs/feedbackSubmit.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const res = await feedbackSubmit(inkeepAnalytics, {
    type: "negative",
    messageId: "<id>",
    userProperties: {
      identificationType: "COOKIED",
    },
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useFeedbackSubmitMutation
} from "@inkeep/inkeep-analytics/react-query/feedbackSubmit.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SubmitFeedbackRequestBody](../../models/operations/submitfeedbackrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubmitFeedbackResponseBody](../../models/operations/submitfeedbackresponsebody.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/problem+json   |
| errors.Unauthorized        | 401                        | application/problem+json   |
| errors.Forbidden           | 403                        | application/problem+json   |
| errors.UnprocessableEntity | 422                        | application/problem+json   |
| errors.InternalServerError | 500                        | application/problem+json   |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## list

Get All Feedback

### Example Usage

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.feedback.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { InkeepAnalyticsCore } from "@inkeep/inkeep-analytics/core.js";
import { feedbackList } from "@inkeep/inkeep-analytics/funcs/feedbackList.js";

// Use `InkeepAnalyticsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const inkeepAnalytics = new InkeepAnalyticsCore({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const res = await feedbackList(inkeepAnalytics, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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
  // Query hooks for fetching data.
  useFeedbackList,
  useFeedbackListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedbackList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedbackList,
  invalidateAllFeedbackList,
} from "@inkeep/inkeep-analytics/react-query/feedbackList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllFeedbackRequest](../../models/operations/getallfeedbackrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetAllFeedbackResponse](../../models/components/getallfeedbackresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/problem+json   |
| errors.Unauthorized        | 401                        | application/problem+json   |
| errors.Forbidden           | 403                        | application/problem+json   |
| errors.NotFound            | 404                        | application/problem+json   |
| errors.UnprocessableEntity | 422                        | application/problem+json   |
| errors.InternalServerError | 500                        | application/problem+json   |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |