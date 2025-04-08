# inkeep-analytics-typescript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *inkeep-analytics-typescript* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=inkeep-analytics-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/inkeep/inkeep). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Inkeep Analytics API: The Inkeep Analytics API provides endpoints for managing conversations, feedback, events, and queries.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [inkeep-analytics-typescript](#inkeep-analytics-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [React hooks with TanStack Query](#react-hooks-with-tanstack-query)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @inkeep/inkeep-analytics
# Install optional peer dependencies if you plan to use React hooks
npm add @tanstack/react-query react react-dom
```

### PNPM

```bash
pnpm add @inkeep/inkeep-analytics
# Install optional peer dependencies if you plan to use React hooks
pnpm add @tanstack/react-query react react-dom
```

### Bun

```bash
bun add @inkeep/inkeep-analytics
# Install optional peer dependencies if you plan to use React hooks
bun add @tanstack/react-query react react-dom
```

### Yarn

```bash
yarn add @inkeep/inkeep-analytics zod
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "InkeepAnalytics": {
      "command": "npx",
      "args": [
        "-y", "--package", "@inkeep/inkeep-analytics",
        "--",
        "mcp", "start",
        "--api-integration-key", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "InkeepAnalytics": {
      "command": "npx",
      "args": [
        "-y", "--package", "@inkeep/inkeep-analytics",
        "--",
        "mcp", "start",
        "--api-integration-key", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @inkeep/inkeep-analytics -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.topSearchQueries({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                | Type | Scheme      | Environment Variable                  |
| ------------------- | ---- | ----------- | ------------------------------------- |
| `apiIntegrationKey` | http | HTTP Bearer | `INKEEPANALYTICS_API_INTEGRATION_KEY` |

To authenticate with the API the `apiIntegrationKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.topSearchQueries({});

  // Handle the result
  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics();

async function run() {
  const result = await inkeepAnalytics.conversations.log({}, {
    type: "support_ticket",
    messages: [
      {
        role: "<value>",
      },
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [conversation](docs/sdks/conversation/README.md)

* [getConversationByExternalId](docs/sdks/conversation/README.md#getconversationbyexternalid) - Get Conversation by External ID

### [conversations](docs/sdks/conversations/README.md)

* [log](docs/sdks/conversations/README.md#log) - Log Conversation
* [list](docs/sdks/conversations/README.md#list) - Get All Conversations
* [get](docs/sdks/conversations/README.md#get) - Get Conversation
* [delete](docs/sdks/conversations/README.md#delete) - Delete Conversation

### [events](docs/sdks/events/README.md)

* [log](docs/sdks/events/README.md#log) - Log Event

### [feedback](docs/sdks/feedback/README.md)

* [submit](docs/sdks/feedback/README.md#submit) - Submit Feedback
* [list](docs/sdks/feedback/README.md#list) - Get All Feedback

### [InkeepAnalytics SDK](docs/sdks/inkeepanalytics/README.md)

* [topSearchQueries](docs/sdks/inkeepanalytics/README.md#topsearchqueries) - Top Search Queries
* [weeklySearchUsers](docs/sdks/inkeepanalytics/README.md#weeklysearchusers) - Weekly Search Users

### [query](docs/sdks/query/README.md)

* [conversations](docs/sdks/query/README.md#conversations) - Query Conversations
* [queryEvents](docs/sdks/query/README.md#queryevents) - Query Events
* [querySemanticThreads](docs/sdks/query/README.md#querysemanticthreads) - Query Semantic Threads
* [exportSemanticThreadsQueryResults](docs/sdks/query/README.md#exportsemanticthreadsqueryresults) - Export Semantic Threads Query Results
* [queryPropertyKeys](docs/sdks/query/README.md#querypropertykeys) - Query Property Keys
* [queryPropertyValues](docs/sdks/query/README.md#querypropertyvalues) - Query Property Values

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`conversationGetConversationByExternalId`](docs/sdks/conversation/README.md#getconversationbyexternalid) - Get Conversation by External ID
- [`conversationsDelete`](docs/sdks/conversations/README.md#delete) - Delete Conversation
- [`conversationsGet`](docs/sdks/conversations/README.md#get) - Get Conversation
- [`conversationsList`](docs/sdks/conversations/README.md#list) - Get All Conversations
- [`conversationsLog`](docs/sdks/conversations/README.md#log) - Log Conversation
- [`eventsLog`](docs/sdks/events/README.md#log) - Log Event
- [`feedbackList`](docs/sdks/feedback/README.md#list) - Get All Feedback
- [`feedbackSubmit`](docs/sdks/feedback/README.md#submit) - Submit Feedback
- [`queryConversations`](docs/sdks/query/README.md#conversations) - Query Conversations
- [`queryExportSemanticThreadsQueryResults`](docs/sdks/query/README.md#exportsemanticthreadsqueryresults) - Export Semantic Threads Query Results
- [`queryQueryEvents`](docs/sdks/query/README.md#queryevents) - Query Events
- [`queryQueryPropertyKeys`](docs/sdks/query/README.md#querypropertykeys) - Query Property Keys
- [`queryQueryPropertyValues`](docs/sdks/query/README.md#querypropertyvalues) - Query Property Values
- [`queryQuerySemanticThreads`](docs/sdks/query/README.md#querysemanticthreads) - Query Semantic Threads
- [`topSearchQueries`](docs/sdks/inkeepanalytics/README.md#topsearchqueries) - Top Search Queries
- [`weeklySearchUsers`](docs/sdks/inkeepanalytics/README.md#weeklysearchusers) - Weekly Search Users

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start React hooks with TanStack Query [react-query] -->
## React hooks with TanStack Query

React hooks built on [TanStack Query][tanstack-query] are included in this SDK.
These hooks and the utility functions provided alongside them can be used to
build rich applications that pull data from the API using one of the most
popular asynchronous state management library.

[tanstack-query]: https://tanstack.com/query/v5/docs/framework/react/overview

To learn about this feature and how to get started, check
[REACT_QUERY.md](./REACT_QUERY.md).

> [!WARNING]
>
> This feature is currently in **preview** and is subject to breaking changes
> within the current major version of the SDK as we gather user feedback on it.

<details>

<summary>Available React hooks</summary>

- [`useConversationGetConversationByExternalId`](docs/sdks/conversation/README.md#getconversationbyexternalid) - Get Conversation by External ID
- [`useConversationsDeleteMutation`](docs/sdks/conversations/README.md#delete) - Delete Conversation
- [`useConversationsGet`](docs/sdks/conversations/README.md#get) - Get Conversation
- [`useConversationsList`](docs/sdks/conversations/README.md#list) - Get All Conversations
- [`useConversationsLogMutation`](docs/sdks/conversations/README.md#log) - Log Conversation
- [`useEventsLogMutation`](docs/sdks/events/README.md#log) - Log Event
- [`useFeedbackList`](docs/sdks/feedback/README.md#list) - Get All Feedback
- [`useFeedbackSubmitMutation`](docs/sdks/feedback/README.md#submit) - Submit Feedback
- [`useQueryConversationsMutation`](docs/sdks/query/README.md#conversations) - Query Conversations
- [`useQueryExportSemanticThreadsQueryResultsMutation`](docs/sdks/query/README.md#exportsemanticthreadsqueryresults) - Export Semantic Threads Query Results
- [`useQueryQueryEventsMutation`](docs/sdks/query/README.md#queryevents) - Query Events
- [`useQueryQueryPropertyKeysMutation`](docs/sdks/query/README.md#querypropertykeys) - Query Property Keys
- [`useQueryQueryPropertyValuesMutation`](docs/sdks/query/README.md#querypropertyvalues) - Query Property Values
- [`useQueryQuerySemanticThreadsMutation`](docs/sdks/query/README.md#querysemanticthreads) - Query Semantic Threads
- [`useTopSearchQueries`](docs/sdks/inkeepanalytics/README.md#topsearchqueries) - Top Search Queries
- [`useWeeklySearchUsers`](docs/sdks/inkeepanalytics/README.md#weeklysearchusers) - Weekly Search Users

</details>
<!-- End React hooks with TanStack Query [react-query] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.topSearchQueries({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.topSearchQueries({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `topSearchQueries` method may throw the following errors:

| Error Type                 | Status Code | Content Type             |
| -------------------------- | ----------- | ------------------------ |
| errors.BadRequest          | 400         | application/problem+json |
| errors.Unauthorized        | 401         | application/problem+json |
| errors.Forbidden           | 403         | application/problem+json |
| errors.UnprocessableEntity | 422         | application/problem+json |
| errors.InternalServerError | 500         | application/problem+json |
| errors.APIError            | 4XX, 5XX    | \*/\*                    |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";
import {
  BadRequest,
  Forbidden,
  InternalServerError,
  SDKValidationError,
  Unauthorized,
  UnprocessableEntity,
} from "@inkeep/inkeep-analytics/models/errors";

const inkeepAnalytics = new InkeepAnalytics({
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await inkeepAnalytics.topSearchQueries({});

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequest): {
        // Handle err.data$: BadRequestData
        console.error(err);
        return;
      }
      case (err instanceof Unauthorized): {
        // Handle err.data$: UnauthorizedData
        console.error(err);
        return;
      }
      case (err instanceof Forbidden): {
        // Handle err.data$: ForbiddenData
        console.error(err);
        return;
      }
      case (err instanceof UnprocessableEntity): {
        // Handle err.data$: UnprocessableEntityData
        console.error(err);
        return;
      }
      case (err instanceof InternalServerError): {
        // Handle err.data$: InternalServerErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const inkeepAnalytics = new InkeepAnalytics({
  serverURL: "https://api.analytics.inkeep.com",
  apiIntegrationKey: process.env["INKEEPANALYTICS_API_INTEGRATION_KEY"] ?? "",
});

async function run() {
  const result = await inkeepAnalytics.topSearchQueries({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";
import { HTTPClient } from "@inkeep/inkeep-analytics/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new InkeepAnalytics({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { InkeepAnalytics } from "@inkeep/inkeep-analytics";

const sdk = new InkeepAnalytics({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `INKEEPANALYTICS_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=inkeep-analytics-typescript&utm_campaign=typescript)
