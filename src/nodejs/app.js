var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer')
var path = require("path")
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: '1.0.0',
    },
  },
  apis: ["src/nodejs/app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-test', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
/**
 * @swagger
 * /:
 *   post:
 *     description: Get all books
 *     parameters:
 *      - name: Email
 *        description: Email of Users
 *        in: formData
 *        required: true
 *        type: string
 *      - name: Password
 *        description: Password of Users
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'assets')))
var routers = require('./routes');
routers(app) 
const database = require ("../nodejs/config/database")
database.connect()
app.listen(process.env.PORT || 5000)
