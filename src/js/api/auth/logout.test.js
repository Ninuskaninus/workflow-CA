import 'jest-localstorage-mock';

const { logout } = require('./logout.js');

describe('logout function', () => {
  it('should clear the token from localStorage', () => {
    localStorage.setItem('token', 'test-token');

    logout();

    expect(localStorage.getItem('token')).toBeNull();
  });
});
