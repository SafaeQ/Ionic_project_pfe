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
    category: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: "Category"
    },
    description: { 
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    association: { 
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      // trim: true,
      ref: "Association"
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
