describe('User Login and Profile Access', () => {
  it('should clear local-storage ', () => {
    cy.visit('index.html');
    cy.wait(2000);
    cy.get("button[data-bs-target='#loginModal']:visible", { multiple: true })
      .first()
      .click();

    cy.wait(2000);
    cy.get("input[type='email']:visible").type('ninamd@stud.noroff.no');
    cy.get("input[type='password']:visible").type('ninaamdal12345');
    cy.get('button[type="submit"]:visible').click();

    cy.wait(2000);
    cy.get("button[data-auth='logout']:visible").click();

    cy.window()
      .its('localStorage')
      .invoke('getItem', 'token')
      .should('not.exist');
  });
});
