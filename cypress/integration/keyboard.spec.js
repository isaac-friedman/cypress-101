describe("Demonstrates keyboard functions", () => {
  it("searches by pressing enter", () => {
    cy.visit("http://zero.webappsecurity.com/");
    cy.get('#searchTerm').type("derivatives {g} {enter}")
  })
})
