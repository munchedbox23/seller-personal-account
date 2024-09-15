describe('Роутинг', () => {
  it('Переход на главную страницу', () => {
    cy.visit('/');
    //Должна произойти переадресация
    cy.url().should('include', '/advertisements');
    cy.get('h2').contains('Ваши объявления');
  });
  it('Переход открывает страницу объявлений', () => {
    cy.visit('/advertisements');
    cy.url().should('include', '/advertisements');
    cy.contains('Стул старинный');
  });
  it('Переход открывает страницу заказов', () => {
    cy.visit('/orders'); 
    cy.url().should('include', '/orders');
    cy.get('h2').contains('Заказы');
  });
  it('Переход открывает несуществующий маршрут ', () => {
    cy.visit('/fasfasfasf'); 
    cy.get('[data-testid="NotFoundPage"]').should('exist');
  });
}) 
