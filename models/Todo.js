const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("todos", todoSchema);
