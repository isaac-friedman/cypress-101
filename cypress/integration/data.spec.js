describe("File I/O in cypress", () => {
  it("Writes to a json file", () => {
    cy.writeFile("log.json", {"name": "Isaac", "age": 30})
  });

  it("Reads from a json file", () => {
    cy.readFile("log.json") //verify data from last test
      .its('age')
      .should('eq', 30)
  })
  it("Reads and verifies browser document content", () => {
    cy.visit("https://example.com");
    cy.wait(2000);
    cy.document().its('contentType').should('eq', 'text/html')
  })
})
