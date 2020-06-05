describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('tests', () => {
        cy.visit ('/restaurant');
        cy.get('[data-cy=restaurantName]').should('contain', 'Le Peep');
      });
  });