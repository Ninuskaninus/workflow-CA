const { login } = import("./login.js");

describe("login function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should store a token in localStorage", () => {
    const username = "testUser";
    const password = "testPassword";
    const authToken = login(username, password);

    expect(localStorage.getItem("authToken")).toBe(authToken);
  });

  it("should return the stored token", () => {
    const username = "testUser";
    const password = "testPassword";
    const authToken = login(username, password);
    expect(authToken).toBe(localStorage.getItem("authToken"));
  });
});
