// login.test.js
import 'jest-localstorage-mock';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const { login } = require('./login.js');

describe('login function', () => {
  const mock = new MockAdapter(axios, { delayResponse: 1000 });
  mock.onPost('/login').reply(200, { authToken: 'testAuthToken' });

  beforeEach(() => {
    localStorage.clear();
  });

  it('should store a valid token in localStorage after login', async () => {
    const email = 'ninamd@stud.noroff.no';
    const password = 'ninaamdal12345';
    await login(email, password);

    // Expect that localStorage.getItem("token") returns a non-empty string
    const storedToken = localStorage.getItem('token');
    expect(storedToken).toBeTruthy();
  });

  afterAll(() => {
    mock.restore();
  });
});
