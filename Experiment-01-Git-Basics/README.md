# Experiment 1 — Installation and Configuration of Git

## Aim
Install and configure Git, create a local repository, and perform basic operations: initialize, track, stage, commit, and view history.

## Requirements
- Git (latest stable release)
- Git Bash on Windows or Terminal on Linux/macOS
- Text editor

## Procedure

### 1. Install and verify Git
- Windows: install from https://git-scm.com/downloads.
- Ubuntu/Debian: `sudo apt update && sudo apt install git -y`
- macOS with Homebrew: `brew install git`

```bash
git --version
```

### 2. Configure Git
Replace the sample identity with your own GitHub-associated details.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --list
```

### 3. Create and initialize a local repository

```bash
mkdir git-lab-1
cd git-lab-1
git init
git status
```

### 4. Track and commit a file
Create `notes.txt` containing `This is my first Git repository.`

```bash
git status
git add notes.txt
# Or stage all changes:
git add .
git status
git commit -m "Initial commit: added notes.txt"
git log
git log --oneline
```

## Key concepts
- Working directory: files currently being edited.
- Staging area: changes selected for the next commit.
- Local repository: commit history stored in `.git`.
- `git add` stages changes; `git commit` records them.

## Common issues
- `git is not recognized`: install Git and restart the terminal.
- `Please tell me who you are`: configure `user.name` and `user.email`.
- `fatal: not a git repository`: move into the folder initialized with `git init`.

## Observation checklist
- [ ] Git version verified
- [ ] Username and email configured
- [ ] Local repository initialized
- [ ] File staged and committed
- [ ] Commit history viewed

## Result
Record your actual observations and add terminal screenshots in this folder after completing the experiment.
