Cypress.Commands.add("login", (email, password) => {
  cy.log(`Logging user with ${email}`);
});
