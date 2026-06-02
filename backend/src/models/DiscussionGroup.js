const mongoose = require('mongoose');

const discussionGroupSchema = new mongoose.Schema(
    {
        gradeLevel: {
            type: String,
            enum: ['9', '10', '11', '12'],
            required: [true, 'Grade level is required'],
            unique: true,
        },
        telegramLink: {
            type: String,
            required: [true, 'Telegram link is required'],
            trim: true,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
);

module.exports = mongoose.model('DiscussionGroup', discussionGroupSchema);
