const router = require('express').Router()
const { 
  getHomePage,
  getAddContentPage
} = require('../controllers/pageController');

router.get('/', getHomePage);

router.get('/create/content', getAddContentPage);

module.exports = router