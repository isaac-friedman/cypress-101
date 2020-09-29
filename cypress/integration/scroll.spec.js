describe("Scrolls down and back up on a page", () => {
  it("Scrolls down and back up", () => {
    cy.visit("https://devexpress.github.io/testcafe/example");
    cy.get("#submit-button").scrollIntoView();
    cy.wait(2000);
    cy.get("h1").contains("Example").scrollIntoView();
    cy.wait(2000);
  });
});
