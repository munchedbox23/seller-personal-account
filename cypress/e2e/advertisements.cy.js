
describe('checking the functionality of working with advertisements', () => {
  beforeEach(() => {
    cy.intercept('GET', '/advertisements', {
      fixture: 'advertisements.json'
    });
    cy.visit('/');
  })

  it('should render the movies page correctly', () => {
      cy.contains('Стул старинный');
  });

  it('should open the page with a certain advertisement', () => {
    cy.contains('Стул старинный').click();
    cy.url().should('include', '/advertisements/4a89b8e2-5c5b-4d70-a34a-df8e9d5f688f');
    cy.get('[data-cy="price"]').should('contain', 2000);
  });
});
