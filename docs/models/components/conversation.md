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
  createdAt: "1724287078418",
  updatedAt: "1742432105696",
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
      createdAt: "1727605930752",
      updatedAt: "1742425379575",
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
  createdAt: "1736128964778",
  updatedAt: "1742416172451",
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
      createdAt: "1727383709251",
      updatedAt: "1742412127475",
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
  createdAt: "1711519256227",
  updatedAt: "1742429664189",
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
      createdAt: "1724708940360",
      updatedAt: "1742436575740",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

