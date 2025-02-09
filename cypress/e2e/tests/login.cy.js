import LoginPage from '../pages/LoginPage';

describe('Login Functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it.only('logs in with valid credentials', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    LoginPage.verifyLoginSuccess();
  });

  it('fails to log in with invalid credentials', () => {
    LoginPage.login('wrong_user', 'secret_sauce');
    LoginPage.verifyLoginFailure();
  });
});
