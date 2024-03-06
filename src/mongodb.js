const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/myDatabase")
.then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

  const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const projectSchema = new mongoose.Schema({
  taskID: Number,
  projectDesc: String,
  status: String,
  assigned: String
});
const Project = mongoose.model('Project', projectSchema);

const collection1 = new mongoose.model("Collection1", logInSchema)

module.exports =  collection1