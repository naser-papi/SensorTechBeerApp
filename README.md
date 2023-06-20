
<h1 style="text-align: center">
 SensorTech Beer App
</h1>

## Full Description of the scenario:

SensorTech is a company that specialises in IoT, more specifically sensors. One of their
customers is a local craft brewery that uses refrigerated beer containers to transport every
different beer they produce to pubs around the region. They hired SensorTech to build a simple
solution that would let them know the current temperature of each beer container in their truck
and would notify them when a temperature is outside the correct range.
Each craft beer has its own specific refrigeration needs while being transported:

- Beer 1 (Pilsner): 4-6°C
- Beer 2 (IPA): 5-6°C
- Beer 3 (Lager): 4-7°C
- Beer 4 (Stout): 6-8°C
- Beer 5 (Witbier): 3-5°C
- Beer 6 (Pale Ale): 4-6°C

The brewery rushed SensorTech to deliver a working solution before the annual Craft Beer
Festival, when sales (and delivery) of beer goes through the roof. As it unfortunately tends to
happen, their engineers didn't pay much attention to design, code quality or automated testing
in order to hit the date. But SensorTech has now hired Pragmateam to improve and deliver new
features to this solution.
As a Pragmateam software engineer, this is your
first week working with this client and you are
currently on a break from the Discovery workshop,
where the team is planning the next release. You
decide to pick up a card from the Tech Debt
Backlog and work on it. The card says:
Improve test coverage (refactor if needed)

## solution

This is a full-stack javascript (node/react) application for SensorTech company in order to monitor the current
temperature of each beer container in the Brewery trucks.
I changed the project from tow separated repo to a single repo with my favorite structure.
this project has two folders:

- 1- Backend (contains a very simple code to manage needed APIs about sensors statues)

- 2- frontend-web (contains a CRA code to show the list of sensors and current states)

# backend

we have tow different get route in the backed code:

- /api/productList that returns the list of available products (beers)
  - here is the source code: [click here](/backend/index.js)
- /api/temperature/:id that return current temperature of beer each holder by passed id
  - you can see the code here: [click here](/backend/index.js)
  - this method uses a utility function to normalize the result object
    with a specific property named "status" that shows how far temperature is away from normal temp.

# backed tests

all tests for this application are implemeted by utilizing Cypress E2E test tool,
<br/>and I have used ["@cypress/code-coverage"](https://docs.cypress.io/guides/tooling/code-coverage) plugin to monitor
code-coverage reports.
<br/>additionally I have used [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api) plugin to visualize
the API test window.
<br/>in my opinion, by utilizing this plugin there is no need to use PostMan or swagger to test APIs anymore
<br/>there are two tests that are implemented in [backend.cy.js](/backend/cypress/e2e/backend.cy.js) as spec a file:

- [List Of Products](/backend/cypress/e2e/backend.cy.js) test result:

![List Of Products](/docs/images/1.png "List Of Products test result")

- [Get Product current state](/backend/cypress/e2e/backend.cy.js) test result:

![Current State of a product](/docs/images/2.png "get temperature of a beer")

# code coverage

in order to monitor the code coverage I utilize the cypress/code-coverage plugin
and by using an excellent article in [this address](https://glebbahmutov.com/blog/backend-coverage/)
now the report of code coverage is available [here](/docs/index.html) and you can browse and deep into the report.

