const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: { 
        type: String,
        required: true,
        },
    description: {
        type: String,
        default: 0, 
        required: true
        },
    images: { 
        type: Array,
        data: Buffer
        },
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Project'
    },
    date: {
      type: Date,
      default: Date.now()
    }, 
    progress : {
      type: Boolean,
      default: false
  }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports =  Article ;
