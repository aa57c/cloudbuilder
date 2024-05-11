# API Server

This project is a simple API server built with Node.js and Express. It's designed to interact with AWS ECS to spin up containers for specific tasks.

## Features

- **Express Middleware**: The server uses Express middleware for handling JSON requests and setting CORS headers.
- **AWS ECS Integration**: The server can spin up containers in AWS ECS using the provided cluster and task ARN.
- **Redis Integration**: The server uses Redis for subscribing to logs.

## Endpoints

- `GET /`: Returns a simple message indicating the API is working.
- `POST /project`: Accepts a JSON body with `gitURL` and `slug` fields. It spins up a new container in AWS ECS with the provided Git URL and slug. If no slug is provided, a random one is generated. The endpoint returns a JSON response with the status and the URL of the project.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up your AWS credentials and region in your environment.
4. Set up your Redis server and update the connection details in the code.
5. Run the server with `node index.js`.

## Environment Variables

- `CLUSTER`: The ARN of your AWS ECS cluster.
- `TASK`: The ARN of your AWS ECS task definition.

## Note

This is a basic implementation and does not include error handling or validation. It's recommended to add these before using in a production environment.