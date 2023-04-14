Cypress.Commands.add("seedAndVisit", (products = 'fixture:products') => {
    cy.server();
    cy.route("GET", "http://localhost:8081/api/productList", products);
    cy.visit("/");
});