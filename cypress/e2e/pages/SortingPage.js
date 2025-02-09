class SortingPage {
    sortByPriceLowToHigh() {
        cy.get('[data-test="product-sort-container"]').select('lohi');
    }
  
    sortByPriceHighToLow() {
        cy.get('[data-test="product-sort-container"]').select('hilo');
    }
  
    sortByNameAtoZ() {
        cy.get('[data-test="product-sort-container"]').select('az');
    }
  
    sortByNameZtoA() {
        cy.get('[data-test="product-sort-container"]').select('za');
    }
  }
  
  export default new SortingPage();
  