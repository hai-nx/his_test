function login(username, password) {
    let user = {
        token: '111111111111111111111111111111111',
        username: username,
        password: password,
        fullname: 'FULL-NAME'
    }

    return user;
}

export const authService = {
    login
}