import AWS from "aws-sdk";
import fs from "fs";
import path from "path";
import "dotenv/config";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-south-1", // Set your desired region
});

const s3 = new AWS.S3();
const bucketName = "skillslash-cdn"; // Replace with your bucket name

async function uploadFileToS3(localPath, s3Key) {
  const fileContent = fs.readFileSync(localPath);

  const params = {
    Bucket: bucketName,
    Key: s3Key,
    Body: fileContent,
  };

  try {
    await s3.upload(params).promise();
    console.log(`Uploaded ${s3Key} successfully.`);
  } catch (error) {
    console.error(`Error uploading ${s3Key}: ${error}`);
  }
}

async function uploadFolderContentsToS3(
  localFolderPath,
  s3Path = "_next/static"
) {
  const items = fs.readdirSync(localFolderPath, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(localFolderPath, item.name);
    const currentS3Path = path.join(s3Path, item.name).replace(/\\/g, "/");

    if (item.isFile()) {
      await uploadFileToS3(itemPath, currentS3Path);
    } else if (item.isDirectory()) {
      await uploadFolderContentsToS3(itemPath, currentS3Path);
    }
  }
}

async function main() {
  const localFolderPath =
    "D:/office/skillslash/Blog/blogskillslash/.next/static";

  try {
    await uploadFolderContentsToS3(localFolderPath);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
