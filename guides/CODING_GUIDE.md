# Setlarr Coding Standard

## Directory Structure

Follow the Feature Sliced Design architecture described in `DIRECTORY_STRUCTURE.md`. Every file you create has exactly one correct home — read that guide before placing anything.

---

## General Rules

- Preserve the directory structure. Do not create folders that don't exist in the established architecture.
- Layout files must remain Server Components. Making a layout `"use client"` defeats the SEO and performance benefits of RSC.
- If a layout section needs interactivity, extract only that part into a dedicated Client Component.
- Use the Next.js `<Image>` component instead of `<img>`.
- Use the Next.js Google Fonts library (`next/font/google`) for fonts — no `@font-face` or external font CDNs.
- Use only the Tailwind utility classes defined in `globals.css` (Tailwind v4 semantic tokens). Don't write arbitrary values like `w-[347px]` unless there is genuinely no semantic alternative.

---

## Server vs Client Components

Server Components are the default in the App Router. Only reach for `"use client"` when the component genuinely needs one of these:

- Browser-only APIs (`window`, `document`, `navigator`)
- React hooks that manage local state or effects (`useState`, `useEffect`, `useRef`, etc.)
- Event handlers that respond to user interaction
- Third-party libraries that require a browser environment

When you do need a Client Component, keep it as small as possible — push `"use client"` to the leaves of the component tree, not the root.

```tsx
// Good — only the interactive part is a client component
// features/auth/ui/LoginForm.tsx
"use client";
export function LoginForm() { ... }

// features/auth/views/Login.tsx — stays a Server Component
import { LoginForm } from "../ui/LoginForm";
export function LoginView() {
  return <main><LoginForm /></main>;
}
```

---

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Component files | PascalCase | `LoginForm.tsx`, `BuyerCard.tsx` |
| Hook files | camelCase, `use` prefix | `useLogin.ts`, `useMobile.ts` |
| Utility / lib files | camelCase | `api-client.ts`, `utils.ts` |
| Type / schema files | camelCase | `types.ts`, `schemas.ts` |
| Folders | kebab-case | `listing-management/`, `ui/` |
| React components | PascalCase named export | `export function LoginForm()` |
| Hooks | camelCase named export | `export function useLogin()` |
| Types and interfaces | PascalCase | `LoginPayload`, `AuthResult` |

---

## TypeScript

- Prefer `interface` for object shapes; use `type` for unions, intersections, and aliases.
- Always type function parameters and return values explicitly.
- Use the shared `ApiResponse<T>` generic from `@/shared/lib/types/api` to type all API responses.
- Never use `any`. Use `unknown` when the shape is truly unknown, then narrow it.

```ts
import type { ApiResponse } from "@/shared/lib/types/api";

// Good
export async function loginUser(payload: LoginPayload): Promise<ApiResponse<AuthResult>> { ... }

// Bad
export async function loginUser(payload: any): Promise<any> { ... }
```

---

## Imports and Path Aliases

Always use the `@/` path alias for internal imports — never use relative paths that traverse more than one level up.

```ts
// Good
import { apiClient } from "@/shared/api/api-client";
import type { BuyerProfile } from "@/entities/buyer/lib/types";

// Bad
import { apiClient } from "../../shared/api/api-client";
```

Group imports in this order, separated by a blank line:
1. External libraries (`react`, `next/*`, third-party packages)
2. Internal absolute imports (`@/shared/...`, `@/entities/...`, `@/features/...`)
3. Relative imports within the same feature (`../model/types`, `./LoginForm`)

---

## Exports

Use **named exports** everywhere. Default exports are only acceptable in `app/` page and layout files (required by Next.js).

```ts
// Good — named export
export function LoginForm() { ... }
export function useLogin() { ... }

// Bad — default export in a feature/entity/shared file
export default function LoginForm() { ... }
```

---

## Features

A feature is an isolated unit of the application responsible for a specific user-facing capability.

Each feature folder must contain only these sub-folders:

