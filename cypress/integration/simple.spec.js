describe("Hello world test", () => {
  it('True should be true', () => {
    expect(typeof NaN).to.equal("number")
  });

  it('False should be false', () => {
    expect(0 == 0).to.equal(true)
  })
});

describe("Breaking up describe blocks is helpful for readability", () => {
  it("Shows what happens when truth is false", () => {
    expect(true).to.equal(false)
  })
});

describe("Visiting URLs", () => {
  it("Illustrates the timeout property", () => {
    cy.visit('https://exampel.com', {timeout: 10000}) //milliseconds
  });

  it("Goes to example.com", () => {
    cy.visit('https://example.com');
  });
  it("Illustrates the most simple assertions", () => {
    cy.get('h1').should('be.visible');
  });
  it("Illustrates a failed assertion", () => {
    cy.get('h6').should('be.visible');
  });
})
