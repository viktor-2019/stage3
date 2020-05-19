const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter
router.get('/', (req, res, next) => {
  console.log('this is fighter router.get req', req.body);
  // let us stop for begining
  res.end();
});
router.get('/id', (req, res, next) => {
  console.log('this is a fighter router.get/id ', req.params.id);
  res.end();
});


router.post('/', (req, res, next) => {
  console.log('this is a fighter router.post: ', req.params.id);
  res.end();
});

router.put('/id', (req, res, next) => {
  console.log('this is a fighter router.PUT/id ', req.params.id);
  res.end();
});

router.delete('/id', (req, res, next) => {
  console.log('this is a fighter router.Delete/id ', req.params.id);
  res.end();
});





module.exports = router;