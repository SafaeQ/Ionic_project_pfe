const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: { 
        type: String,
        require: true,
        },
    description: {
        type: Number,
        default: 0, 
        required: true
        },
    image: { 
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
