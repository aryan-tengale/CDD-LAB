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
| 8 | Creating Docker images and containers for simple applications | [Open guide](Experiment-08-Docker-Images-and-Containers/) |
| 9 | Writing Dockerfiles and building custom containerized applications | [Open guide](Experiment-09-Dockerfiles-and-Custom-Images/) |
| 10 | Developing multi-container applications using Docker Compose | [Open guide](Experiment-10-Docker-Compose-Multi-Container/) |
| 11 | Containerizing and executing a Java or Python application using Docker | [Open guide](Experiment-11-Docker-Multi-Stage-Java-Python/) |
| 12 | User personas, user journeys and wireframes | [Open guide](Experiment-12-UX-Research-and-Wireframes/) |
| 13 | High-fidelity UI prototypes and reusable components using Figma | [Open guide](Experiment-13-Figma-UI-Prototyping/) |

**Scope note:** Experiment 14 (Mini Project) is intentionally excluded.

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
├── Experiment-08-Docker-Images-and-Containers/
├── Experiment-09-Dockerfiles-and-Custom-Images/
├── Experiment-10-Docker-Compose-Multi-Container/
├── Experiment-11-Docker-Multi-Stage-Java-Python/
├── Experiment-12-UX-Research-and-Wireframes/
├── Experiment-13-Figma-UI-Prototyping/
└── .github/workflows/
    ├── ci.yml
    └── build-test.yml
```

## GitHub Actions samples

- **CI:** runs the Node.js sample on pushes and pull requests to `main`.
- **Build and Test:** runs a Jest test and optional build command across Node.js 18 and 20.

Check the repository's **Actions** tab for actual run results after GitHub executes the workflows.

## Docker samples

- **Experiment 8:** pulls and runs `hello-world` and Nginx images.
- **Experiment 9:** builds and runs a custom Express application image.
- **Experiment 10:** uses Docker Compose to run a web application with MySQL.
- **Experiment 11:** demonstrates a Java multi-stage build and a Python single-stage build.

The MySQL credentials in the Compose sample are demonstration-only values. Do not reuse them in a real deployment.

## Notes

- Follow the experiment instructions and expected results in the official laboratory manual.
- Replace sample names, email addresses, repository URLs and student details with your own where required.
- Do not commit passwords, access tokens, API keys or other secrets.
- Add your own screenshots, observations, Figma exports, and actual prototype link after completing each activity. A guide or sample file does not mean an experiment has been executed or completed.

## Execution evidence

- [Execution status for Experiments 1–13](Execution-Results/EXECUTION-STATUS.md)
- [Actual terminal command output](Execution-Results/command-results.txt)
- Experiment 12 artifacts: [personas and journey](Experiment-12-UX-Research-and-Wireframes/artifacts/personas-and-journey.md), [low-fidelity wireframes](Experiment-12-UX-Research-and-Wireframes/artifacts/low-fidelity-wireframes.svg)
- Experiment 13 artifacts: [Figma handoff](Experiment-13-Figma-UI-Prototyping/artifacts/figma-handoff.md), [high-fidelity screen concepts](Experiment-13-Figma-UI-Prototyping/artifacts/high-fidelity-screens.svg)

The execution record explicitly separates locally verified work from activities blocked by missing Docker/Maven, unavailable package-registry access, or the need for real collaborators and a signed-in Figma workspace.
