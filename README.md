
# SensorTech Beer App

This is a full-stack javascript (node/react) application for SensorTech company in order to monitor the current
temperature of each beer container in the Brewery trucks.
I had a little study on existing code.
First I decided to use yarn instead of npm.
I changed the project to my favorite structure.
my project has two folders:

## 1- Backend (contains the code-challenge-server-nodejs)

## 2- frontend-web (contains the code-challenge-client-react)

I started with the backend with some manual testing and functionality and was familiar with the current functions.
I decided to move the business of checking temperature, and all available products to the backend layer.

## I have used Cypress.io for TDD and here is the instruction to run implemented tests:

To open the cypress window and run tests please run this command in the frontend-web folder:

### yarn localhost

You should see three different test categories in the cypress window and by clicking on each one you can run all
implemented tests for this app.

You should all my written test in this path:

## frontend-web\cypress\integration

### (fixture folder contains the mock data)

all added scenarios are well documented in its file, please.

## Questions :

#### 1- If refrigeration (container) temperature is less or more than normal for a while what should happen?

#### 2- how about the history or log of temperature, I think we should record a log of sensor's temperature.

#### 3- Do you need to play a sound when the temperature goes out of range?

## Tests that can be added:

#### 1- client should call api just in 5 seconds.

## TODOs:

#### 1- if a sensor temperature goes out of range for a while we can set the product as a spoiled one.

#### 2- add more style and implement a user friendly monitor view.

#### 3- play sounds when temperature goes out of range.

#### 4- seprate loading list of products in a different function;

#### 5- integrating the cypress with CI/CD before publish for production

