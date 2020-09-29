describe("Demonstrates how to take screenshots", () => {
  it("takes a full page screenshot", () => {
    cy.visit("https://devexpress.github.io/testcafe/example");
    cy.screenshot({capture: "fullPage"});
  });

  it("screenshots a single element", () => {
    cy.get("header").screenshot();
  });
});
