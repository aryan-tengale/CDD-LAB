# Experiment 4 — GitHub Repositories, Issues, Forks, Pull Requests and Code Reviews

## Aim
Create a GitHub repository and manage issues, forks, pull requests, reviews, and merges.

## Procedure

### 1. Create a repository and issue
1. On GitHub, create a repository named `git-lab-4` and initialize it with a README.
2. Open **Issues → New issue**.
3. Create an issue such as **Add contact form to homepage**, describe the task, and add a suitable label.
4. Comment on the issue and close it when the work is complete. A commit or PR description can also reference `Fixes #ISSUE_NUMBER`.

### 2. Fork and clone
1. Open a classmate's repository and select **Fork**.
2. Clone your fork:

```bash
git clone https://github.com/USERNAME/git-lab-4.git
cd git-lab-4
```

### 3. Create a branch and propose a change
```bash
git checkout -b add-contact-info
```

Edit `README.md` to add suitable contact information, then:

```bash
git add README.md
git commit -m "Add contact info to README"
git push -u origin add-contact-info
```

On GitHub, select **Compare & pull request**, review the diff, add a title and description, and create the pull request. Reference the related issue where appropriate.

### 4. Review and merge
1. Open the PR's **Files changed** tab.
2. Add line comments where useful.
3. Submit **Comment**, **Approve**, or **Request changes**.
4. If changes are requested, update the same branch, commit, and push.
5. Once approved, merge using an available strategy (merge commit, squash, or rebase), then delete the feature branch if appropriate.

## Key concepts
- Issue: tracks a task, bug, or enhancement.
- Fork: personal GitHub copy of another repository.
- Pull request: proposes changes for review and merging.
- Code review: evaluates proposed changes before integration.

## Observation checklist
- [ ] Repository created
- [ ] Issue created and updated
- [ ] Repository forked and cloned
- [ ] Pull request created
- [ ] Review submitted and PR merged

## Result
Attach screenshots of the issue, fork, PR review, and merge after performing the experiment.
