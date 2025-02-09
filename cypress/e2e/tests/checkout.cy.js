import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout Process', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('completes a purchase', () => {
    InventoryPage.addFirstProductToCart();
    InventoryPage.goToCart();
    CartPage.proceedToCheckout();
    CheckoutPage.enterCheckoutInfo('John', 'Doe', '12345');
    CheckoutPage.clickContinue();
    CheckoutPage.clickFinish();
    CheckoutPage.verifyOrderSuccess();
  });
});
