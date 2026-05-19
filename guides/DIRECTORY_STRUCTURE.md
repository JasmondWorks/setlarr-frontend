# Setlarr Directory Structure

This project uses a **Feature Sliced Design (FSD)-inspired architecture** layered on top of the Next.js App Router. The layers are ordered from most specific (app) to most general (shared), and a layer may only import from layers below it — never upward.

```
src/
├── app/          # Next.js App Router — routing only
├── features/     # Isolated business capabilities
├── entities/     # Domain objects reusable across features
├── shared/       # Cross-cutting utilities and base UI
└── stores/       # Global client-side state
```

---

## Layer Order and Import Rules

```
app → features → entities → shared → stores
```

- `app` can import from any layer.
- `features` can import from `entities`, `shared`, and `stores`. Never from another feature.
- `entities` can import from `shared` and `stores`. Never from a feature.
- `shared` has no internal dependencies on any domain layer.
- `stores` can import from `shared` only.

Circular imports between features or between an entity and a feature are always a violation.

---

## `src/app/` — Routing Layer

The App Router shell. This layer owns **only routing, layout composition, and metadata**. No business logic lives here.

```
src/app/
├── layout.tsx          # Root layout — providers, fonts, global wrappers
├── page.tsx            # Home route
├── globals.css         # Tailwind v4 theme tokens and base styles
├── (auth)/             # Route group — shared layout without URL segment
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
└── dashboard/
    ├── layout.tsx      # Dashboard shell layout (sidebar, nav)
    └── page.tsx
```

**Rule:** A page file does one thing — it imports a View from `features/` and renders it. No JSX markup beyond that.

```tsx
// src/app/dashboard/page.tsx
import { DashboardView } from "@/features/dashboard/views/Dashboard";

export default function DashboardPage() {
  return <DashboardView />;
}
```

**Violation:** Putting API calls, form logic, or component markup directly in a page file.

---

## `src/features/` — Business Capabilities

A feature is a self-contained slice of product functionality. Each folder in `features/` maps to a user-facing capability — something you'd find in a product spec or user story.

**Examples:** `auth`, `onboarding`, `listing-management`, `checkout`, `messaging`

```
src/features/auth/
├── api/
│   └── auth.actions.ts       # All async API calls for this feature
├── hooks/
│   ├── useLogin.ts           # Business logic hook (calls API, manages state)
│   └── useRegister.ts
├── model/
│   ├── types.ts              # TypeScript interfaces/types
│   └── schemas.ts            # Zod schemas for validation
├── lib/
│   ├── utils.ts              # Feature-scoped utility functions
│   └── constants.ts          # Feature-scoped constants
├── ui/
│   ├── LoginForm.tsx         # Reusable UI component within the feature
│   └── RegisterForm.tsx
├── layouts/
│   └── AuthShell.tsx         # Layout wrapping multiple views within this feature
└── views/
    ├── Login.tsx             # Page-level composition (used by app/)
    └── Register.tsx
```

### `api/` — API Calls

Contains only `async` functions that make HTTP requests. They receive arguments and return typed results. No React, no hooks here.

```ts
// src/features/auth/api/auth.actions.ts
import { apiClient } from "@/shared/api/api-client";
import type { LoginPayload, AuthResult } from "../model/types";
import type { ApiResponse } from "@/shared/lib/types/api";

export async function loginUser(payload: LoginPayload): Promise<ApiResponse<AuthResult>> {
  return apiClient.post("/auth/login", payload);
}
```

### `hooks/` — Business Logic

Custom hooks that wire together API calls, React Query, and local state. They consume `api/` functions and are used by `ui/` components.

