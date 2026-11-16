# Experiment 11 — Containerizing and Executing a Java or Python Application Using Docker

## Aim
Containerize a Java (or Python) application end-to-end using Docker, including building a compiled artifact and running it inside a minimal runtime image.

## Requirements
- Docker
- Java path: JDK 17+ and Maven installed locally (optional for local verification)
- Python alternative: Python 3

## Concepts
- A multi-stage build uses one stage with build tools and a later, smaller stage for runtime.
- JDK includes compiler and development tools; JRE contains what is needed to run Java bytecode.
- The compiled JAR is an artifact copied from the build stage to the runtime stage.

## Part A — Java application (primary path)

### 1. Create the Maven application
The sample Maven project is included in `java-app/`.

To create a fresh project using the manual's command:

```bash
mvn archetype:generate -DgroupId=com.lab -DartifactId=docker-java-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
cd docker-java-app
```

The included `App.java` prints:

```text
Hello from a Dockerized Java application!
```

### 2. Build and verify locally (optional)
```bash
mvn package
java -cp target/docker-java-app-1.0-SNAPSHOT.jar com.lab.App
```

### 3. Build the multi-stage image
The included Java Dockerfile uses Maven/JDK 17 in the build stage and a JRE 17 Alpine runtime stage.

```bash
cd java-app
docker build -t javaapp:1.0 .
```

### 4. Run the container and inspect the image
```bash
docker run --rm javaapp:1.0
docker images javaapp
```

The container should print the Java application's greeting. The final image contains the runtime and JAR, not the Maven build environment.

## Part B — Python alternative
The `python-app/` folder contains `app.py` and a single-stage Dockerfile.

```bash
cd python-app
docker build -t pythonapp:1.0 .
docker run --rm pythonapp:1.0
```

Expected output: `Hello from a Dockerized Python application!`

## Common errors
- JAR not found: ensure the artifact path and filename in `COPY --from=build` match Maven's output.
- Wrong Java version: align the Maven image and project compiler version.
- Console app exits immediately: expected for a program that prints and exits; a web server must remain in the foreground.

## Observation checklist
- [ ] Java app built and verified locally
- [ ] Multi-stage Dockerfile created
- [ ] Java image built and container executed
- [ ] Final image inspected
- [ ] Python alternative built and run

## Result
Add your actual build logs, container output, and screenshots after completing the experiment.
