## Dependencies in SpringBoot:
- Spring Web
- Spring DevTool
- Spring Data JPA
- MySql server

## Run the BackEnd:

- Make sure the backend runs on the Port:8080, since frontEnd is for now using LocalHost:8080 for all ApiEndPoints.
- Make sure you configure the database (mySql) correctly in application.properties as without it the application would not run as expected.

## Run the FrontEnd:

Firstly RUN THE FOLLOWING COMMAND TO INSTALL THE NECESSARY DEPENDENCIES IN THE PROJECT:

			npm install

Secondly to run the server Run the following command:

			npm start

## About Application :

A wiki-pedia app that we can store plaintext wikis in (the website was developed in only one day):
- The application allows you to navigate through multiple wikis that are available on the website.
- You can post your wiki on the application.
- You can Update your existing wiki.
- You can Delete your existing wiki.

—— The application is built in two components a RESTapi and a React frontEnd, they are loosely coupled and only talk to each other using the api Mappings ——