```ts
// src/features/auth/hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { loginUser } from "../api/auth.actions";

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

### `model/` — Types and Schemas

Pure TypeScript — no runtime logic. `types.ts` holds interfaces and types; `schemas.ts` holds Zod schemas.

```ts
// src/features/auth/model/types.ts
export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResult {
  token: string;
  user: { id: string; role: "buyer" | "seller" };
}
```

### `lib/` — Feature Utilities

Pure functions and constants scoped to the feature. If a utility is needed by more than one feature, move it to `shared/lib/`.

### `ui/` — Reusable Feature Components

Server Components by default. Only add `"use client"` when the component needs browser APIs, event handlers, or React hooks. These are building blocks consumed by `views/`.

```tsx
// src/features/auth/ui/LoginForm.tsx
"use client";
import { useLogin } from "../hooks/useLogin";

export function LoginForm() { ... }
```

### `layouts/` — Feature Layout Shells (optional)

Layout components that wrap multiple views within the same feature — things like a feature-specific sidebar, tab navigation, or shell that appears across several pages within that feature.

Use this folder when two or more views within the same feature share a common surrounding structure. If a layout is generic enough to be used across multiple features, it belongs in `shared/layouts/` instead.

```tsx
// src/features/seller/layouts/SellerShell.tsx
import { SellerSidebar } from "../ui/SellerSidebar";

export function SellerShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SellerSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

```tsx
// src/features/seller/views/Overview.tsx
import { SellerShell } from "../layouts/SellerShell";

export function SellerOverviewView() {
  return (
    <SellerShell>
      {/* overview content */}
    </SellerShell>
  );
}
```

### `views/` — Page Compositions

Server Components that assemble `ui/` components into a full page layout. They are imported by `app/` pages — they are **not** routable themselves.

```tsx
// src/features/auth/views/Login.tsx
import { LoginForm } from "../ui/LoginForm";

export function LoginView() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
```

**Violation:** Importing a component from one feature directly into another feature. Extract the shared piece into `entities/` or `shared/` instead.

---

## `src/entities/` — Domain Objects

An entity is a **domain concept that appears across multiple features**. If data or UI for a "buyer" or "seller" is needed in more than one feature, it lives here — not duplicated in each feature.

Think of entities as the vocabulary of your domain. Features use that vocabulary to build capabilities.

```
src/entities/
├── buyer/
│   ├── api/
│   │   └── buyer.ts          # Async functions that fetch/mutate buyer data
│   ├── hooks/
│   │   └── useBuyer.ts       # Hooks that consume buyer API and manage state
│   ├── model/
│   │   ├── types.ts          # Buyer TypeScript interfaces
│   │   └── schemas.ts        # Buyer Zod schemas
│   ├── lib/
│   │   ├── constants.ts      # Buyer-scoped constants
│   │   └── utils.ts          # Buyer-scoped utility functions
│   └── ui/
│       ├── BuyerCard.tsx     # Reusable buyer UI (used in multiple features)
│       └── BuyerAvatar.tsx
└── seller/
    └── ...                   # Identical structure
```

Each sub-folder has the same role it plays inside a feature:

- `api/` — async functions only, no React
- `hooks/` — React Query hooks consuming `api/`
- `model/` — TypeScript types and Zod schemas
- `lib/` — pure constants and utility functions
- `ui/` — Server Components by default; add `"use client"` only when needed

The only difference from a feature is that entities have no `views/` or `layouts/` — they have no page-level compositions of their own.

### When to use `entities/` vs `features/`

| Scenario | Layer |
|---|---|
| Login form and logic | `features/auth` |
| Buyer's profile data shape (`BuyerProfile` type) | `entities/buyer/model/types.ts` |
| Zod schema for a buyer's profile | `entities/buyer/model/schemas.ts` |
| Displaying a buyer card in a listing | `entities/buyer/ui/BuyerCard.tsx` |
| Checkout flow (uses buyer entity) | `features/checkout` |
| Fetching the current buyer's full profile | `entities/buyer/api/buyer.ts` |
| Hook to access the current buyer | `entities/buyer/hooks/useBuyer.ts` |
| Fetching listings filtered for a buyer | `features/listings/api/` |

**Rule:** If data or UI belongs to a domain object (buyer, seller, listing, order) and is shared across features, it's an entity. If it's specific to one user-facing capability, it's a feature.

