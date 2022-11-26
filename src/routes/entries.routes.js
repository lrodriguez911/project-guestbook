const {Router} = require('express');

const {renderIndex, renderNewEntry, createNewEntry} = require('../controllers/entries.controller')

const router = Router();

module.exports = router;


router.get('/', renderIndex);

router.get('/new-entry', renderNewEntry)


router.post('/new-entry', createNewEntry)