# QA-Phase2 Cypress Automation Exercises

This repository contains Cypress automation exercises for Weeks 4–6. Each week focuses on hands-on practice with end-to-end tests, covering form interactions, assertions, and reusable testing patterns.

## Folder structure

- **Week4/** – Cypress form automation example (`cypress_form_automation`).
- **Week5/** – Additional Cypress scenarios (`cypress`).
- **Week6/** – Further Cypress practice (`cypress`).

## Install dependencies and run tests

Run the following commands from the repository root for each week.

### Week 4: Form automation
```bash
cd Week4/cypress_form_automation
npm install
npx cypress open   # launches Cypress Test Runner
# or
npx cypress run    # executes headless test run
```

### Week 5
```bash
cd Week5/cypress
npm install
npx cypress open
# or
npx cypress run
```

### Week 6
```bash
cd Week6/cypress
npm install
npx cypress open
# or
npx cypress run
```

## Best practices used

- **Consistent selectors:** Prefer stable data attributes (e.g., `data-cy`, `data-test`) over brittle CSS selectors.
- **Fixtures for test data:** Keep reusable inputs and responses under `cypress/fixtures` to avoid repetition and improve readability.
- **Modular specs and helpers:** Organize specs by feature and extract shared logic into custom commands or utilities to keep tests maintainable.

## Bash script to initialize and push the repo

Replace `<REMOTE-URL>` with your repository URL, then run:

```bash
#!/usr/bin/env bash
set -euo pipefail

cd QA-Phase2
git init
git add .
git commit -m "Add Cypress exercises for Weeks 4–6"
git branch -M main
git remote add origin <REMOTE-URL>
git push -u origin main
```
