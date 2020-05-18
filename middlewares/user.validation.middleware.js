const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    try {
        const stub = req.body;
        const newUser = Object.assign({}, user);
            for (let key in newUser) {
                if (newUser.hasOwnProperty(key)) {
                    newUser[key] = stub[key];
                }
            }
    //  next validation are only for demonstration
        if (!newUser.email || !newUser.email.includes('@')) throw('email problems');
        if (newUser.password === undefined) throw('No password')
        if (newUser.password === '' || newUser.password.length < 3) {
            throw ('Error: Too short password');
        }
        console.log('newUser from createUserValid', newUser);
        next()
    } catch (err) {
        console.log(err);
        res.err = err;
    } 
   //    not ready // stub only!!!!!
        
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;