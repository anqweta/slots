# slots

Monorepo for the slots project, using Git submodules as separate repositories.

## Structure

```
slots/
├── frontend/  → https://github.com/anqweta/frontend-slots.git
└── backend/   → https://github.com/anqweta/backend-slots.git
```

## Setup

Clone with submodules:

```bash
git clone --recurse-submodules https://github.com/anqweta/slots.git
```

Update submodules to their latest remote commits:

```bash
git submodule update --remote --recursive
```

## Manage submodules

Instructions on how to add/remove submodules:

### Add a submodule

```bash
git submodule add https://github.com/anqweta/<repo>.git <path>
```

### Remove a submodule

```bash
git submodule deinit -f <path>
git rm -f <path>
rm -rf .git/modules/<path>
```

---

**Note:** the frontend source code (Vite + React) now lives in the `frontend` submodule.