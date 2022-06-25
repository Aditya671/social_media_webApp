const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoSantitze = require('express-mongo-sanitize');
const path = require('path');
const { dirname } = require('path');
const { fileURLToPath } = require('url');
const bodyParser = require('body-parser');
const multer = require('multer');
const xss = require('xss-clean');
const helmet  = require('helmet');


// Configurations
const app = express();
dotenv.config();
const corsOptions = {
   origin:"http://localhost:3000",
   optionsSuccessStatus:200
}
const __dirname = dirname(fileURLToPath(import.meta.url));

// Server Configurations
app.use(bodyParser.urlencoded({extended:false}));
app.use(xss());
app.use(helmet())
app.use(mongoSantitze());
app.use(cors(corsOptions));
app.use(express.json());