# Conversation


## Supported Types

### `components.OpenAIConversation`

```typescript
const value: components.OpenAIConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://wealthy-lender.info/",
  type: "openai",
  supportTicketConversationId: "<id>",
  createdAt: "1720477040663",
  updatedAt: "1743650508161",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "openai",
      externalId: "<id>",
      externalUrl: "https://agitated-ocelot.name",
      conversationId: "<id>",
      createdAt: "1731589645055",
      updatedAt: "1743665154038",
      role: "assistant",
      content: "<value>",
    },
  ],
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
  externalUrl: "https://recent-cuckoo.com",
  type: "support_ticket",
  supportTicketConversationId: "<id>",
  createdAt: "1722081363309",
  updatedAt: "1743615039397",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      externalId: "<id>",
      externalUrl: "https://writhing-brochure.biz/",
      conversationId: "<id>",
      createdAt: "1717221071946",
      updatedAt: "1743640043058",
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
  externalUrl: "https://lighthearted-developing.com/",
  type: "support_copilot",
  supportTicketConversationId: "<id>",
  createdAt: "1715614805496",
  updatedAt: "1743640321375",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      externalId: "<id>",
      externalUrl: "https://hoarse-slide.com/",
      conversationId: "<id>",
      createdAt: "1738559444922",
      updatedAt: "1743591917963",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

