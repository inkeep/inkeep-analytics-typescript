/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { conversationsConversations } from "../funcs/conversationsConversations.js";
import { conversationsDelete } from "../funcs/conversationsDelete.js";
import { conversationsGet } from "../funcs/conversationsGet.js";
import { conversationsList } from "../funcs/conversationsList.js";
import { conversationsLog } from "../funcs/conversationsLog.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Conversations extends ClientSDK {
  /**
   * Log Conversation
   *
   * @remarks
   * Logs a new conversation or updates an existing one with new messages. Always include all messages.
   *
   * **API Key Types:** `WEB`, `API`
   */
  async log(
    security: operations.LogConversationSecurity,
    request: components.CreateConversation,
    options?: RequestOptions,
  ): Promise<components.Conversation> {
    return unwrapAsync(conversationsLog(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Get All Conversations
   */
  async list(
    request: operations.GetAllConversationRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAllConversationResponseBody> {
    return unwrapAsync(conversationsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Conversation
   */
  async get(
    security: operations.GetConversationSecurity,
    request: operations.GetConversationRequest,
    options?: RequestOptions,
  ): Promise<components.Conversation> {
    return unwrapAsync(conversationsGet(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Delete Conversation
   */
  async delete(
    security: operations.DeleteConversationSecurity,
    request: operations.DeleteConversationRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteConversationResponseBody> {
    return unwrapAsync(conversationsDelete(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Query Conversations
   */
  async conversations(
    security: operations.QueryConversationsSecurity,
    request: operations.QueryConversationsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.QueryConversationsResponseBody> {
    return unwrapAsync(conversationsConversations(
      this,
      security,
      request,
      options,
    ));
  }
}
