const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: [true, 'Note title is required'],
        trim: true
    },
    noteDescription: {
        type: String,
        required: [true, 'Note description is required'],
        trim: true
    },
    priority: {
        type: String,
        enum: {
            values: ['HIGH', 'MEDIUM', 'LOW'],
            message: 'Priority must be HIGH, MEDIUM, or LOW'
        },
        default: 'MEDIUM',
        uppercase: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Update dateUpdated before saving
NoteSchema.pre('save', function(next) {
    this.dateUpdated = Date.now();
    next();
});

// Export the model
module.exports = mongoose.model('Note', NoteSchema);