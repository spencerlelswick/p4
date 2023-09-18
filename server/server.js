require("dotenv").config();
require('./config/db.connection.js')


const { PORT } = process.env;
const express = require("express");

const usersRouter = require("./routes/users")

const cors=require("cors")
const morgan = require("morgan")

const app = express();


app.use(express.urlencoded({extended:true}))
app.use(express.json()); 
app.use(cors()); 
app.use(morgan("dev"));

app.use('/users', usersRouter)

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));