- `api/` — async functions that make HTTP requests
- `hooks/` — custom hooks with business logic that consume `api/`
- `model/` — TypeScript types (`types.ts`) and Zod schemas (`schemas.ts`)
- `lib/` — pure utility functions and constants scoped to the feature (optional)
- `ui/` — reusable UI components within the feature (Server Components by default)
- `views/` — page-level compositions consumed by `app/` pages (Server Components)
- `layouts/` — layout shells that wrap multiple views within the same feature (optional)

**Features must not import from other features.** If two features need the same thing, it belongs in `entities/` or `shared/`.

When starting a new feature, duplicate an existing fully implemented feature's folder structure rather than building from scratch.

---

## Entities

An entity is a domain object (buyer, seller, listing, order) whose data, types, or UI is needed by more than one feature.

Each entity folder mirrors the same sub-folder conventions as a feature:

- `api/` — async functions that fetch or mutate this entity's data
- `hooks/` — React Query hooks consuming `api/` (e.g., `useBuyer`, `useSeller`)
- `model/` — TypeScript types (`types.ts`) and Zod schemas (`schemas.ts`)
- `lib/` — entity-scoped constants (`constants.ts`) and utility functions (`utils.ts`)
- `ui/` — reusable components that represent this entity (e.g., `BuyerCard`, `SellerBadge`)

Entities have no `views/` or `layouts/` — they produce no page-level output of their own.

**When to move something from a feature to an entity:**
If you find yourself copying a component, type, or API call from one feature into another, stop — that shared piece belongs in the appropriate entity.

---

## API Calls

- Use the shared `apiClient` from `@/shared/api/api-client` for all HTTP requests.
- All API functions live in an `api/` folder (either in a feature or entity). They are plain `async` functions — not hooks, not components.
- If the API responds with `status: "error"`, call `toast.error(res.message)`.
- If the API responds with `status: "success"`, call `toast.success(res.message)`.
- Handle these responses in the hook layer (`hooks/`), not inside UI components.

```ts
// features/auth/hooks/useLogin.ts
export function useLogin() {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      if (res.status === "error") return toast.error(res.message);
      toast.success(res.message);
    },
  });
}
```

---

## React Query

- Use React Query for all server state (fetched data). Do not use Zustand or `useState` to store API responses.
- Mutations go in `useMutation`, queries go in `useQuery` or `useSuspenseQuery`.
- Define query keys as constants in the feature's `lib/constants.ts` to avoid key collisions.

```ts
// features/listings/lib/constants.ts
export const LISTING_KEYS = {
  all: ["listings"] as const,
  detail: (id: string) => ["listings", id] as const,
};
```

---

## Forms

- Use `react-hook-form` for form state and submission handling.
- Use `zod` for schema validation — define schemas in the feature's `model/schemas.ts`.
- Use `react-hook-form`'s `handleSubmit` to handle submission.
- Display form validation errors above the submit button, using a shared form error component that accepts errors as props.

```tsx
// features/auth/model/schemas.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
```

---

## State Management (Stores)

The `stores/` folder holds global client-side state — things like the current user session, auth token, or app-wide UI preferences.

**Use a store when:**
- State must survive page navigations and isn't tied to a server fetch
- State is needed by unrelated components with no common ancestor
- It's UI state (e.g., sidebar open/closed) that isn't fetched from the server

**Do not use a store for:**
- Server data (API responses) — use React Query
- Component-local state — use `useState`
- Form state — use `react-hook-form`

---

## UI Components

- Build all custom UI using only the primitive components from `shared/ui/base/`. Do not use shadcn/ui.
- Do not over-abstract. Compose base components directly — three similar uses don't justify a new abstraction.
- If a UI component is used by a single feature only, it belongs in that feature's `ui/` folder.
- If a UI component represents a domain entity and appears across features, it belongs in that entity's `ui/` folder (e.g., `entities/buyer/ui/BuyerCard.tsx`).
- If a UI component is truly generic with no domain knowledge, it belongs in `shared/ui/`.

---

## Environment Variables

- Access environment variables only via `process.env`.
- Variables needed in the browser must be prefixed with `NEXT_PUBLIC_`.
- Never hardcode URLs, API keys, or secrets — they belong in `.env.local` and the deployment environment.
- Type-check environment variables at the top of `shared/api/api-client.ts` rather than throughout the codebase.
