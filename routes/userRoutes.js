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
      console.log('result from userRouter: ', result);
      if (result) {
        next();
      }    
  } catch (err) {
      res.err = err;
  }   
}, responseMiddleware);

router.post('/id', (req, res, next) => {
  console.log('this is a user router.post/id ', req.params.id);
  res.end();
})

router.get('/', (req, res, next) => {
  console.log('this is user router.get req', req.header);
  // let us stop for begining
  res.end();
})


// not ready
module.exports = router;