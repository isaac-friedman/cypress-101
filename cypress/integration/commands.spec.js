describe("Demonstrates custom commands", () => {
  it("Logs in using our login command", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.login("jschmoe", "bad password");
  });
});
