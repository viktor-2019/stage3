const { UserRepository } = require('../repositories/userRepository');

class UserService {
    // TODO: Implement methods to work with user
    saveUser(data) {
        const savedUser = UserRepository.create(data);
        return savedUser;
    }

    
    // not ready
    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return '';
        }
        return item;
    }
}

module.exports = new UserService();