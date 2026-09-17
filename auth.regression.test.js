const login = require("./auth");

describe("Regression Test - Login", () => {

    test("Đăng nhập thành công với tài khoản hợp lệ", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Đăng nhập thất bại khi sai mật khẩu", () => {
        expect(login("admin", "wrong")).toBe(false);
    });

    test("Đăng nhập thất bại khi sai tài khoản", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Đăng nhập thất bại khi username rỗng", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Đăng nhập thất bại khi password rỗng", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Đăng nhập thất bại khi tài khoản bị khóa", () => {
        expect(login("locked", "123")).toBe(false);
    });

    test("Đăng nhập thất bại khi mật khẩu sai dạng đặc biệt", () => {
        expect(login("admin", "@#$%")).toBe(false);
    });

});
