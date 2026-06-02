const path = require('path');
const fs = require('fs');
const multer = require('multer');

const profileUploadDir = path.join(__dirname, '../../uploads/profiles');
const conceptUploadDir = path.join(__dirname, '../../uploads/concepts');

[profileUploadDir, conceptUploadDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, profileUploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `profile-${unique}${ext}`);
  },
});

const conceptStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, conceptUploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `concept-${unique}${ext}`);
  },
});

const imageFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image/')) {
    return cb(new Error('Only image files are allowed'));
  }
  cb(null, true);
};

const conceptAssetFileFilter = (req, file, cb) => {
  const allowedMimeTypes = new Set(['application/pdf', 'image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif']);
  if (!allowedMimeTypes.has(file.mimetype)) {
    return cb(new Error('Only image and PDF files are allowed'));
  }
  cb(null, true);
};

const profileImageUpload = multer({
  storage: profileStorage,
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const conceptImageUpload = multer({
  storage: conceptStorage,
  fileFilter: conceptAssetFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB for diagrams
  },
});

module.exports = {
  profileImageUpload,
  conceptImageUpload,
};