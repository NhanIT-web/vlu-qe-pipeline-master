function login(username, password) {
    // Kiểm tra kiểu dữ liệu
    if (
        typeof username !== "string" ||
        typeof password !== "string"
    ) {
        return false;
    }

    // Kiểm tra tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Kiểm tra dữ liệu rỗng
    if (
        username.trim() === "" ||
        password === ""
    ) {
        return false;
    }

    // Kiểm tra tài khoản và mật khẩu
    if (
        username === "admin" &&
        password === "123"
    ) {
        return true;
    }

    return false;
}

module.exports = login;
