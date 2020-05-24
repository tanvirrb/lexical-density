const router    =   require('express').Router();
const wordController    =   require('./controllers/wordController');

router.get('/', (req, res) => res.json({data: 'Hello Router'}));
router.post('/words', (req, res) => res.json({data: 'Hello Router'}));
router.post('/complexity', wordController.getComplexity);

module.exports = router;