// logout.test.js
import 'jest-localstorage-mock';

const { logout } = require('./logout.js');

describe('logout function', () => {
  it('should clear the token from localStorage', () => {
    // Set a test token in localStorage
    localStorage.setItem('token', 'test-token');

    // Call the logout function
    logout();

    // Expect that localStorage.getItem("token") returns null after logout
    expect(localStorage.getItem('token')).toBeNull();
  });
});
