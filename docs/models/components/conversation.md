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
  createdAt: "1724286330536",
  updatedAt: "1742431357814",
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
      createdAt: "1727605182870",
      updatedAt: "1742424631692",
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
  createdAt: "1736128216896",
  updatedAt: "1742415424569",
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
      createdAt: "1727382961369",
      updatedAt: "1742411379593",
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
  createdAt: "1711518508346",
  updatedAt: "1742428916308",
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
      createdAt: "1724708192479",
      updatedAt: "1742435827859",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

