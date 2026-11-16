# CDD Lab — Command Execution Record

**Source:** `Lab_Manual_Experiments_1-13.docx` (Experiments 1–13)  
**Execution date:** 16 November 2026  
**Execution environment:** isolated Linux workspace, not the student's MacBook  
**Repository:** `aryan-tengale/CDD-LAB`

This record distinguishes commands actually run from GUI, remote-team, and infrastructure steps that could not be completed in this workspace. Full terminal output is in [`command-results.txt`](command-results.txt).

| Experiment | Execution result | Evidence / limitation |
|---|---|---|
| 1 — Git installation and basic operations | **Executed successfully** | `git --version`, configuration, `git init`, `git status`, `git add`, `git commit`, and `git log` ran in a temporary local repository. |
| 2 — Clone, push, fetch, pull, synchronization | **Executed successfully in a local two-clone simulation** | A local bare remote and two clones reproduced push, fetch, and pull. This was not a push to a separately-created GitHub repository. |
| 3 — Branching, merging, conflicts, rebasing | **Executed successfully** | Created `main` and `feature-version`, performed a fast-forward merge, deliberately caused and resolved a merge conflict, rebased, and merged the rebased branch. |
| 4 — GitHub repositories, issues, forks, PRs, reviews | **Not fully executed** | The manual's fork target is unspecified and a genuine review/approval requires another GitHub user. No peer review is claimed. |
| 5 — Team collaboration and branching strategy | **Not fully executed** | A genuine multi-person collaboration run requires collaborator GitHub usernames and their acceptance of invitations. No team activity is fabricated. |
| 6 — GitHub Actions CI | **Local sample executed; hosted run pending** | `node index.js` ran and printed the expected message. The workflow must be triggered and checked in GitHub Actions after this commit. |
| 7 — Automated build and testing | **Test logic passed; Jest/hosted matrix pending** | A 1-test Node.js built-in test passed. The manual's `npm install --save-dev jest` could not complete because the package registry was unreachable. The repository's Jest workflow is separate and must be checked on GitHub. |
| 8 — Docker images and containers | **Blocked by environment** | Docker CLI/daemon is not installed here. `docker --version`, `docker pull hello-world`, and Compose commands cannot run. |
| 9 — Dockerfile and custom image | **Application smoke test only; container build blocked** | A local HTTP endpoint returned the expected greeting. The manual's Express install could not complete due unavailable npm registry; Docker image build/run could not be executed without Docker. |
| 10 — Docker Compose multi-container app | **Blocked by environment** | Docker and Docker Compose are not installed; the web/MySQL stack was not started. |
| 11 — Java/Python containerization | **Python script executed; Java/Docker blocked** | Python printed the expected greeting. Maven and Docker are not installed, so the Java Maven build and both container builds/runs were not executed. |
| 12 — Personas, journey, wireframes | **Design artifacts prepared** | Added two personas, a journey map, and three low-fidelity screen wireframes. Peer review still requires a classmate/team member. |
| 13 — Figma high-fidelity prototype | **Importable visual assets prepared; Figma actions pending** | Added three high-fidelity screen designs and a Figma handoff specification. A live Figma file, reusable Figma component variants, prototype links, and peer feedback require access to the Figma workspace and a human review. |

## Environment checks

- Git: available (`2.47.3`)
- Node.js: available (`v22.16.0`)
- npm: available, but external package installation timed out because the npm registry was unreachable
- Python 3: available
- Java runtime: available
- Docker / Docker Compose: not installed
- Maven: not installed
- Direct `git clone https://github.com/...` from this workspace: blocked because DNS/network access to GitHub is unavailable. Repository updates are therefore being committed through the connected GitHub integration, not a local `git push`.

## Important

The command log is evidence of commands run in the isolated workspace. It is not a claim that Docker containers, hosted GitHub Actions runs, peer reviews, or Figma prototype interactions were completed. Those items remain explicitly marked pending/blocked rather than being represented by sample output from the manual.
