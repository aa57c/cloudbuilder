# CloudBuilder Project

Welcome to the CloudBuilder project! This repository contains a suite of services designed to automate the deployment of web applications using a microservices architecture. Each component of the project plays a specific role, from managing front-end interactions to handling backend operations and reverse proxy configurations.

## Overview of Services
The CloudBuilder project consists of the following services:
1. **Frontend**: A Next.js application that provides a user interface for submitting and monitoring web application builds.
2. **Build Server**: A Docker-based service that builds JavaScript web applications and manages deployments on AWS ECS.
3. **API Server**: A Node.js application that handles requests between the frontend and the build server.
4. **Reverse Proxy**: Manages routing of requests to the appropriate project subdomains and serves built files from AWS S3.

## Getting Started

Below are the general steps to set up each service. Each service's directory contains a more detailed README with specific instructions and configuration details.

### Frontend (Next.js Server)
1. **Install Dependencies**: Navigate to the frontend directory and install the necessary dependencies:
   ```bash
   npm install
   ```
   Alternatively, if you prefer `yarn`, `pnpm`, or `bun`, corresponding instructions are available in the service-specific README.
2. **Run the Application**:
   ```bash
   npm run dev
   ```

### Build Server (AWS Deployment)
1. **Setup AWS ECR**:
   - Create an AWS Elastic Container Registry (ECR) repository.
   - Follow the AWS-provided instructions to build and push the Docker image to the ECR repository.
2. **Setup AWS ECS**:
   - Create an AWS Elastic Container Service (ECS) cluster.
   - Connect the cluster to the Docker image stored on ECR to start the deployment.

### API Server
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run the Application**:
   ```bash
   node index.js
   ```

### Reverse Proxy
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run the Application**:
   ```bash
   node index.js
   ```

## Configuration Files
Sample environment (.env) files are provided in each service directory. These files outline the necessary environment variables.

- **Build Server & API Server**: Set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to your AWS credentials to allow access to AWS services.
- **Frontend & Reverse Proxy**: These services do not require any specific environment variables.

## Troubleshooting Common Issues
1. **S3 Bucket Accessibility**: Ensure the S3 bucket where the build artifacts are stored is publicly accessible.
2. **ECS Subnets Configuration**: Verify that the ECS subnets are correctly set to ensure proper network configurations.
3. **Environment Variables**: Double-check that all required environment variables are correctly set up in your environment. Check for any hard-coded values that need to be updated.

## Additional Information
For more detailed information, refer to the README files in each service's directory. These documents provide specific setup instructions, additional configuration options, and detailed troubleshooting tips.

Thank you for using or contributing to the CloudBuilder project! We hope this automation tool enhances your development workflow and deployment processes.