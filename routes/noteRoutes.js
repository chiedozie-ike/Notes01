const express = require("express");
const router = express.Router();
const notesController = require("../Backend/controllers/notesController");

router
  .route("/")
  .get(notesController.getAllNotes)
  .post(notesController.createNewNote)
  .patch(notesController.updateNote)
  .delete(notesController.deleteNote);

module.exports = router;
