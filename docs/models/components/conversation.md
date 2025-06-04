# Conversation


## Supported Types

### `components.OpenAIConversation`

```typescript
const value: components.OpenAIConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://spotless-godfather.biz/",
  type: "openai",
  supportTicketConversationId: "<id>",
  createdAt: "1717749033246",
  updatedAt: "1735689262899",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  visibility: "private",
  messages: [],
  messagesOpenAIFormat: [
    {
      role: "user",
      content: [
        {
          type: "text",
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
  externalUrl: "https://unlawful-lace.info",
  type: "support_ticket",
  supportTicketConversationId: "<id>",
  createdAt: "1705404518187",
  updatedAt: "1735608499142",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  visibility: "public",
  messages: [],
};
```

### `components.SupportCopilotConversation`

```typescript
const value: components.SupportCopilotConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://terrible-brace.name/",
  type: "support_copilot",
  supportTicketConversationId: "<id>",
  createdAt: "1725115765298",
  updatedAt: "1735632564285",
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
      externalUrl: "https://emotional-circumference.org",
      conversationId: "<id>",
      createdAt: "1734941336698",
      updatedAt: "1735668930778",
      role: "<value>",
      content: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
    },
  ],
};
```

