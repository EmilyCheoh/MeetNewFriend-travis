describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('tests', () => {
        cy.visit ('/restaurant');
        cy.get('[data-cy=restaurantName]').should('contain', 'Le Peep');

        cy.get('[data-cy=view]').click();
        cy.get('[data-cy=joined]').should('contain', 'Events you\'ve joined');
      });
  });