describe('Monitor Part test', () => {
    beforeEach(() => {
        cy.seedAndVisit([{
            "id": "1",
            "name": "Pilsner",
            "minimumTemperature": 7,
            "maximumTemperature": 13
        },]);
    })
    const SERVER_URL = "http://localhost:8081";

    // it('should show "too low" when sensor return less than min temp',()=>{
    //     cy.route('GET',`${SERVER_URL}/api/temperature/1`,{id:1,temperature:-6,status:1})
    //     cy.get("[data-cy=product1status]")
    //         .should("contain","too low");
    // })
    //
    // it('should show "too high" when sensor return 2 in status',()=>{
    //     cy.route('GET',`${SERVER_URL}/api/temperature/1`,{id:1,temperature:8,status:2})
    //     cy.get("[data-cy=product1status]")
    //         .should("contain","too high")
    // })
    // it('should show "all good" when sensor return 0 in status',()=>{
    //     cy.route('GET',`${SERVER_URL}/api/temperature/1`,{id:1,temperature:5,status:0})
    //     cy.get("[data-cy=product1status]")
    //         .should("contain","all good")
    // })

    //Refactored version:

    it('should show correct status text and have correct class according to the sensor status', () => {
        const statuses = [{
            key: 0,
            value: "all good",
            temp: 8,
            className: "normal"
        }, {
            key: 1,
            value: "too low",
            temp: 2,
            className: "tooLow"
        }, {
            key: 2,
            value: "too high",
            temp: 20,
            className: "tooHigh"
        }]
        cy.wrap(statuses).each(status => {
            cy.route('GET', `${SERVER_URL}/api/temperature/1`, {id: 1, temperature: status.temp, status: status.key})
            cy.get("[data-cy=product1status]")
                .should("have.class", status.className)
                .should("contain", status.value);
            cy.wait(6000);
        })

    })


});
