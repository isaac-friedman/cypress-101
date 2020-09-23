describe("screen sizes", () => {
  before(() => {
    cy.visit("https://example.com")
  });

  it('720p', () => {
    cy.viewport(1080, 720);
    cy.wait(5000);
  });

  it('1020p', () => {
    cy.viewport(1920, 1080);
    cy.wait(5000);
  });

  it('iphone X', () => {
    cy.viewport('iphone-x');
    cy.wait(5000);
  });
})
