const express = require('express');
const discussionController = require('../controllers/discussionController');
const { authenticate, isAdmin } = require('../middleware/auth');

const router = express.Router();

// Public/Student routes
router.get('/grade/:gradeLevel', authenticate, discussionController.getGroupByGrade);

// Admin routes
router.get('/', authenticate, isAdmin, discussionController.getAllGroups);
router.post('/', authenticate, isAdmin, discussionController.upsertGroup);
router.delete('/:id', authenticate, isAdmin, discussionController.deleteGroup);

module.exports = router;
