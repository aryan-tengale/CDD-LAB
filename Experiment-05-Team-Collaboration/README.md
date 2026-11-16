# Experiment 5 — Team Collaboration Using GitHub and Branching Strategies

## Aim
Collaborate on a shared GitHub repository using GitHub Flow and feature branches.

## Requirements
Git, GitHub accounts for at least two team members, browser, and prior knowledge of branches and pull requests.

## Procedure

### 1. Create and share a repository
1. One team member creates a shared GitHub repository (for example, `team-project`).
2. Open **Settings → Collaborators**, add each teammate by GitHub username, and have them accept the invitation.
3. Optionally protect `main` by requiring pull requests before merging.

### 2. Clone and create individual feature branches
Each member clones the repository:

```bash
git clone https://github.com/TEAM/team-project.git
cd team-project
git checkout -b feature/login-page
```

A second member can work on a separate branch, for example `feature/signup-page`.

### 3. Commit, push, and open a PR
```bash
git add .
git commit -m "Implement login page layout"
git push -u origin feature/login-page
```

Open a pull request from the feature branch into `main`. A teammate reviews and merges it. Repeat for each member's task.

### 4. Update a feature branch from main
While another feature branch is in progress, `main` may receive merged changes.

```bash
git checkout feature/signup-page
git pull origin main
```

If conflicts occur, resolve them locally, then:

```bash
git add .
git commit -m "Merge latest main into feature/signup-page"
git push
```

If two PRs edit the same file, update the second feature branch from the latest `main`, resolve the conflict, and push again.

## Branching strategy
This experiment follows GitHub Flow: keep `main` deployable and develop each task on a short-lived feature branch, merged through a pull request.

## Observation checklist
- [ ] Shared repository created and collaborators added
- [ ] Each member created an independent feature branch
- [ ] Feature branches pushed
- [ ] Pull requests reviewed and merged
- [ ] A stale branch updated and any conflict resolved

## Result
Add evidence of collaborator access, feature branches, PRs, reviews, and conflict resolution after the team activity.
