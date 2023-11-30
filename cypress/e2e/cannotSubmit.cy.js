describe('User Login and Profile Access', () => {
  it('should log in and access the user profile', () => {
    cy.visit('index.html');
    cy.wait(2000);
    cy.get("button[data-bs-target='#loginModal']:visible").click();

    cy.wait(2000);
    cy.get("input[type='email']:visible").type('wrong@stud.noroff.no');
    cy.get("input[type='password']:visible").type('wrongpassword');
    cy.get('button[type="submit"]:visible').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include(
        'Either your username was not found or your password is incorrect',
      );
    });

    cy.window()
      .its('localStorage')
      .invoke('getItem', 'token')
      .should('not.exist');
  });
});
