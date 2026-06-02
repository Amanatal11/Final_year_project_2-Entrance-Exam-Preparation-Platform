const DiscussionGroup = require('../models/DiscussionGroup');

class DiscussionController {
    /**
     * Get all discussion groups (Admin)
     */
    async getAllGroups(req, res, next) {
        try {
            const groups = await DiscussionGroup.find().sort({ gradeLevel: 1 });
            res.status(200).json({ success: true, data: groups });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Get a discussion group by grade level (Student/Admin)
     */
    async getGroupByGrade(req, res, next) {
        try {
            const { gradeLevel } = req.params;
            const group = await DiscussionGroup.findOne({ gradeLevel });
            if (!group) {
                return res.status(404).json({ success: false, message: 'Discussion group not found for this grade' });
            }
            res.status(200).json({ success: true, data: group });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Create or update a discussion group (Admin)
     */
    async upsertGroup(req, res, next) {
        try {
            const { gradeLevel, telegramLink } = req.body;

            if (!gradeLevel || !telegramLink) {
                return res.status(400).json({ success: false, message: 'Grade level and telegram link are required' });
            }

            const group = await DiscussionGroup.findOneAndUpdate(
                { gradeLevel },
                { telegramLink },
                { new: true, upsert: true, runValidators: true }
            );

            res.status(200).json({ success: true, data: group });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Delete a discussion group (Admin)
     */
    async deleteGroup(req, res, next) {
        try {
            const { id } = req.params;
            const group = await DiscussionGroup.findByIdAndDelete(id);
            if (!group) {
                return res.status(404).json({ success: false, message: 'Discussion group not found' });
            }
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new DiscussionController();
