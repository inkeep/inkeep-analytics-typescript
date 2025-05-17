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
  createdAt: "1727985608747",
  updatedAt: "1747385959317",
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
      createdAt: "1733875543300",
      updatedAt: "1747420853755",
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
  createdAt: "1731879960384",
  updatedAt: "1747407278121",
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
      createdAt: "1723821519580",
      updatedAt: "1747422895506",
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
  createdAt: "1719000628725",
  updatedAt: "1747426689038",
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
      createdAt: "1736968162212",
      updatedAt: "1747443743432",
      role: "<value>",
      content: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
    },
  ],
};
```

