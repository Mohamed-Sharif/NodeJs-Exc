const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/Routes.js");

const app = express();

app.use(express.json());

mongoose.connect(
    'mongodb+srv://ms2036:thebestintheworld@nodejs.ixhdqr6.mongodb.net/?retryWrites=true&w=majority',  
    {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running...");
});
