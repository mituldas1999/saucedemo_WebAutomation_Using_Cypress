import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Add to Cart Functionality', () => {
  let credentials;

  beforeEach(() => {
    // Load the credentials from the fixture
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
  });

  it('adds products to the cart', () => {
    // Ensure credentials are loaded properly
    cy.wrap(credentials).should('have.property', 'validUser');

    const { username, password } = credentials.validUser;

    // Use dynamic credentials for login
    LoginPage.visit();
    LoginPage.login(username, password);

    // Perform the cart actions
    InventoryPage.addFirstProductToCart();
    InventoryPage.addSecondProductToCart();
    InventoryPage.verifyCartBadge(2);
    InventoryPage.goToCart();
    CartPage.verifyCartItemCount(2);
  });
});
