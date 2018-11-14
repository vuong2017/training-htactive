import multer from 'multer';
import path from 'path';
import {
  getSubjects,
  getSubjectsJoin,
  insertSubjects,
  updateSubjects,
  deleteSubjects,
  getSelect
} from '../controllers/subjects';

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Check File Type
const checkFileType = (file, cb) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
});


export default (router) => {
  router.get('/subjects', getSubjects);
  router.get('/subjects/:id', getSubjectsJoin);
  router.get('/search', getSelect);
  router.post('/subjects', upload.single('logo'), insertSubjects);
  router.post('/subjects/update/:id', upload.single('logo'), updateSubjects);
  router.delete('/subjects/:id', deleteSubjects);
};
