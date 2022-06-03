FROM adoptopenjdk/openjdk11:latest
ARG JAR_FILE=target/inventory-service-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} inventory-service.jar
ENTRYPOINT ["java","-jar","/inventory-service.jar"]
