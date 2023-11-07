const { logout } = import("./logout.js");
describe("logout function", () => {
  it("should clear the token from localStorage", () => {
    localStorage.setItem("authToken", "test-token");

    logout();
    expect(localStorage.getItem("authToken")).toBeNull();
  });
});
