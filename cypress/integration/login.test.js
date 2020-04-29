describe("Login", () => {
  it("I should be able to login to the application", () => {
    cy.fixture("user.json").then(({ email }) => {
      cy.login(email, Cypress.env("password"))
        .get("#root")
        .should("contain", email);
    });
  });
});
