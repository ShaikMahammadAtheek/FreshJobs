// const mongoose = require("mongoose");

// const jobSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     category: { type: String, enum: ["Freshers", "Experience", "Internship"], required: true },
//     postedDate: { type: Date, default: Date.now },
//     company: { type: String, required: true },
//     imageUrl: { type: String, required: true },
//     applyLink: { type: String, required: true }, // Apply Link added
// });

// module.exports = mongoose.model("Job", jobSchema);


const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, enum: ["Freshers", "Experience", "Internship"], required: true },
    company: { type: String, required: true },
    postedDate: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true }, // Added Description
    location: { type: String, required: true },   // Added Location
    salary: { type: String, required: true },     // Added Salary
    jobRole: { type: String, required: true },    // Added Job Role
    eligibility: { type: String, required: true },// Added Eligibility
    headings: [  // Array of sections with headings and content
        {
            heading: { type: String, required: true },
            content: [{ type: String, required: true }]
        }
    ],
    applyLink: { type: String, required: true }   // Apply Link
});

module.exports = mongoose.model("Job", jobSchema);
