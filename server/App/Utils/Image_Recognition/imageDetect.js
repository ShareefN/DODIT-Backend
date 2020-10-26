const { errHandler } = require("../Errors");
const { v4: uuid } = require("uuid");
const AWS = require("aws-sdk");

const config = new AWS.Config({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "US East (Ohio)",
});

const client = new AWS.Rekognition();

exports.isImageInappropriate = (imageName, res) => {
  try {
    const params = {
      Image: {
        S3Object: {
          Bucket: process.env.STORAGE_NAME, // suppose to add it in .env file
          Name: imageName, //image.png for example
        },
      },
      // MaxLabels: 10,
      MinConfidence: 75, // we can say 75 is fair enough
    };

    client.detectModerationLabels(params, (err, response) => {
      console.log(err);
      if (err) return errHandler(err, res);

      console.log("check response ", response);
      return response;
    });

    // client.detectLabels(params, function (err, response) {
    //   if (err) {
    //     return errHandler(err, res);
    //   } else {
    //     console.log(`Detected labels for: ${photo}`);
    //     response.Labels.forEach((label) => {
    //       console.log(`Label:      ${label.Name}`);
    //       console.log(`Confidence: ${label.Confidence}`);
    //       console.log("Instances:");
    //       label.Instances.forEach((instance) => {
    //         let box = instance.BoundingBox;
    //         console.log("  Bounding box:");
    //         console.log(`    Top:        ${box.Top}`);
    //         console.log(`    Left:       ${box.Left}`);
    //         console.log(`    Width:      ${box.Width}`);
    //         console.log(`    Height:     ${box.Height}`);
    //         console.log(`  Confidence: ${instance.Confidence}`);
    //       });
    //       console.log("Parents:");
    //       label.Parents.forEach((parent) => {
    //         console.log(`  ${parent.Name}`);
    //       });
    //       console.log("------------");
    //       console.log("");
    //     }); // for response.labels
    //   } // if
    // });

    //check imasge if inappropriate
    //return  isImageInappropriate //true or false
  } catch (err) {
    return errHandler(err, res);
  }
};
