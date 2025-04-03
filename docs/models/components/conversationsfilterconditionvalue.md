# ConversationsFilterConditionValue

The value to compare the field against. For JSON fields, can be either a JSON object or a {path, value} pair.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `boolean`

```typescript
const value: boolean = false;
```

### `number`

```typescript
const value: number = 3068.1;
```

### `string[]`

```typescript
const value: string[] = [
  "<value>",
];
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
};
```

### `components.Six`

```typescript
const value: components.Six = {
  path: [
    "/selinux",
  ],
  value: [
    353.62,
  ],
};
```

