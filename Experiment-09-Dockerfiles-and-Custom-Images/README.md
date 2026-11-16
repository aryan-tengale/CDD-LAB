# Experiment 9 — Writing Dockerfiles and Building Custom Containerized Applications

## Aim
Write a Dockerfile and build a custom Docker image for a simple application, then run and test it as a container.

## Requirements
Docker, text editor, and Node.js for optional local testing.

## Procedure

### 1. Create the Node.js application
The sample application is included in this folder as `app.js` and `package.json`.

To recreate it from a terminal:

```bash
mkdir docker-lab-9
cd docker-lab-9
npm init -y
npm install express
```

Create `app.js`:

```javascript
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from a Dockerized Node.js app!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 2. Write the Dockerfile
The included `Dockerfile` uses these instructions:
- `FROM`: base image.
- `WORKDIR`: working directory inside the image.
- `COPY`: copies files into the image.
- `RUN`: executes commands during image build.
- `EXPOSE`: documents the application port.
- `CMD`: default container startup command.

### 3. Exclude unnecessary build-context files
The included `.dockerignore` excludes `node_modules`, npm logs and `.git`.

### 4. Build and inspect the image

```bash
docker build -t myapp:1.0 .
docker images
```

Run these commands from the folder containing the Dockerfile.

### 5. Run and test the container

```bash
docker run -d -p 5000:5000 --name myapp-container myapp:1.0
curl http://localhost:5000
docker logs myapp-container
```

Expected HTTP response: `Hello from a Dockerized Node.js app!`

### 6. Optional: publish to Docker Hub
Replace `yourusername` with your Docker Hub username.

```bash
docker login
docker tag myapp:1.0 yourusername/myapp:1.0
docker push yourusername/myapp:1.0
```

## Common errors
- Dockerfile not found: run `docker build` in the correct folder or specify the build context.
- Application unreachable: verify the app listens on port 5000 and the port mapping is correct.
- npm install fails: copy package files before running npm install.
- Large image: exclude `node_modules` and unnecessary files using `.dockerignore`.

## Observation checklist
- [ ] Node.js application created
- [ ] Dockerfile and .dockerignore created
- [ ] Custom image built and listed
- [ ] Container started and endpoint tested
- [ ] Logs inspected
- [ ] Optional Docker Hub push performed

## Result
Add your actual build output, curl response, and screenshots after completing the experiment.
