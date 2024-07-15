describe("Forms Tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test Subcribe Forms", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("victorpelumi3@gmail.com");
    cy.contains(/Successfully subbed: victorpelumi3@gmail.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: victorpelumi3@gmail.com!/i).should(
      "exist"
    );
    cy.wait(3000);
    cy.contains(/Successfully subbed: victorpelumi3@gmail.com!/i).should(
      "not.exist"
    );
    cy.get("@subscribe-input").type("victorpelumi3@gmail.io");
    cy.contains(/invalid email: victorpelumi3@gmail.io!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/invalid email: victorpelumi3@gmail.io!/i).should("exist");
    cy.wait(3000);
    cy.contains(/invalid email: victorpelumi3@gmail.io!/i).should("not.exist");
    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
  });
});