**Violation:** Putting `BuyerCard` inside `features/listings/ui/` if it's also needed in `features/checkout/`. Move it to `entities/buyer/ui/`.

---

## `src/shared/` — Cross-Cutting Concerns

Infrastructure and utilities with no domain knowledge. Nothing in `shared/` should know about buyers, sellers, auth, or any feature.

```
src/shared/
├── api/
│   ├── api-client.ts         # Configured HTTP client (base URL, headers, interceptors)
│   └── create-resource.ts    # Factory for generating typed CRUD API functions
├── hooks/
│   ├── useBreakpoint.ts      # Responsive breakpoint detection
│   └── useMobile.ts          # Mobile viewport detection
├── layouts/
│   └── DashboardLayout.tsx   # Layout shell components (nav, sidebar)
├── lib/
│   ├── types/
│   │   └── api.ts            # ApiResponse<T> generic type
│   └── constants/            # App-wide constants (routes, config keys)
└── ui/
    ├── base/                 # Primitive components (Button, Input, Modal, etc.)
    └── layout/               # Layout components (Container, Grid, Stack)
```

### `shared/api/api-client.ts`

The single configured HTTP client used by every `api/` file across features and entities. Configure base URL, auth headers, and error interceptors here.

```ts
// src/shared/api/api-client.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiClient = {
  async get<T>(path: string): Promise<T> { ... },
  async post<T>(path: string, body: unknown): Promise<T> { ... },
  async put<T>(path: string, body: unknown): Promise<T> { ... },
  async delete<T>(path: string): Promise<T> { ... },
};
```

### `shared/ui/base/`

Primitive UI components that all other components across the app are built from. These are generic, domain-agnostic, and styled via Tailwind. No shadcn/ui.

```
shared/ui/base/
├── Button.tsx
├── Input.tsx
├── Modal.tsx
├── Badge.tsx
└── Spinner.tsx
```

**Violation:** Importing a component from a `features/` folder into `shared/`. The arrow only points downward.

---

## `src/stores/` — Global Client State

Zustand (or equivalent) stores for client-side state that must persist across page navigations or be accessible by multiple unrelated components — not fetched server data.

```
src/stores/
└── auth.ts       # Current user session, auth token, role
```

**Rule:** Use stores for UI state and session data. Use React Query (in `hooks/`) for server state. Do not duplicate server data in a store.

**Violation:** Storing a list of fetched listings in a Zustand store. That belongs in React Query's cache, managed by a hook in `features/listings/hooks/`.

---

## Quick Reference — Where Does It Go?

| What you're building | Where it lives |
|---|---|
| A new page/route | `src/app/[route]/page.tsx` |
| The view rendered by that page | `src/features/[feature]/views/` |
| Layout wrapping multiple views in one feature | `src/features/[feature]/layouts/` |
| Layout shell shared across features | `src/shared/layouts/` |
| Form component for a feature | `src/features/[feature]/ui/` |
| API call used only by one feature | `src/features/[feature]/api/` |
| TypeScript types for a feature | `src/features/[feature]/model/types.ts` |
| Zod schema for a feature form | `src/features/[feature]/model/schemas.ts` |
| React Query hook for a feature | `src/features/[feature]/hooks/` |
| Domain type shared across features | `src/entities/[entity]/model/types.ts` |
| Zod schema for a domain entity | `src/entities/[entity]/model/schemas.ts` |
| Hook to access a domain entity | `src/entities/[entity]/hooks/` |
| UI component shared across features | `src/entities/[entity]/ui/` |
| Generic UI primitive (Button, Input) | `src/shared/ui/base/` |
| Layout shell (Dashboard, Auth shell) | `src/shared/layouts/` |
| HTTP client config | `src/shared/api/api-client.ts` |
| App-wide utility hook | `src/shared/hooks/` |
| Session / auth state (client) | `src/stores/auth.ts` |
| App-wide constants | `src/shared/lib/constants/` |
