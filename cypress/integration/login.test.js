describe("Login", () => {
  it("I should be able to login to the application", () => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
  });
});