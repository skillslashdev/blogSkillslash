const fs = require("fs");
const path = require("path");
const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: "ap-south-1", // Set to your region code
});

const s3 = new AWS.S3();
const bucket = process.env.NEXT_PUBLIC_S3_BUCKET;
const folder = path.join(process.cwd(), ".next/static");

async function uploadFolder() {
  const files = await fs.readdir(folder, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      // Do something with the files...
    }
  });

  const promises = [];

  for (const file of files) {
    const filePath = path.join(folder, file);
    const fileKey = path.basename(filePath).replace(/\./g, "-");

    promises.push(
      s3
        .putObject({
          Bucket: bucket,
          Key: fileKey,
          Body: await fs.readFile(filePath),
        })
        .promise()
    );
  }

  await Promise.all(promises);
}

uploadFolder();
