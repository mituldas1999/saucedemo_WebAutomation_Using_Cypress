class LogoutPage {
    openMenu() {
      cy.get('.bm-burger-button').click();
    }
  
    clickLogout() {
      cy.get('#logout_sidebar_link').click();
    }
  
    verifyLogoutSuccess() {
      cy.url().should('include', 'saucedemo.com');
    }
  }
  
  export default new LogoutPage();
  