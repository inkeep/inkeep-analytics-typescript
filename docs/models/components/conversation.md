# Conversation


## Supported Types

### `components.OpenAIConversation`

```typescript
const value: components.OpenAIConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://second-newsletter.name",
  type: "openai",
  supportTicketConversationId: "<id>",
  createdAt: "1724252775437",
  updatedAt: "1742397802715",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "openai",
      externalId: "<id>",
      externalUrl: "https://whole-godparent.net",
      conversationId: "<id>",
      createdAt: "1727571627772",
      updatedAt: "1742391076594",
      role: "assistant",
      content: "<value>",
    },
  ],
  messagesOpenAIFormat: [
    {
      role: "system",
      content: "<value>",
    },
  ],
};
```

### `components.SupportTicketConversation`

```typescript
const value: components.SupportTicketConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://spanish-sunbeam.org",
  type: "support_ticket",
  supportTicketConversationId: "<id>",
  createdAt: "1736094661797",
  updatedAt: "1742381869470",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      externalId: "<id>",
      externalUrl: "https://productive-charm.org/",
      conversationId: "<id>",
      createdAt: "1727349406270",
      updatedAt: "1742377824494",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

### `components.SupportCopilotConversation`

```typescript
const value: components.SupportCopilotConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://sorrowful-import.name/",
  type: "support_copilot",
  supportTicketConversationId: "<id>",
  createdAt: "1711484953247",
  updatedAt: "1742395361209",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      externalId: "<id>",
      externalUrl: "https://wavy-pleasure.info",
      conversationId: "<id>",
      createdAt: "1724674637380",
      updatedAt: "1742402272760",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

