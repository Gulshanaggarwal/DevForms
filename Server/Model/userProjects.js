const mongoose = require("mongoose");

const projectListSchema=new mongoose.Schema({
    formName: {
      type: String,
      required: true,
      
    },
    targetEmail: {
      type: String,
      required: true,
    },
    totalSubmissions:{
      type:Number,
      required:true,
      default:0
    },

    isEnabled: {
      type: Boolean,
      required: true,
      default: true,
    },
  })

const projectSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique:true
  },
  projects: [
    projectListSchema
  ],
});

const projectModel = mongoose.model("projectModel", projectSchema);

module.exports = projectModel;
