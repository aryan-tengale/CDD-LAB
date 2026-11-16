# Experiment 10 — Developing Multi-Container Applications Using Docker Compose

## Aim
Develop and run a multi-container application consisting of a web service and a database service using Docker Compose.

## Requirements
Docker Desktop or Docker Engine with the Compose plugin, and a text editor. Docker and a Dockerfile-based application are prerequisites (Experiments 8 and 9).

## Concepts
- Compose defines related containers as services in one YAML file.
- Compose creates a shared network; services can reach one another by service name.
- A named volume preserves database data beyond an individual container's lifecycle.
- `depends_on` controls startup order; it does not by itself guarantee that the database is ready to accept connections.

## Procedure

### 1. Verify Docker Compose
```bash
docker compose version
```

### 2. Inspect the project
This folder contains:
- `app/`: Node.js application and Dockerfile.
- `docker-compose.yml`: web and MySQL service definitions.

The web application reads `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME` from environment variables. It uses `db` as the database hostname (the Compose service name), not `localhost`.

### 3. Build and start the services
From this folder:

```bash
docker compose build
docker compose up -d
```

### 4. Inspect and test the stack
```bash
docker compose ps
curl http://localhost:5000
docker compose logs
docker compose logs -f web
```

MySQL may take a short time to initialize. If the first request returns HTTP 503, wait briefly and try the endpoint again; a successful response confirms the database connection.

### 5. Stop and remove the stack
```bash
docker compose down
```

To also delete the named database volume and its stored data:

```bash
docker compose down -v
```

## Common errors
- Web service cannot connect: use the service hostname `db`, not `localhost`; inspect logs and credentials.
- Port already in use: stop the conflicting process or change the host-side port mapping.
- Data disappears: retain the named volume; `docker compose down -v` deliberately removes it.
- Database starts slowly: `depends_on` is startup ordering, not a readiness check; wait for MySQL initialization and retry the HTTP request.

## Observation checklist
- [ ] Compose version verified
- [ ] Compose file defines web and database services
- [ ] Services built and started
- [ ] App response confirms database connection
- [ ] Service logs inspected
- [ ] Stack stopped and removed

## Result
Add your actual Compose output, endpoint response, and screenshots after completing the experiment.
