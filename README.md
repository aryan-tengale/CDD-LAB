# CDD Laboratory

**Course:** Collaborative Development and DevOps (1BCS303)

This public repository contains selected laboratory work based on the course laboratory manual.

## Experiments included

| Experiment | Title | Guide |
|---|---|---|
| 1 | Installation and configuration of Git; local repository and basic Git operations | [Open guide](Experiment-01-Git-Basics/) |
| 2 | Git clone, push, pull, fetch and repository synchronization | [Open guide](Experiment-02-Remote-Repository-Operations/) |
| 3 | Branching, merging, rebasing and resolving merge conflicts | [Open guide](Experiment-03-Branching-Merging-Rebasing/) |
| 4 | GitHub repositories, issues, forks, pull requests and code reviews | [Open guide](Experiment-04-GitHub-Collaboration/) |
| 5 | Team collaboration using GitHub repositories and branching strategies | [Open guide](Experiment-05-Team-Collaboration/) |
| 6 | Continuous Integration workflows using GitHub Actions | [Open guide](Experiment-06-GitHub-Actions-CI/) |
| 7 | Automating build and testing using GitHub Actions workflows | [Open guide](Experiment-07-Automated-Build-and-Testing/) |
| 12 | User personas, user journeys and wireframes | [Open guide](Experiment-12-UX-Research-and-Wireframes/) |
| 13 | High-fidelity UI prototypes and reusable components using Figma | [Open guide](Experiment-13-Figma-UI-Prototyping/) |

**Scope note:** Experiments 8–11 (Docker) and Experiment 14 (Mini Project) are intentionally excluded.

## Repository structure

```text
CDD-LAB/
├── Experiment-01-Git-Basics/
├── Experiment-02-Remote-Repository-Operations/
├── Experiment-03-Branching-Merging-Rebasing/
├── Experiment-04-GitHub-Collaboration/
├── Experiment-05-Team-Collaboration/
├── Experiment-06-GitHub-Actions-CI/
├── Experiment-07-Automated-Build-and-Testing/
├── Experiment-12-UX-Research-and-Wireframes/
├── Experiment-13-Figma-UI-Prototyping/
├── .github/workflows/
│   ├── ci.yml
│   └── build-test.yml
├── index.js
├── sum.js
└── sum.test.js
```

## GitHub Actions samples

- **CI:** runs the Node.js sample on pushes and pull requests to `main`.
- **Build and Test:** runs a Jest test and optional build command across Node.js 18 and 20.

These workflows are included as lab implementations. Check the repository's **Actions** tab for actual run results after GitHub executes them.

## Notes

- Follow the experiment instructions and expected results in the official laboratory manual.
- Replace sample names, email addresses, repository URLs and student details with your own where required.
- Do not commit passwords, access tokens, API keys or other secrets.
- Add your own screenshots, observations, Figma exports, and actual prototype link after completing each activity. No experiment is marked as completed merely because its guide is present.
