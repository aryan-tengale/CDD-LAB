# Stage 1: Build the Java application
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Run using a smaller JRE image
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/docker-java-app-1.0-SNAPSHOT.jar app.jar
CMD ["java", "-jar", "app.jar"]
