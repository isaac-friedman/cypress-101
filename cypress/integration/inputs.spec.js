describe("Login form using Zero Bank Example site", () => {
  it("Visits the Login page", () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.url().should('include', 'login.html')
  });
  it("Fills the username", () => {
    cy.get('#user_login').as('un'); 
    cy.get('@un').clear()//In case of placeholder
    cy.get('@un').type('jschmoe');
  });
  it("Fills the password", () => {
    cy.get('#user_password').clear()
    cy.get('#user_password').type('Asdf!2345')
  });
  it("Checks remember-me box", () => {
    cy.get('#user_remember_me').check()
  });
  it("submits the form", () => {
    cy.contains('Sign in').click() //HORRIBLE anti pattern
  });
  it("displays the error message", () => { //Should really be a .then after the form submission
    cy.get('.alert-error').should('be.visible')
  });
})
