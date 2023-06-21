import sensors from '../fixtures/sensors.json';

describe('Monitor Part test', () => {
  beforeEach(() => {
    cy.seedAndVisit(sensors.products);
  });
  const SERVER_URL = 'http://localhost:8081';

  it('should show correct status text and have correct class according to the sensor status', () => {
    cy.wrap(sensors.statues).each((node) => {
      cy.intercept('GET', `${SERVER_URL}/temperature/${node.key}`, {
        id: node.key,
        temperature: node.temp,
        status: node.status,
      });
    });
    cy.wrap(sensors.statues).each((node) => {
      cy.get(`#pid${node.key}`)
        .find('[data-cy=statusCol]')
        .should('contain', node.value)
        .and('have.class', node.className);
    });
  });
});
