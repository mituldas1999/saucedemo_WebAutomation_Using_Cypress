import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';

describe('Logout Functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('logs out successfully', () => {
    LogoutPage.openMenu();
    LogoutPage.clickLogout();
    LogoutPage.verifyLogoutSuccess();
  });
});
