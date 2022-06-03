FROM adoptopenjdk/openjdk11:latest
ARG JAR_FILE=target/product-service-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} product-service.jar
ENTRYPOINT ["java","-jar","/product-service.jar"]
