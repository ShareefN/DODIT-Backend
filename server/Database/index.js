const mongoose = require("mongoose");
autoIncrement = require("mongoose-auto-increment");

const uri = process.env.DB_URL;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//Get the default connection
const db = mongoose.connection;

autoIncrement.initialize(db);

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("connected to database successfully");
});
exports.db = db;
