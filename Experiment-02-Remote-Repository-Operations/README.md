# Experiment 2 — Clone, Push, Pull, Fetch and Repository Synchronization

## Aim
Work with a GitHub remote repository by cloning it, pushing local commits, fetching remote changes, and pulling them into the local branch.

## Requirements
Git, GitHub account, browser, terminal, and internet connection.

## Procedure

### 1. Create and clone a remote repository
Create a GitHub repository named `git-lab-2`, then copy its HTTPS URL.

```bash
cd ~/Desktop
git clone https://github.com/USERNAME/git-lab-2.git
cd git-lab-2
git status
git remote -v
```

Replace `USERNAME` with the repository owner's username.

### 2. Create, commit, and push a file
Create `student.txt` with your own name, USN, subject, and experiment details.

```bash
git status
git add student.txt
git commit -m "Add student details"
git push -u origin main
```

Refresh the GitHub repository page and verify that the file appears.

### 3. Demonstrate fetch and pull with a second clone/user
On Student A's clone, create `message.txt` containing `This file was created by Student A.`, then:

```bash
git add message.txt
git commit -m "Add message file"
git push origin main
```

On Student B's clone:

```bash
git fetch origin
git status
git branch -r
git pull origin main
```

Verify that `message.txt` is now present in Student B's working folder.

## Fetch vs pull
| Command | Behavior |
|---|---|
| `git fetch` | Downloads remote commits/information without integrating them into the current branch |
| `git pull` | Fetches and integrates remote changes into the current branch |

**Remember:** push = local to remote; pull = remote to local.

## Common issues
- Wrong URL: inspect with `git remote -v`; correct with `git remote set-url origin URL`.
- Push rejected: integrate remote changes with `git pull origin main`, resolve conflicts if needed, then push.
- Branch mismatch: check the actual branch using `git branch`.

## Observation checklist
- [ ] Repository cloned
- [ ] Local change committed and pushed
- [ ] Remote change fetched
- [ ] Remote change pulled and verified

## Result
Add your actual command outputs and screenshots here after performing the experiment.
