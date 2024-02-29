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

const collection = new mongoose.model("Collection1", logInSchema)

module.exports= collection