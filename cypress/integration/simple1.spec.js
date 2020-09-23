describe("Browser Actions", () => {
  it("Should load our scraper playground", () => {
    cy.visit("http://books.toscrape.com/index.html", () => {
      cy.url().should("include", "index.html") //Always verify
    });
  });
  it("Should go to the Science Fiction section", () => {
    cy.get('li') //BAD idea to not have unique selectors to use
      .contains('Science Fiction') //BAD idea to select on text that can always change
      .click()
    cy.url().should('include', 'science-fiction'); //verify
  });

  it("Should display correct number of results",  () => {
    cy.get('.product_pod').its('length').should('eq', 16);
  })
})
