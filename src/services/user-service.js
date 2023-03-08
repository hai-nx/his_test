function login(username, password) {

    let user = {
        token: '111111111111111111111111111111111',
        username: username,
        password: password,
        fullname: 'FULL-NAME'
    }

    console.log(user)
    localStorage.setItem('user', JSON.stringify(user));

    return user;
}

function logout() {
    localStorage.removeItem('user');
}

export const userService = {
    login,
    logout
}