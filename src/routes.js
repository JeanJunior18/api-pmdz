const router = require('express').Router();
const auth = require('./middlewares/auth');

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const BookletController = require('./controllers/BookletController');

/* Authenticate is not required */
router.post('/login',AuthController.authenticate);

router.get('/author', UserController.index);
router.post('/author', UserController.store);

router.get('/:author_id/booklet',  BookletController.index);

/* Authenticate is required */
router.use(auth)
router.post('/:author_id/booklet',  BookletController.store);

module.exports = router;