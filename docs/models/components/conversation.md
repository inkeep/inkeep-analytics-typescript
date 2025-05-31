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
  createdAt: "1716219312387",
  updatedAt: "1735619662956",
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
      createdAt: "1722109246935",
      updatedAt: "1735654557390",
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
  createdAt: "1720113663993",
  updatedAt: "1735640981730",
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
      createdAt: "1712055223185",
      updatedAt: "1735656599111",
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
  createdAt: "1707234332307",
  updatedAt: "1735660392620",
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
      createdAt: "1725201865791",
      updatedAt: "1735677447011",
      role: "<value>",
      content: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
    },
  ],
};
```

