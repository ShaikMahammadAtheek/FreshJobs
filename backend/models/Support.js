const mongoose = require("mongoose");

const SupportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Support = mongoose.model("Support", SupportSchema);
module.exports = Support;
