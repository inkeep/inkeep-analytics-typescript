# Conversation


## Supported Types

### `components.OpenAIConversation`

```typescript
const value: components.OpenAIConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://turbulent-charm.net/",
  type: "openai",
  supportTicketConversationId: "<id>",
  createdAt: "1724682208916",
  updatedAt: "1744082559485",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "openai",
      externalId: "<id>",
      externalUrl: "https://yummy-jet.net/",
      conversationId: "<id>",
      createdAt: "1730572143469",
      updatedAt: "1744117453924",
      role: "user",
      content: "<value>",
    },
  ],
  messagesOpenAIFormat: [
    {
      role: "assistant",
      content: [
        {
          type: "image_url",
        },
      ],
    },
  ],
};
```

### `components.SupportTicketConversation`

```typescript
const value: components.SupportTicketConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://swift-soup.org/",
  type: "support_ticket",
  supportTicketConversationId: "<id>",
  createdAt: "1728576560554",
  updatedAt: "1744103878292",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      externalId: "<id>",
      externalUrl: "https://beloved-ceramic.org/",
      conversationId: "<id>",
      createdAt: "1720518119750",
      updatedAt: "1744119495676",
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
  externalUrl: "https://tame-advertisement.org",
  type: "support_copilot",
  supportTicketConversationId: "<id>",
  createdAt: "1715697228900",
  updatedAt: "1744123289213",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      externalId: "<id>",
      externalUrl: "https://gripping-meander.biz",
      conversationId: "<id>",
      createdAt: "1733664762387",
      updatedAt: "1744140343607",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

