const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

const save = async (favNumber) => {
  console.log("saving");
  await s3.putObject({
    Body: JSON.stringify(favNumber, null, 2),
    Bucket: "your_bucket_name", //Change this to your bucket variable name
    Key: "number.json",
  }).promise()
};

module.exports = { save };