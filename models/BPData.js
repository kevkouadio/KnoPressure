const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bpSchema = new Schema({
    userID: { type: String, required: true },
    Systolic: { type: String, required: true },
    Diastolic: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const BPData = mongoose.model("BPData", bpSchema);

module.exports = BPData;