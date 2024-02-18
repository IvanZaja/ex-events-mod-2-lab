const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minLength: [3, 'Title needs min 3 characters']
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            minLength: [10, 'Description needs min 10 characters']
        },
        capacity: {
            type: Number,
            min: [1, 'Capacity cannot be less than 1'] 
        },
        start: {
            type: Date,
            required: [true, 'Start date is required']
        },
        end: {
            type: Date,
            required: [true, 'End date is required']
        },
        image: {
            type: String
        },
        tags: {
            type: [String]
        }
    }
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;