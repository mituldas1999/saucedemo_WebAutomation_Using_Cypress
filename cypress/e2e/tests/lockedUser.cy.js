import LoginPage from '../pages/LoginPage';

describe('Locked-Out User Validation', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('fails to log in with locked-out user', () => {
    LoginPage.login('locked_out_user', 'secret_sauce');
    LoginPage.verifyLoginFailure();
  });
});
