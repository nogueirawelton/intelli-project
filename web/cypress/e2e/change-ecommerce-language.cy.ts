describe("ecommerce language", () => {
  it("the home page should be in portuguese", () => {
    cy.visit("/");

    cy.location("pathname").should("include", "/pt");
  });

  it("should be able to change the ecommerce language", () => {
    cy.visit("/");

    cy.get("[data-current-locale='pt']").click();

    cy.get("[data-locale]").should("have.length", 2);

    cy.get("[data-locale='en']").click();

    cy.location("pathname").should("include", "/en");

    cy.get("header nav a").should("contain.text", "Home");
  });

  it("should not be able to access an non existent locale", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.visit("/es", { failOnStatusCode: false }).contains("404");
  });
});
