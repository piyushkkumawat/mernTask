const express = require('express');
const bodyParser = require('body-parser');
const Cors = require("cors");
const mongoose = require('mongoose');
const userRoute = require('./src/routes/users.route')
const router = express.Router();
require('dotenv').config();

const url = 'mongodb://127.0.0.1:27017/task_db';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const app = express();

app.use(express.json());
app.use(Cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));


// Define routes
app.use('/api', userRoute);

mongoose.connect(url, options) 
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
