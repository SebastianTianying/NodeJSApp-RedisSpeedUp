# NodeJSApp-RedisSpeedUp

This project is a Node.js application that utilizes Redis for caching to enhance performance. It demonstrates integrating Redis with a Node.js backend for faster data retrieval.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the application, make sure you have [Node.js](https://nodejs.org/en/download/) installed on your system.

### Installing

To set up the project, run the following commands in your terminal:

```bash
# Initialize the project
npm init -y

# Install dependencies
npm install axios express cors redis

# Install development dependencies
npm install --save-dev snowpack concurrently nodemon

# Install Bootstrap for frontend styling
npm install bootstrap
```

Running the Application\
Start the Redis server:
```bash
redis-server
```
Then start the application:
```bash
npm start
```
Connect to the Redis server using the CLI:
```bash
redis-cli
```

### Built With
Node.js - The JavaScript runtime used.\
Express - The web application framework.\
Redis - The in-memory data structure store used as a database and cache.\
Axios - Promise-based HTTP client for making HTTP requests.\
Bootstrap - Frontend framework for building responsive, mobile-first sites.\


### Development Tools
Snowpack - A modern, lightweight build tool for faster development builds.\
Concurrently - A utility that manages multiple processes concurrently.\
Nodemon - A tool that automatically restarts the node application when file changes in the directory are detected.\

### DEMO
Initial Query: cache missed, long query time
<img width="919" alt="image" src="https://github.com/SebastianTianying/NodeJSApp-RedisSpeedUp/assets/66150985/add319d8-6092-4888-96a1-6c796c835a77">

Second Query: cache hit, super fast query time with the Redis! 
<img width="919" alt="image" src="https://github.com/SebastianTianying/NodeJSApp-RedisSpeedUp/assets/66150985/5355b1bf-6e90-45be-a018-d797f497f87a">

Console logging cache miss or hit after each query request with Redis
<img width="777" alt="image" src="https://github.com/SebastianTianying/NodeJSApp-RedisSpeedUp/assets/66150985/6a061945-1e8e-4c50-bcc7-c97140681456">

Similar for query with specific parameters:
<img width="913" alt="image" src="https://github.com/SebastianTianying/NodeJSApp-RedisSpeedUp/assets/66150985/e902ad43-1fad-4a92-9b0c-f2e00cf02c5f">

Significant improvement in process time with Redis!
<img width="912" alt="image" src="https://github.com/SebastianTianying/NodeJSApp-RedisSpeedUp/assets/66150985/a01a1013-63e8-4fdb-abcd-572b8506c977">

### Acknowledgments

This project follows tutorials from Web Dev Simplified - Create Your Own Postman and Redis Crash Course.



