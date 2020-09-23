describe("Browser Actions", () => {
  it("Should load our scraper playground", () => {
    cy.visit("http://books.toscrape.com/index.html", () => {
      cy.url().should("include", "index.html") //Always verify
      cy.log("before refresh")
      cy.reload()
      cy.log("After Reload")
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
  });
})

describe("Checks the price of A Light in the Attic", () => {
  it("Goes to the poetry section", () => {
    cy.get('li').contains('Poetry').click();
    cy.url().should('include', 'poetry');
  });
  it("Finds the book we want", () => {
    cy.get('a').contains('A Light in the ...').click();
    cy.url().should('include', 'a-light-in-the-attic_1000');
  });
  it("checks the price", () => {
    cy.get('.price_color').contains('51.77') //Saves dealing with the currency symbol
  })
})
