const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        coverImg: {type: String, default:"https://dakepengportfolio.s3.us-east-2.amazonaws.com/project_default.svg"},
        description: { type: String, required: true},
        tags: {type: [String], require: true},
        date: {type: Date, required: true},
        hasPost: {type: Boolean, required: true, default: false},
        postLink: {
            type: String,
            validate: {
            validator: function (v) {
            return !this.hasPost || (v && v.length > 0);
            },
            message: "postLink must be provided if hasPost is true",},
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Projects", projectSchema)