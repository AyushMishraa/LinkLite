const express = require("express")
const {handleGenerateNewShortURL,handleGetAnalytics,handleClicks} = require("../controllers/url")
const router = express.Router()

router.post('/', handleGenerateNewShortURL);
router.get('/analytics/:shortId',handleGetAnalytics);
router.get('/:shortId',handleClicks);

module.exports = router;