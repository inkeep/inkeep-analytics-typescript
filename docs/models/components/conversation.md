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
  createdAt: "1727380820574",
  updatedAt: "1746781171143",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "openai",
      externalId: "<id>",
      externalUrl: "https://yummy-jet.net/",
      conversationId: "<id>",
      createdAt: "1733270755127",
      updatedAt: "1746816065582",
      role: "user",
      content: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
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
  createdAt: "1731275172205",
  updatedAt: "1746802489942",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      externalId: "<id>",
      externalUrl: "https://beloved-ceramic.org/",
      conversationId: "<id>",
      createdAt: "1723216731400",
      updatedAt: "1746818107326",
      role: "<value>",
      content: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
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
  createdAt: "1718395840546",
  updatedAt: "1746821900860",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      externalId: "<id>",
      externalUrl: "https://gripping-meander.biz",
      conversationId: "<id>",
      createdAt: "1736363374038",
      updatedAt: "1746838955258",
      role: "<value>",
      content: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
    },
  ],
};
```

