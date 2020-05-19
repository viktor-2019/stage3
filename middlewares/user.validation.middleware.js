
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
        const tel = newUser.phoneNumber
            .trim()
            .replace(/-|\s/g, '');
        req.body.phoneNumber = tel;
        if (tel.search(/\+380\d{9}$/) === -1) throw('use correct format for phone number');
        if (!newUser.email || !newUser.email.includes('@')) throw('email is not valid');
        if (newUser.password === undefined) throw('No password')
        if (newUser.password === '' || newUser.password.length < 3) {
            throw ('Error: Too short password');
        }
        console.log('newUser from createUserValid', newUser);
        next()
    } catch (err) {

        console.log(err);
        res.status(400).send(JSON.stringify(err));
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