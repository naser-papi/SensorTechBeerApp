describe('manage unexpected errors', () => {
  const SERVER_URL = 'http://localhost:8081';
  it('should show corresponding error while server return Error 500', () => {
    cy.intercept('GET', `${SERVER_URL}/productList`, {
      statusCode: 500,
      body: 'error',
    });
    cy.visit('/');
    cy.wait(2000);
    cy.get('[data-cy="errorBox"]').should('be.visible');
  });

  it('should show corresponding error while sensor return error', () => {
    cy.seedAndVisit([
      {
        id: '1',
        name: 'Pilsner',
        minimumTemperature: 4,
        maximumTemperature: 6,
      },
    ]);
    cy.intercept('GET', `${SERVER_URL}/temperature/1`, {
      statusCode: 500,
      body: 'error',
    });
    cy.visit('/');
    cy.wait(1000);
    cy.get('[data-cy="errorBox"]').should('be.visible');
  });
});
