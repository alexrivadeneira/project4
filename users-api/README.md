Below you will find:
- information about this application,
- how to start the app,
- and how to run the tests.

## About this Application

This work in progress application is the beginning of an interface that's supposed to be built on top of data from the New York City data API.
The main objective with this application was to test every aspect of setting up a basic user model.  In this applicaiton you will find API feature tests, integration tests and basic UI tests testing CRUD functionality via a React user interface.

## Deployed Application

You can find the deployed application here: http://alexnycapp.s3-website-us-west-1.amazonaws.com
The users API is deployed here: http://ec2-54-183-174-155.us-west-1.compute.amazonaws.com:8080/users

## How to Start the App

- Clone the repo
- idea build.gradle
- $ docker-compose up

Getting the React UI up:
- cd into /users-ui
- npm install
- npm start

## How to run the tests
- Make sure docker-compose isn't still running (check with $ docker ps)
- Check the docker-config.yml file in the root directory to check postgres settings
- ./gradlew allTests
- to run individual tests, run ./gradlew -Dtest.single={TESTNAME} test
