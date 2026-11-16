# Experiment 3 — Branching, Merging, Rebasing and Merge Conflicts

## Aim
Create branches, merge changes, deliberately produce and resolve a merge conflict, and perform a rebase.

## Requirements
Git, terminal, text editor, and a local repository with at least one commit.

## Procedure

### 1. Create a branch and inspect branches
```bash
git branch
git checkout -b feature-version
git branch
```

### 2. Commit a feature change and merge it
On `feature-version`, create `version.txt` containing `Version: 1.0`.

```bash
git add version.txt
git commit -m "Add version file"
git checkout main
git merge feature-version
git log --oneline --graph --all
```

### 3. Deliberately create and resolve a conflict
On `main`, change the line in `version.txt` to `Version: 2.0-main` and commit. Then switch to `feature-version`, change the same line to `Version: 2.0-feature`, and commit.

```bash
git checkout main
# Edit version.txt to Version: 2.0-main
git add version.txt
git commit -m "Update version on main"

git checkout feature-version
# Edit the same line to Version: 2.0-feature
git add version.txt
git commit -m "Update version on feature branch"

git checkout main
git merge feature-version
```

Open the conflicted file. Resolve it by choosing the intended content and deleting the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).

```bash
git add version.txt
git commit -m "Resolve version conflict"
```

### 4. Demonstrate rebase
Create separate commits on `feature-version` and `main`, then rebase the feature branch:

```bash
git checkout feature-version
# Make and commit a feature change
git add .
git commit -m "Add feature work"

git checkout main
# Make and commit a separate main change
git add .
git commit -m "Update release notes"

git checkout feature-version
git rebase main
```

If a conflict occurs, edit the file, stage it, and continue:

```bash
git add <resolved-file>
git rebase --continue
```

Use `git rebase --abort` to cancel an in-progress rebase. Compare history with:

```bash
git log --oneline --graph --all
```

Finally, merge the rebased branch into main:

```bash
git checkout main
git merge feature-version
```

## Key concepts
- Merge combines branch histories and preserves their development paths.
- Rebase reapplies commits onto another base and rewrites commit history.
- Avoid rebasing branches already shared with collaborators.

## Observation checklist
- [ ] Feature branch created
- [ ] Fast-forward merge observed
- [ ] Conflict deliberately created and resolved
- [ ] Rebase completed
- [ ] Commit graph compared

## Result
Add your actual terminal output and screenshots after completing the steps.
