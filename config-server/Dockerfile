FROM adoptopenjdk/openjdk11:latest
ARG JAR_FILE=target/config-server-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} config-server.jar
ENTRYPOINT ["java","-jar","/config-server.jar"]
