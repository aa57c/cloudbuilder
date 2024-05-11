# Reverse Proxy

This project is a simple reverse proxy server built with Node.js, Express, and http-proxy. It's designed to route requests to different paths in an AWS S3 bucket based on the subdomain of the request.

## Features

- **Subdomain Routing**: The server routes requests to different paths in the S3 bucket based on the subdomain of the request.
- **Default File Handling**: The server defaults to serving the `index.html` file if the root path of a subdomain is requested.

## How it Works

The `index.js` file is the main entry point of the application. It starts an Express server and sets up a middleware function that routes requests to different paths in the S3 bucket based on the subdomain of the request. It also sets up an event listener on the proxy that defaults to serving the `index.html` file if the root path of a subdomain is requested.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set the `PORT` environment variable to the port you want the server to listen on. If not set, the server will listen on port 9000.
4. Run the server with `node index.js`.

## Environment Variables

- `PORT`: The port the server listens on.

## Note

This is a basic implementation and does not include error handling or validation. It's recommended to add these before using in a production environment.