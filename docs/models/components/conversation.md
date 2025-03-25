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
  createdAt: "1724768658132",
  updatedAt: "1742913685410",
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
      createdAt: "1728087510466",
      updatedAt: "1742906959288",
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
  createdAt: "1736610544491",
  updatedAt: "1742897752164",
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
      createdAt: "1727865288965",
      updatedAt: "1742893707189",
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
  createdAt: "1712000835941",
  updatedAt: "1742911243903",
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
      createdAt: "1725190520075",
      updatedAt: "1742918155455",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

