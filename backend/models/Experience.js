const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema(
    {
        logo: {type: String},
        order:{type: Number, required: true},
        jobTitle: { type: String, required: true},
        company_shortened: { type: String, required: true},
        company: { type: String, required: true},
        dateRange: { type: String, required: true},
        description: { type: String, required: true}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Experiences", experienceSchema)