FROM adoptopenjdk/openjdk11:latest
ARG JAR_FILE=target/order-service-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} order-service.jar
ENTRYPOINT ["java","-jar","/order-service.jar"]
