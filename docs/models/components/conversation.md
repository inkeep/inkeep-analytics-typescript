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
  createdAt: "1724287798792",
  updatedAt: "1742432826070",
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
      createdAt: "1727606651127",
      updatedAt: "1742426099949",
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
  createdAt: "1736129685152",
  updatedAt: "1742416892825",
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
      createdAt: "1727384429625",
      updatedAt: "1742412847849",
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
  createdAt: "1711519976601",
  updatedAt: "1742430384564",
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
      createdAt: "1724709660735",
      updatedAt: "1742437296115",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

