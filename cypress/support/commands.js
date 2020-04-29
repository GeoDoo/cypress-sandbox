Cypress.Commands.add("login", (email, password) => {
  cy.log(`Logging user with ${email}`);

  cy.visit("/");

  cy.get("#email").type(email);
  cy.get("#password").type(password);
});
