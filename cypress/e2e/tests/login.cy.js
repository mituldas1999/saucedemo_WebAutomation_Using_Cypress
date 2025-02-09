import LoginPage from '../pages/LoginPage';

describe('Login Functionality', () => {
  let credentials;

  beforeEach(() => {
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
    LoginPage.visit();
  });

  it.only('logs in with valid credentials', () => {
    const { username, password } = credentials.validUser;
    LoginPage.login(username, password);
    LoginPage.verifyLoginSuccess();
  });

  it('fails to log in with invalid credentials', () => {
    const { username, password } = credentials.invalidUser;
    LoginPage.login(username, password);
    LoginPage.verifyLoginFailure();
  });

  it('fails to log in with locked-out user', () => {
    const { username, password } = credentials.lockedOutUser;
    LoginPage.login(username, password);
    LoginPage.verifyLoginFailure();
  });
});
