# Build Server

This project is a simple build server built with Node.js. It's designed to execute build commands and upload the build outputs to an AWS S3 bucket.

## Features

- **Build Execution**: The server executes `npm install` and `npm run build` commands in a specified directory.
- **AWS S3 Integration**: The server uploads the build outputs to a specified S3 bucket.
- **Logging**: The server logs the build process and can be extended to publish these logs to a specified channel.

## How it Works

The script `script.js` is the main entry point of the application. It starts by executing the build commands in the `output` directory. It logs the build process and any errors that occur. Once the build is complete, it reads the contents of the `output/dist` directory and uploads each file to the S3 bucket.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up your AWS credentials and region in your environment.
4. Run the script with `node script.js`.
5. Build the docker image with `sudo docker -t builder-server .` and push the image to ECR.

## Environment Variables

- `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
- `AWS_REGION`: Your AWS region.
- `PROJECT_ID`: The ID of the project. This is used to create a unique path for the build outputs in the S3 bucket.

## Note

This is a basic implementation and does not include error handling or validation. It's recommended to add these before using in a production environment.