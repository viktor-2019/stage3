const UserService = require('./userService');

class AuthService {
    login(userData) {       
        const user = UserService.search(userData);
        return user ? user : '';
    }
}

module.exports = new AuthService();