const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv"); // ✅ Load Environment Variables
const Job = require("./models/Job");
const Support = require("./models/Support"); // ✅ Import Support Model

const app = express();
app.use(express.json());

// 🟢 **Allow CORS (Cross-Origin Requests)**
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000", // Default if not set
    credentials: true
}));

// 🟢 **Connect to MongoDB**
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));


// 🟢 **Create a New Job**
app.post("/api/jobs", async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        console.error("❌ Error creating job:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// 🟢 **Get All Jobs (Latest First)**
app.get("/api/jobs", async (req, res) => {
    try {
        const jobs = await Job.find().sort({ postedDate: -1 }); // Latest jobs first
        res.json(jobs);
    } catch (error) {
        console.error("❌ Error fetching jobs:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// 🟢 **Get Job by ID (New Route)**
app.get("/api/jobs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.json(job);
    } catch (error) {
        console.error("❌ Error fetching job details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// 🟢 **Get Jobs by Category (Case-Insensitive)**
app.get("/api/jobs/category/:category", async (req, res) => {
    try {
        const { category } = req.params;

        // Case-insensitive search to avoid "Freshers" vs "freshers" issues
        const jobs = await Job.find({ category: { $regex: new RegExp(`^${category}$`, "i") } })
            .sort({ postedDate: -1 });

        if (jobs.length === 0) {
            return res.status(404).json({ message: "No jobs found for this category" });
        }

        res.json(jobs);
    } catch (error) {
        console.error("❌ Error fetching jobs by category:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// 🟢 **Store Support Messages in MongoDB**
app.post("/support", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newSupport = new Support({ name, email, message });
        await newSupport.save();

        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("❌ Error saving support message:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// 🟢 **Start Server**
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
