const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: { 
        type: String,
        require: true,
        lowercase: true
        },
    description: {
        type: Number,
        default: 0 
        },
    image: { 
        type: Array,
        data: Buffer
        },
    project_id: {
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

const Article = mongoose.model("Article", articleSchema);

module.exports =  Article ;
