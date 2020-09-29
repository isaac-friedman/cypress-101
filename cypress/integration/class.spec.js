class BasePage {
  static visitHomePage() {
    cy.visit("https://devexpress.github.io/testcafe/example")
  }

  static wait(ms) {
    cy.wait(ms)
  }
}

class HomePage extends BasePage {
  static scrollToButton() {
    cy.get('#submit-button').scrollIntoView()
  }

  static scrollToTop() {
    cy.get('h1').contains('Example').scrollIntoView()
  }
}

describe("Abstraction with classes in cypress", () => {
  before(function() {
    //runs before all tests in the describe
    HomePage.visitHomePage()
  })

  after( () => {
    //runs at the very end of the describe block
    cy.log("Look! classes!")
  })

  beforeEach( () => {
    //runs before EACH it
  })

  afterEach(() => {
    //runs after EACH it
  })
  it("scrolls up and down a HomePage class", () => {
    HomePage.scrollToButton()
    HomePage.wait(3000)
    HomePage.scrollToTop()
  })
})
