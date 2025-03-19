/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { postQueryPropertyKeys } from "../funcs/postQueryPropertyKeys.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Conversation } from "./conversation.js";
import { Conversations } from "./conversations.js";
import { Events } from "./events.js";
import { Feedback } from "./feedback.js";
import { Query } from "./query.js";

export class InkeepAnalytics extends ClientSDK {
  private _conversations?: Conversations;
  get conversations(): Conversations {
    return (this._conversations ??= new Conversations(this._options));
  }

  private _conversation?: Conversation;
  get conversation(): Conversation {
    return (this._conversation ??= new Conversation(this._options));
  }

  private _feedback?: Feedback;
  get feedback(): Feedback {
    return (this._feedback ??= new Feedback(this._options));
  }

  private _events?: Events;
  get events(): Events {
    return (this._events ??= new Events(this._options));
  }

  private _query?: Query;
  get query(): Query {
    return (this._query ??= new Query(this._options));
  }

  async postQueryPropertyKeys(
    security: operations.PostQueryPropertyKeysSecurity,
    request?: components.PropertyKeysRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.PropertyKeysResponseBody> {
    return unwrapAsync(postQueryPropertyKeys(
      this,
      security,
      request,
      options,
    ));
  }
}
