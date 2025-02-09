import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Add to Cart Functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('adds products to the cart', () => {
    InventoryPage.addFirstProductToCart();
    InventoryPage.addSecondProductToCart();
    InventoryPage.verifyCartBadge(2);
    InventoryPage.goToCart();
    CartPage.verifyCartItemCount(2);
  });
});
