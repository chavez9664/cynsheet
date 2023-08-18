# cynsheet

## Description
This application runs in the browser and provides a prototype character sheet for
a table-top role playing game I am creating.\
It has the following features:
* Character creation.
* Character data storage on a mongodb database.
* View, Update, and Delete any characters stored in the database.

## Specifications
The backend of this program utilizes Spring Boot and interfaces with a locally hosted Mongodb database.\
The frontend of this program utilizes React to provide the ux and send api requests to the backend.\
Mongodb is the database of choice. The docker-compose file creates a mongo container which interfaces
with the other two services.

## Instructions
* Install Docker
* Open a terminal in the root folder; enter and run docker-compose up in the terminal.
* Use Docker to open the browser or navigate to localhost:3000 on a browser after containers are running.
* Application does not initialize with any characters, they will begin to appear on the roster/main menu as they are created.
