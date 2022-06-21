const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { 
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    budget: { 
        type: Number,
        required: true,
        default: 0
    },
    description: { 
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    images: {
      data: Buffer,
      type: Array,
    },  
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
