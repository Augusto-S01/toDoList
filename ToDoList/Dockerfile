FROM eclipse-temurin:17-jdk-alpine
COPY target/*.jar app.jar
expose 8000
ENTRYPOINT ["java","-jar","/app.jar"]