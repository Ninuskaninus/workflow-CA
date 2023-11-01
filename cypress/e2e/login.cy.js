describe("User Login and Profile Access", () => {
  it("should log in and access the user profile", () => {
    // Visit the login page (adjust the URL as needed).
    cy.visit("index.html");
    cy.wait(2000);
    cy.get("button[data-bs-target='#loginModal']:visible").click();

    // Fill in the login form with valid credentials.

    cy.wait(2000);
    cy.get("input[type='email']:visible").type("ninamd@stud.noroff.no");
    cy.get("input[type='password']:visible").type("ninaamdal12345");
    cy.get('button[type="submit"]:visible').click();
  });
});
