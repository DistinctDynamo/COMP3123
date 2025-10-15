const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://localhost:8081/api/notes
noteRoutes.post('/notes', async (req, res) => {
    const content = req.body.content;
    if (!content || !content.noteTitle || !content.noteDescription) {
        return res.status(400).send({
            message: "Note title and description are required"
        });
    }
    try {
        const note = new noteModel({
            noteTitle: content.noteTitle,
            noteDescription: content.noteDescription,
            priority: content.priority || 'MEDIUM',
            dateAdded: content.dateAdded,
            dateUpdated: content.dateUpdated
        });
        const data = await note.save();
        res.status(201).send({
            message: "Note created successfully",
            note: data
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Note."
        });
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving notes."
        });
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.noteId);
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send(note);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    const content = req.body.content;
    if (!content || (!content.noteTitle && !content.noteDescription && !content.priority && !content.dateAdded && !content.dateUpdated)) {
        return res.status(400).send({
            message: "Please provide at least one field inside 'content' to update"
        });
    }
    try {
        if (!content.dateUpdated) {
            content.dateUpdated = Date.now();
        }
        const note = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            content,
            { new: true, runValidators: true }
        );
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send({
            message: "Note updated successfully",
            note: note
        });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findByIdAndDelete(req.params.noteId);
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }res.status(200).send({
            message: "Note deleted successfully!",
            note: note
        });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    }
});

module.exports = noteRoutes;
