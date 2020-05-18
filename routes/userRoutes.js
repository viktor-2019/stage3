const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();
// TODO: Implement route controllers for user
router.post('/', createUserValid, (req, res, next) => {
  try {
      const { saveUser } = UserService;
      const result = saveUser(req.body);
      if (result) {
        next();
      }
      
  } catch (err) {
      res.err = err;
  }   
}, responseMiddleware);



// not ready
module.exports = router;