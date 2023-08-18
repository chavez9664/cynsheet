FROM amazoncorretto:17

WORKDIR /app-backend

COPY target/cynsheet-1.0.jar /app-backend/app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]