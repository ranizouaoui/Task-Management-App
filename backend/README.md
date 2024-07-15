# Task Management App - Backend

This is the backend service for the Task Management App, built using NestJS and PostgreSQL. The backend service provides a RESTful API to manage tasks.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>=14.x)
- npm (>=6.x)
- Docker and Docker Compose (if running with Docker)
- PostgreSQL (if running locally without Docker)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ranizouaoui/Task-Management-App/
    cd task-management-app/backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Running the Application

### Using Docker (Recommended)

1. Ensure Docker and Docker Compose are installed.

2. Start the Docker containers:

    ```bash
    docker-compose up --build
    ```

3. The application will be available at `http://localhost:5000`.

### Running Locally

1. Ensure PostgreSQL is running and create a database named `taskmanager`.
2. Create a `.env.development` file in the `backend` directory with the following content:

    ```env
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=yourusername
    DATABASE_PASSWORD=yourpassword
    DATABASE_NAME=taskmanager
    ```

3. Start the NestJS application:

    ```bash
    npm run start:dev
    ```

4. The application will be available at `http://localhost:5000`.

## Running Tests

```bash
npm run test
 ```
## API Documentation (Swagger)

API documentation is available via Swagger. After running the application, visit http://localhost:3000/api to view the Swagger documentation.


