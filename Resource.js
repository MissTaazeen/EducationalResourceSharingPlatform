const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    fileUrl: String,
    createdAt: {type: Date, default: Date.now},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    UserName: String,
    UserEmail: String,
    likes: {type: Number, deafault: 0},
    comments: [{user: String, text: String, createdAT: {type: Date, default: Date.now} }]
});

module.exports = mongoose.model('Resource', resourceSchema);