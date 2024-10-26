import mongoose from "mongoose";

const Schema = mongoose.Schema();
const ObjectId = mongoose.ObjectId;

const tutorialModel = new Schema({
    authorId: { type: ObjectId, required: true, ref: 'User' },
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

const topicModel = new Schema({
    title: { type: String, required: true },
    subtopics: [
        {
            _id: { type: ObjectId },
            name: { type: String, required: true }
        }
    ]
});

const commentModel = new Schema({
    tutorial_id: { type: String, required: true, ref: 'Tutorial' },
    user_id: { type: String, required: true, ref: 'User' },
    comment: { type: String, required: true },
    created_it: { type: Date, default: Date.now }
});