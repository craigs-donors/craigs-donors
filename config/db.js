// const config = require('config'); ////
var AWS = require('aws-sdk');

// link to db charities table:
const dbConfig = 
//   config.get('dynamodbURI');
{
    "region": "us-east-1",
    "endpoint": "https://dynamodb.us-east-1.amazonaws.com"
};

const connectDB = () => {
    try {
        AWS.config.update(dbConfig);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;