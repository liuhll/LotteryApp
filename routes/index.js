let router = require('express').Router();

router.use('/account', require('./account'));
router.use('/lottery', require('./lottery'));
router.get('/demo', (req, resp) => {
    resp.json({ 'demo': 'test api' });
});
module.exports = router;