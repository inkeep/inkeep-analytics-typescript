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
  createdAt: "1725825611214",
  updatedAt: "1745225961784",
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
      createdAt: "1731715545765",
      updatedAt: "1745260856220",
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
  createdAt: "1729719962839",
  updatedAt: "1745247280576",
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
      createdAt: "1721661522034",
      updatedAt: "1745262897960",
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
  createdAt: "1716840631171",
  updatedAt: "1745266691484",
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
      createdAt: "1734808164658",
      updatedAt: "1745283745878",
      role: "<value>",
      content: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
    },
  ],
};
```

