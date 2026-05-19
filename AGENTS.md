<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Mandatory Pre-Task Protocol

**Before writing any code or making any file changes**, you must read both guide files in full:

1. `guides/DIRECTORY_STRUCTURE.md` — where every file belongs and why
2. `guides/CODING_GUIDE.md` — coding standards, naming rules, and patterns

Do not skip this step. Do not assume you already know the conventions. Read the files on every task, even if you have seen them before in this session.

## Why This Is Non-Negotiable

This project uses a Feature Sliced Design architecture with strict layer boundaries. Placing a file in the wrong folder, importing across the wrong layers, or using a pattern not established in the guides introduces architectural drift that is hard to reverse. The guides are the single source of truth.

## Verification Checklist

After reading the guides and before writing output, confirm:

- [ ] Every new file is placed in the correct layer (`app/`, `features/`, `entities/`, `shared/`, `stores/`)
- [ ] No feature imports from another feature
- [ ] `model/` contains only types and Zod schemas — never hooks or logic
- [ ] `hooks/` consumes `api/` functions — it contains no raw fetch calls
- [ ] `views/` and `layouts/` are Server Components (no `"use client"` at the top)
- [ ] UI components use only primitives from `shared/ui/base/` — no shadcn/ui
- [ ] All imports use the `@/` path alias — no upward relative paths (`../../`)
- [ ] Named exports are used everywhere except Next.js `app/` page and layout files
- [ ] The `ApiResponse<T>` type from `@/shared/lib/types/api` is used for all API responses
- [ ] Server state is handled by React Query — not stored in Zustand or `useState`

## When in Doubt

If you are unsure which layer a file belongs to, re-read the "Quick Reference" table at the bottom of `guides/DIRECTORY_STRUCTURE.md`. If you are still unsure, ask before placing the file.
