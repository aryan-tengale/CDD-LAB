# Experiment 8 — Creating Docker Images and Containers for Simple Applications

## Aim
Install Docker and understand the difference between images and containers by pulling, running, and managing containers from existing images.

## Requirements
- Docker Desktop (macOS/Windows) or Docker Engine (Linux)
- Terminal
- Virtualization enabled where required, administrator/sudo access, and internet connection

## Procedure

### 1. Install and verify Docker
- macOS/Windows: install Docker Desktop from https://www.docker.com/products/docker-desktop and start it.
- Ubuntu:

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
```

Verify:

```bash
docker --version
```

### 2. Pull and inspect an image

```bash
docker pull hello-world
docker images
```

### 3. Run a container from the image

```bash
docker run hello-world
```

The output should include Docker's confirmation message.

### 4. Run an Nginx web server container

```bash
docker pull nginx
docker run -d -p 8080:80 --name my-nginx nginx
```

The `-d` option runs in the background. The `-p 8080:80` option maps host port 8080 to container port 80.

### 5. Verify and inspect the container
Open http://localhost:8080 in a browser, or run:

```bash
curl http://localhost:8080
docker ps
docker ps -a
```

### 6. Stop and clean up

```bash
docker stop my-nginx
docker rm my-nginx
docker rmi nginx
```

## Important concepts
- Image: read-only template used to create containers.
- Container: running or stopped instance of an image.
- Docker Hub: registry for storing and sharing images.
- Daemon: background service that manages Docker objects.
- Docker architecture: Docker CLI client → Docker daemon → registry (such as Docker Hub).

## Common errors
- Cannot connect to daemon: start Docker Desktop or the Docker service.
- Port already allocated: use another host port, e.g. `-p 8081:80`.
- Permission denied on Linux: check Docker group permissions or use sudo as appropriate.

## Observation checklist
- [ ] Docker installed and version verified
- [ ] hello-world image pulled and run
- [ ] Nginx container started and opened in browser
- [ ] Running and stopped containers listed
- [ ] Container and image removed

## Result
Add your actual terminal output and screenshots after completing the experiment.
