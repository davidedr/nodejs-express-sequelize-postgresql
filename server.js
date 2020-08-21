const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create an Express app
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};

// add cors middleware
app.use(cors(corsOptions))

// add body-parser middleware
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true}));

const db = require("./app/models");
// Prosduction
// db.sequelize.sync();

// Development (drops and rebuilds database)
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// define a GET route which is simple for test.
app.get("/", (req, res) => {res.json({ message: "Welcome!" });});

// listen on port 8080 for incoming requests
const PORT=process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});