# Experiment 6 — Continuous Integration with GitHub Actions

## Aim
Create a GitHub Actions CI workflow that runs automatically on push and pull request events.

## Requirements
Git, GitHub repository, code editor, and a simple Node.js or Python application. This repository includes a minimal Node.js sample for the workflow.

## Procedure

### 1. Prepare the sample application
At the repository root, use the included `package.json` and `index.js`. To recreate locally:

```bash
npm init -y
```

Create `index.js`:

```javascript
console.log("Hello from CI/CD lab");
```

### 2. Inspect the workflow
The workflow is `.github/workflows/ci.yml`. It:
- Runs on pushes to `main` and pull requests targeting `main`.
- Checks out the repository.
- Sets up Node.js 20.
- Installs dependencies.
- Runs `node index.js`.

### 3. Commit and push
```bash
git add .github/workflows/ci.yml package.json package-lock.json index.js
git commit -m "Add CI workflow using GitHub Actions"
git push origin main
```

If no `package-lock.json` exists yet, omit it from the add command.

### 4. Inspect the run
1. Open the repository's **Actions** tab.
2. Select the **CI** workflow run triggered by the push.
3. Expand each job step and inspect its logs.
4. The application step should print `Hello from CI/CD lab`.

### 5. Demonstrate failure and recovery
Introduce a syntax error in `index.js`, commit, and push. Inspect the failed run and its error log. Correct the syntax, commit, and push again; verify the next run succeeds.

## Key concepts
Workflow, job, step, runner, action, and trigger (`push` / `pull_request`).

## Common issues
- Workflow missing: check the exact `.github/workflows/` path and `.yml` extension.
- YAML errors: use consistent spaces; YAML indentation matters.
- `npm: command not found`: ensure the Node.js setup step runs before npm commands.

## Observation checklist
- [ ] Workflow appears in Actions
- [ ] Push triggers a run
- [ ] Successful output and logs inspected
- [ ] Deliberate failure observed
- [ ] Fixed workflow succeeds

## Result
Record the actual Actions run links or screenshots after execution.
