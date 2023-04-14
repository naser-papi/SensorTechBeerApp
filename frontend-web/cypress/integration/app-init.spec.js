describe('App initialization Tests', () => {
    beforeEach(() => {
        cy.seedAndVisit();
    })
    it('Should show all returned products in th table body', () => {
        cy.get("[data-cy=productList] tr")
            .should('have.length', 4);
    });
    it('Monitor Should have tree column with this names: Product,Temperature,Status ', () => {
        cy.get("[data-cy=monitor-columns] th")
            .should('have.length', 3);

        cy.get("[data-cy=monitor-columns] > th:nth-of-type(1)")
            .invoke("text")
            .should("equal", "Product");

        cy.get("[data-cy=monitor-columns] > th:nth-of-type(2)")
            .invoke("text")
            .should("equal", "Temperature");

        cy.get("[data-cy=monitor-columns] > th:nth-of-type(3)")
            .invoke("text")
            .should("equal", "Status");
    })

});
