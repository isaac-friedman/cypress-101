describe("Login form using Zero Bank Example site", () => {
  it("Visits the Login page", () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.url().should('include', 'login.html')
  });
  it("Fills the username", () => {
    cy.get('#user_login').clear()//In case of placeholder
    cy.get('#user_login').type('jschmoe');
  });
  it("Fills the password", () => {
    cy.get('#user_password').clear()
    cy.get('#user_password').type('Asdf!2345')
  });
  it("Checks remember-me box", () => {
    //TODO
  });
  it("submits the form", () => {
    //TODO
  });
  it("displays the error message", () => {
    //TODO
  });
})
