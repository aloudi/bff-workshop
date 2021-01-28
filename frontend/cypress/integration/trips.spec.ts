describe("Trips page", () => {
  beforeEach(() => {
    cy.visit("/trips2")
  })

  it("shows the emails", () => {
    cy.contains("luke.hardin@automatize.com")
  })
})