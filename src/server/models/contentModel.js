import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const tutorialSchema = new Schema({
    authorId: { type: ObjectId, ref: 'User' },
    default_course: { type: Boolean, default: true },
    title: { type: String, required: true },
    content: [
        {
            page_number: { type: Number, required: true },
            page_content: { type: String, required: true }
        }
    ],
    topic_id: { type: ObjectId, required: true, ref: 'Topic' },
    subtopic_id: { type: ObjectId, ref: 'Subtopic' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const topicSchema = new Schema({
    title: { type: String, required: true },
    subtopics: [
        {
            _id: { type: ObjectId, required: true },
            name: { type: String, required: true }
        }
    ],
    course_type: { type: String, enum: ['default', 'teacher'], required: true }
});

const commentSchema = new Schema({
    tutorial_id: { type: String, required: true, ref: 'Tutorial' },
    user_id: { type: String, required: true, ref: 'User' },
    comment: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const tutorialModel = mongoose.model('Tutorial', tutorialSchema);
const topicModel = mongoose.model('Topic', topicSchema);
const commentModel = mongoose.model('Comment', commentSchema);

export { tutorialModel, topicModel, commentModel };