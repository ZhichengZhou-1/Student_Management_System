const mongodb = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://localhost:27017/student-db';
const path = require('path');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();


let db = null;
let collection = null;


const connectdb = async() => {
    try {
         db = await mongodb.connect(MONGO_URL);
         collection = db.collection('student');
         console.log('MongoDB connected succsessfully 1\n');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('MongoDB connected succsessfully\n');

}

module.exports = connectdb;
