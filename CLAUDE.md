@AGENTS.md

# Claude-Specific Instructions

## Read the Guides First

Use the Read tool to open both files before doing anything else on any task:

```
guides/DIRECTORY_STRUCTURE.md
guides/CODING_GUIDE.md
```

This is required on every task — not just the first one in a session. The guides are the authoritative source for where files go and how code is written in this project.

## Spawning Subagents

If you spawn subagents (via the Agent tool) for any task in this project, pass the guide contents to them explicitly in the prompt. Subagents do not inherit this context automatically and will produce non-conforming code if they don't have it.
