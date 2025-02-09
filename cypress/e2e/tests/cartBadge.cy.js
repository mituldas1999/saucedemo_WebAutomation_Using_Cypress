import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Cart Badge Count Validation', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('adds and removes products from the cart', () => {
    InventoryPage.addFirstProductToCart();
    InventoryPage.verifyCartBadge(1);
    InventoryPage.addSecondProductToCart();
    InventoryPage.verifyCartBadge(2);
    InventoryPage.goToCart();
    CartPage.removeFirstItem();
    InventoryPage.verifyCartBadge(1);
  });
});
