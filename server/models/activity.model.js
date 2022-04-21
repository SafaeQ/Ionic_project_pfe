const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitieSchema = new Schema(
  {
    title: { 
        type: String,
        require: true,
        lowercase: true
        },
    description: {
        type: String,
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
    },
    data: {
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

const Activitie = mongoose.model("Activitie", activitieSchema);

module.exports = { Activitie };
