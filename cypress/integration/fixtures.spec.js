describe("Demonstrates fixtures", () => {
  it("Visits the Login page", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
    cy.title().should("eq", "Zero - Log in");
  });

  it("Tries to log in", () => {
    cy.fixture("users").then((users) => {
      const name = users.name;
      const pass = users.pass;
      cy.get("#user_login").type(name);
      cy.get("#user_password").type(pass);
    });
  });
});
