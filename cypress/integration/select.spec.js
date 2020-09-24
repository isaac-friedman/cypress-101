describe("Demonstrates how to work with select boxes", () => {
  it("Visits our demo site", () => {
    cy.visit('devexpress.github.io/testcafe/example')
  })

  it("Selects", () => {
    cy.get('#preferred-interface').select('Both')
    cy.get('#preferred-interface').should('have.value', 'Both')
  })
})
