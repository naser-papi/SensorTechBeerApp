describe("manage unexpected errors", () => {
    const SERVER_URL = "http://localhost:8081";
    beforeEach(() => {
        cy.server();
    })
    it('should show corresponding error while server return Error 500', () => {
        cy.route({
            method: "GET",
            url: `${SERVER_URL}/api/productList`,
            response: '',
            status: 500
        });
        cy.visit("/");
        cy.wait(1000);
        cy.get("[data-cy=listLoadError]")
            .should("be.visible")
    })

    it('should show corresponding error while sensor return error', () => {
        cy.seedAndVisit([{
            "id": "1",
            "name": "Pilsner",
            "minimumTemperature": 7,
            "maximumTemperature": 13
        },])
        cy.route({
            method: "GET",
            url: `${SERVER_URL}/api/temperature/1`,
            response: '',
            status: 500
        });
        cy.visit("/");
        cy.wait(1000);
        cy.get("[data-cy=statusError]")
            .should("be.visible")
    })
})