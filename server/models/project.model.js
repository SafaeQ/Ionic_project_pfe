const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const repastSchema = new Schema(
  {
    name: { 
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    price: { 
        type: Number,
        required: true,
        default: 0
    },
    category: { 
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        ref: "Category"
    },
    description: { 
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    restaurant: { 
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Restaurant"
    },
    rating: {
      type: Number,
      default: 0,
    },  
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
