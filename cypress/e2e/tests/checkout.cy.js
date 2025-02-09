import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout Process', () => {
  let credentials;

  beforeEach(() => {
    // Load the credentials from the fixture
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
  });

  it('completes a purchase', () => {
    // Ensure credentials are loaded properly
    cy.wrap(credentials).should('have.property', 'validUser');

    const { username, password } = credentials.validUser;

    // Use dynamic credentials for login
    LoginPage.visit();
    LoginPage.login(username, password);

    // Perform the checkout process
    InventoryPage.addFirstProductToCart();
    InventoryPage.goToCart();
    CartPage.proceedToCheckout();
    CheckoutPage.enterCheckoutInfo('John', 'Doe', '12345');
    CheckoutPage.clickContinue();
    CheckoutPage.clickFinish();
    CheckoutPage.verifyOrderSuccess();
  });
});
