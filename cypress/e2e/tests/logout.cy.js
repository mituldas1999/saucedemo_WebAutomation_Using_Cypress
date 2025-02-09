import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';

describe('Logout Functionality', () => {
  let credentials;

  beforeEach(() => {
    // Load the credentials from the fixture
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
  });

  it('logs out successfully', () => {
    // Ensure credentials are loaded properly
    cy.wrap(credentials).should('have.property', 'validUser');

    const { username, password } = credentials.validUser;

    // Use dynamic credentials for login
    LoginPage.visit();
    LoginPage.login(username, password);

    // Perform logout actions
    LogoutPage.openMenu();
    LogoutPage.clickLogout();
    LogoutPage.verifyLogoutSuccess();
  });
});
