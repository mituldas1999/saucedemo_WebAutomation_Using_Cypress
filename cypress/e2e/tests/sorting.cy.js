import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import SortingPage from '../pages/SortingPage';

describe('Sorting Products', () => {
  let credentials;

  beforeEach(() => {
    // Load the credentials from the fixture
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
  });

  it('sorts by price low to high', () => {
    // Ensure credentials are loaded properly
    cy.wrap(credentials).should('have.property', 'validUser');

    const { username, password } = credentials.validUser;

    // Use dynamic credentials for login
    LoginPage.visit();
    LoginPage.login(username, password);

    // Perform sorting by price low to high
    SortingPage.sortByPriceLowToHigh();
    // Add validation to verify correct sorting
  });

  it('sorts by price high to low', () => {
    // Ensure credentials are loaded properly
    cy.wrap(credentials).should('have.property', 'validUser');

    const { username, password } = credentials.validUser;

    // Use dynamic credentials for login
    LoginPage.visit();
    LoginPage.login(username, password);

    // Perform sorting by price high to low
    SortingPage.sortByPriceHighToLow();
    // Add validation to verify correct sorting
  });

  it('sorts by name A to Z', () => {
    // Ensure credentials are loaded properly
    cy.wrap(credentials).should('have.property', 'validUser');

    const { username, password } = credentials.validUser;

    // Use dynamic credentials for login
    LoginPage.visit();
    LoginPage.login(username, password);

    // Perform sorting by name A to Z
    SortingPage.sortByNameAtoZ();
    // Add validation to verify correct sorting
  });

  it('sorts by name Z to A', () => {
    // Ensure credentials are loaded properly
    cy.wrap(credentials).should('have.property', 'validUser');

    const { username, password } = credentials.validUser;

    // Use dynamic credentials for login
    LoginPage.visit();
    LoginPage.login(username, password);

    // Perform sorting by name Z to A
    SortingPage.sortByNameZtoA();
    // Add validation to verify correct sorting
  });
});
