describe("File I/O in cypress", () => {
  it("Writes to a json file", () => {
    cy.writeFile("log.json", {"name": "Isaac", "age": 30})
  })
})
