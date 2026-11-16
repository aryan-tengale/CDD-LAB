# Verified terminal run — 16 November 2026

Environment: isolated Linux terminal. These are real commands run in this session; they are not copied from the lab manual's sample outputs.

## Experiment 1 — Git basics

- `git --version` → `git version 2.47.3`
- Configured repository identity: `Aryan Appasaheb Tengale`, `aryan-tengale@users.noreply.github.com`
- Initialized `experiment-01-git-basics` on `main`
- Created `notes.txt`, ran `git status`, `git add notes.txt`, `git commit`, and `git log --oneline`
- Commit created: `e324fce` (Initial commit: added notes.txt)

## Experiment 2 — clone, push, fetch, pull

GitHub DNS/network access was unavailable from this terminal, so this was run against a local bare Git remote, not GitHub.

- Created local bare remote `remote-exp02.git`
- Cloned it into `exp02-student-a` and `exp02-student-b`
- Created and committed `student.txt`; pushed `main` to the local remote
- Student A created `message.txt`, committed, and pushed it
- Student B ran `git fetch origin`, confirmed it was one commit behind, then ran `git pull origin main`
- Verified `message.txt` existed in Student B's working directory after pull

## Experiment 3 — branches, merge conflict, rebase

- Created `main` and `feature-version`
- Performed a fast-forward merge
- Changed the same line differently on both branches and ran `git merge feature-version`; Git reported the expected content conflict (exit code 1)
- Resolved the conflict, staged the file, and committed the resolution
- Created `feature-rebase`, committed feature work, advanced `main`, ran `git rebase main`, inspected `git log --oneline --graph --all`, and merged the rebased branch
- Final status: clean working tree on `main`

## Experiments 6–7 — Node runtime and test

- Node.js: `v22.16.0`; npm: `10.9.2`
- Ran `node index.js`; output: `Hello from CI/CD lab`
- `npm test` invoked Jest but failed with exit code 127 because `jest` is not installed in this environment
- Ran the same one-case sum assertion with Node directly; output: `PASS: adds 1 + 2 to equal 3` (exit code 0)

## Experiments 8–10 — Docker

Docker is not installed in this terminal.

- `docker --version`: command not found (exit code 127)
- `docker pull hello-world`: command not found (exit code 127)
- `docker ps -a`: command not found (exit code 127)
- `docker build`: command not found (exit code 127)
- `docker compose version`: command not found (exit code 127)

The container/image/Compose procedures are therefore blocked here; no successful container run is claimed.

## Experiment 11 — Java and Python application checks

- Compiled and ran a plain Java `App.java` with `javac App.java && java App`; output: `Hello from a Dockerized Java application!`
- Ran `app.py`; output: `Hello from a Dockerized Python application!`
- `mvn --version`: command not found (exit code 127)
- Docker build was blocked because Docker is not installed

## Network limitation

A direct `git ls-remote https://github.com/aryan-tengale/CDD-LAB.git HEAD` attempt failed because this terminal could not resolve `github.com`. This file is being added through the connected GitHub integration (a GitHub contents commit), not through a terminal `git push`.

## Not executed in this terminal

Experiments 4–5 require GitHub fork/PR workflows and/or another human collaborator; Experiments 12–13 require the intended design/research and live Figma workspace actions. Existing repository artifacts are not evidence that those human/workspace steps were executed in this terminal.
