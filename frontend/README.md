# Task Management App - Frontend

This is a Task Management application built with Next.js. The application allows users to create, update, and manage tasks. It follows a modular structure with different components for forms, modals, UI elements, and layout.

## Project Structure

```plaintext
app
├── create
│   └── page.tsx
├── update
│   └── [id]
│       └── page.tsx
├── page.tsx
│
components
│
├── forms
│   └── TaskForm.tsx
├── modals
│   └── ConfirmModal.tsx
├── ui
│   ├── Button.tsx
│   └── Pagination.tsx
├── layout
│   ├── Header.tsx
│   └── Footer.tsx
├── navigation
│   └── NavBar.tsx
services
│   └── taskService.ts
styles
│   └── global.css
│
.env.development
│
.env.production
├── 

```
## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>=18.x)
- Docker and Docker Compose (if running with Docker)
- PostgreSQL (if running locally without Docker)
- Backend running

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ranizouaoui/Task-Management-App/
    cd task-management-app/frontend
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

3. The application will be available at `http://localhost:3001`.

### Running Locally

1. Ensure PostgreSQL is running and create a database named `taskmanager`.
2. Ensure backend is running.

3. Start the NestJS application:

    ```bash
    npm run dev
    ```

## Directory Structure

`app`
- reate/page.tsx: The page for creating a new task.
- update/[id]/page.tsx: The page for updating an existing task.
- page.tsx: The main page of the application.

`components`
- forms/TaskForm.tsx: Form component for creating and updating tasks.
- modals/ConfirmModal.tsx: Modal component for confirming actions.
- ui/Button.tsx: Reusable button component.
- ui/Pagination.tsx: Pagination component.
- layout/Header.tsx: Header component.

`services`
- taskService.ts: Service for interacting with the backend API.

`styles`
- global.css: Global CSS styles for the application.

## Environment Variables

`NEXT_PUBLIC_API_BASE_URL:` The base URL for the API. Set this in .env.development and .env.production.


### Example Environment Files

`.env.development` : NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
`.env.production` : NEXT_PUBLIC_API_BASE_URL=http://backend:5000
