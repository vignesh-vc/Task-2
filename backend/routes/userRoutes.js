// backend/routes/userRoutes.js
const express = require('express');
const { signUp, login, getUsersByRole } = require('../controllers/userController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/signup', upload.single('profilePic'), signUp);
router.post('/login', login);
router.get('/users/:role', getUsersByRole);  // Get users by role (Proficient or Expert)

module.exports = router;
