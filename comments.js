// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import model
const Comment = require('../models/Comment');

// Import controller
const commentController = require('../controllers/commentController');

// @route   GET /comments
// @desc    Get all comments
// @access  Public
router.get('/', commentController.getComments);

// @route   GET /comments/:id
// @desc    Get a comment
// @access  Public
router.get('/:id', commentController.getComment);

// @route   POST /comments
// @desc    Add a comment
// @access  Public
router.post('/', commentController.addComment);

// @route   PUT /comments/:id
// @desc    Update a comment
// @access  Public
router.put('/:id', commentController.updateComment);

// @route   DELETE /comments/:id
// @desc    Delete a comment
// @access  Public
router.delete('/:id', commentController.deleteComment);

module.exports = router;