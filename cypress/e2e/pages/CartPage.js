class CartPage {
    removeFirstItem() {
      cy.get('.cart_item').first().find('.cart_button').click();
    }
  
    proceedToCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
  
    verifyCartItemCount(count) {
      cy.get('.cart_item').should('have.length', count);
    }
  }
  
  export default new CartPage();
  