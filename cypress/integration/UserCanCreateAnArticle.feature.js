describe("Admin can fill create article form and submit", () => {

  describe("Article creation - happy path", () => {

  before(() => {
    cy.intercept("POST", "/api/articles", {
      fixture: "createarticle.json",
    }).as("getArticle");

    cy.visit("/");
    cy.get("[data-cy=title-input]").type("Tennis Title");
    cy.get("[data-cy=body-input]").type(
      "This is a story about tennis"
    );
    cy.get("[data-cy=category-select").select("Tennis");
    cy.get("[data-cy=submit-button").click();
  });

  it("is expected to make a POST request to the API", () => {
    cy.wait("@getArticle").its("request.method").should("eq", "POST");
  });

  it("is expected to display a successful message", () => {
    cy.get('[data-cy=message-box]')
      .should("contain.text", "Article created!");
  });
});
})

