/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { InkeepAnalyticsCore } from "../core.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get All Feedback
 */
export function feedbackList(
  client: InkeepAnalyticsCore,
  security: operations.GetAllFeedbackSecurity,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.GetAllFeedbackResponse,
    | errors.BadRequest
    | errors.Unauthorized
    | errors.Forbidden
    | errors.NotFound
    | errors.UnprocessableEntity
    | errors.InternalServerError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    security,
    options,
  ));
}

async function $do(
  client: InkeepAnalyticsCore,
  security: operations.GetAllFeedbackSecurity,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.GetAllFeedbackResponse,
      | errors.BadRequest
      | errors.Unauthorized
      | errors.Forbidden
      | errors.NotFound
      | errors.UnprocessableEntity
      | errors.InternalServerError
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const path = pathToFunc("/feedback")();

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const requestSecurity = resolveSecurity(
    [
      {
        fieldName: "Authorization",
        type: "http:bearer",
        value: security?.webIntegrationKey,
      },
    ],
    [
      {
        fieldName: "Authorization",
        type: "http:bearer",
        value: security?.apiIntegrationKey,
      },
    ],
  );

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "getAllFeedback",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 100,
          maxInterval: 2000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX", "429"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "404", "422", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.GetAllFeedbackResponse,
    | errors.BadRequest
    | errors.Unauthorized
    | errors.Forbidden
    | errors.NotFound
    | errors.UnprocessableEntity
    | errors.InternalServerError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.GetAllFeedbackResponse$inboundSchema),
    M.jsonErr(400, errors.BadRequest$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(401, errors.Unauthorized$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(403, errors.Forbidden$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(404, errors.NotFound$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(422, errors.UnprocessableEntity$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(500, errors.InternalServerError$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
