// login.test.js
import 'jest-localstorage-mock';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fetch from 'node-fetch'; // Import node-fetch
const { login } = require('./login.js');

// Mock fetch
jest.mock('node-fetch', () => require('jest-fetch-mock'));

describe('login function', () => {
  const mock = new MockAdapter(axios, { delayResponse: 1000 });
  mock.onPost('/login').reply(200, { authToken: 'testAuthToken' });

  beforeEach(() => {
    localStorage.clear();
  });

  it('should store a valid token in localStorage after login', async () => {
    const email = 'ninamd@stud.noroff.no';
    const password = 'ninaamdal12345';

    // Mock the fetch response
    fetch.mockResponseOnce(JSON.stringify({ authToken: 'testAuthToken' }));

    await login(email, password);

    const storedToken = localStorage.getItem('token');
    expect(storedToken).toBeTruthy();
  });

  afterAll(() => {
    mock.restore();
    jest.unmock('node-fetch'); // Unmock fetch after all tests
  });
});
