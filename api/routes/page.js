const router = require('express').Router()
const { 
  getHomePage,
  getAddContentPage
} = require('../controllers/pageController');

router.get('/', getHomePage);

router.get('/content/create', getAddContentPage);

module.exports = router