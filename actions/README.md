# Actions Directory

This directory is reserved for Next.js Server Actions.

## Future Implementation

Server actions will handle:

1. **auth.ts** - User authentication and registration
2. **contact.ts** - Contact form submissions
3. **hotel-search.ts** - Hotel search and booking requests
4. **newsletter.ts** - Newsletter subscriptions

## Example Structure

```typescript
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(formData: FormData) {
  // Validation
  const data = contactSchema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  // Process submission
  // ...

  return { success: true };
}
```

## Best Practices

- Always validate input with Zod schemas
- Use type-safe FormData handling
- Return structured response objects
- Handle errors gracefully
- Add rate limiting for production







