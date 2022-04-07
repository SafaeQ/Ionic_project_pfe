const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CATEGORIES = [
  "food",
  "education",
  
];

const categorySchema = new Schema(
  {
    name: { 
        type: String,
        require: true,
        lowercase: true
        },
    active: { 
        type: Boolean,
        default: true
        },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Project'
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = { Category, CATEGORIES };
