const router = require('express').Router();

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const BookletController = require('./controllers/BookletController');


router.post('/login',AuthController.authenticate);

router.get('/author', UserController.index);
router.post('/author', UserController.store);

router.get('/:author_id/booklet', BookletController.index);
router.post('/:author_id/booklet', BookletController.store);

module.exports = router;