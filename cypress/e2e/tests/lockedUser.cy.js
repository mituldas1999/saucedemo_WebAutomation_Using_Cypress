import LoginPage from '../pages/LoginPage';

describe('Locked-Out User Validation', () => {
  let credentials;

  beforeEach(() => {
    // Load the credentials from the fixture
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
  });

  it('fails to log in with locked-out user', () => {
    // Ensure credentials are loaded properly
    cy.wrap(credentials).should('have.property', 'lockedOutUser');

    const { username, password } = credentials.lockedOutUser;

    // Use dynamic credentials for login
    LoginPage.visit();
    LoginPage.login(username, password);
    LoginPage.verifyLoginFailure();
  });
});
