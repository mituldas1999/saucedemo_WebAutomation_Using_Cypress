import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import SortingPage from '../pages/SortingPage';

describe('Sorting Products', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('sorts by price low to high', () => {
    SortingPage.sortByPriceLowToHigh();
    // Add validation to verify correct sorting
  });

  it('sorts by price high to low', () => {
    SortingPage.sortByPriceHighToLow();
    // Add validation to verify correct sorting
  });

  it('sorts by name A to Z', () => {
    SortingPage.sortByNameAtoZ();
    // Add validation to verify correct sorting
  });

  it('sorts by name Z to A', () => {
    SortingPage.sortByNameZtoA();
    // Add validation to verify correct sorting
  });
});
