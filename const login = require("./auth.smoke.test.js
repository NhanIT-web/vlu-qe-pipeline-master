const login = require("./auth");

describe("Smoke Test - Login", () => {

    test("Đăng nhập thành công với admin/123", () => {
        expect(login("admin", "123")).toBe(true);
    });

});
