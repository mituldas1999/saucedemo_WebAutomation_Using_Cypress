import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Cart Badge Count Validation', () => {
  let credentials;

  beforeEach(() => {
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
  });

  it('adds and removes products from the cart', () => {
    cy.wrap(credentials).should('have.property', 'validUser');

    const { username, password } = credentials.validUser;

    // Login with dynamic credentials
    LoginPage.visit();
    LoginPage.login(username, password);

    // Test actions
    InventoryPage.addFirstProductToCart();
    InventoryPage.verifyCartBadge(1);
    InventoryPage.addSecondProductToCart();
    InventoryPage.verifyCartBadge(2);
    InventoryPage.goToCart();
    CartPage.removeFirstItem();
    InventoryPage.verifyCartBadge(1);
  });
});
