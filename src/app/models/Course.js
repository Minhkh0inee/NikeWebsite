const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const { v4: uuidv4 } = require('uuid');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600, required: true },
        image: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true }, // thay name thanh uuid
        price: { type: String, maxLength: 255 },
        p1: { type: String, maxLength: 255 },
        p2: { type: String, maxLength: 255 },
        p3: { type: String, maxLength: 255 },
        tilte: { type: String, maxLength: 600 },
    },
    {
        timestamps: true,
    },
);

//add plug in
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true, //sẽ cho ta biết đc database được xóa khi nào.
    overrideMethods: 'all',
}); //delete va overide lai het tat ca method

module.exports = mongoose.model('Course', Course);
