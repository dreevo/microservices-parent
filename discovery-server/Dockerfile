FROM adoptopenjdk/openjdk11:latest
ARG JAR_FILE=target/discovery-server-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} discovery-server.jar
ENTRYPOINT ["java","-jar","/discovery-server.jar"]
