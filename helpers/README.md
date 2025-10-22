# Helpers Directory

This directory is reserved for utility functions and custom hooks.

## Future Implementation

Helper functions and hooks will include:

1. **formatters.ts** - Date, currency, and number formatting
2. **validators.ts** - Custom validation functions
3. **hooks/useDebounce.ts** - Debounce hook for search inputs
4. **hooks/useMediaQuery.ts** - Responsive design hooks
5. **constants.ts** - Application-wide constants

## Example Structure

```typescript
// formatters.ts
export function formatCurrency(amount: number, locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

## Best Practices

- Keep functions pure and testable
- Use TypeScript for type safety
- Document complex logic
- Follow single responsibility principle




