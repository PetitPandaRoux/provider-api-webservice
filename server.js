/**
 * server.js 
 * @author Sakada Ly<sakada.ly@edifixio.com>
 */


/**
 * EXTERNAL NPM MODULES
 */
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');

/**
 * SETUP
 */
dotenv.config({path: './.env/.env.dev'});

const {
  PORT
} = process.env;

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/**
 * APP
 */
app.use(cors(corsOptions));


app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route first route
app.get("/", (req, res) => {
  res.json({ message: "First page" });
});

