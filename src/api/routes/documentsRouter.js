const express = require('express');
const router = express.Router();
const documentsController = require ('../controllers.documentsController.js')

router.get('/all', documentsController.getAllDocuments,(req, res) => {
  return res.status(201).json({entries: res.locals.documents})
});

router.get('/:id', documentsController.getOneDocument, (req, res) => {
  return res.status(201).json({entries: res.locals.oneDocument})
});