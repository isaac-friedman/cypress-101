describe("File I/O in cypress", () => {
  it("Writes to a json file", () => {
    cy.writeFile("log.json", {"name": "Isaac", "age": 30})
  });

  it("Reads from a json file", () => {
    cy.readFile("log.json") //verify data from last test
      .its('age')
      .should('eq', 30)
    })
})
