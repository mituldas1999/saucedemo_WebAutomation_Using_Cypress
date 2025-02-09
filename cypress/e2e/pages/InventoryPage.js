class InventoryPage {
    addFirstProductToCart() {
      cy.get('.inventory_item').first().find('button').click();
    }
  
    addSecondProductToCart() {
      cy.get('.inventory_item').eq(1).find('button').click();
    }
  
    goToCart() {
      cy.get('.shopping_cart_link').click();
    }
  
    verifyCartBadge(count) {
      cy.get('.shopping_cart_badge').should('contain', count);
    }
  
    sortProducts(option) {
      cy.get('[data-test="product_sort_container"]').select(option);
    }
  }
  
  export default new InventoryPage();
  