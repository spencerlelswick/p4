const mongoose = require('mongoose');
const {DATABASE_URI} = process.env

mongoose.set('strictQuery', true);
mongoose.connect(DATABASE_URI)

mongoose.connection
  .on("open", () => console.log("Connection established."))
  .on("close", () => console.log("Disconnected from database."))
  .on("error", (error) => console.log(error));