class CheckoutPage {
    enterCheckoutInfo(firstName, lastName, postalCode) {
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(postalCode);
    }
  
    clickContinue() {
      cy.get('[data-test="continue"]').click();
    }
  
    clickFinish() {
      cy.get('[data-test="finish"]').click();
    }
  
    verifyOrderSuccess() {
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
    }
  }
  
  export default new CheckoutPage();
  