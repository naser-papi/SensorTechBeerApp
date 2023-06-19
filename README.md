
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





