const router = require('express').Router()
const { 
  postBlog,
  postAhaMoment,
  postDadHack,
  postMainProject,
  postSideProject
} = require('../controllers/addContentController');

const multer = require('multer');
const { v4: uuid } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './blogs');
  },
  filename: function (req, file, cb) {
    const filename = `${file.fieldname}_${uuid()}_${file.originalname}`;
    cb(null, filename);
  }
})

const upload = multer({ 
  storage
});

router.post('/create/blog', upload.single('blog'),  postBlog);
router.post('/create/ahamoment', postAhaMoment);
router.post('/create/dadhack', postDadHack);
router.post('/create/mainproject', postMainProject);
router.post('/create/sideproject', postSideProject);

module.exports = router