# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the backend folder
COPY ./backend/package*.json ./
RUN npm install

# Copy all files from the backend folder to the working directory
COPY ./backend ./

RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the backend folder
COPY ./backend/package*.json ./
RUN npm install --only=production

# Copy built files from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/main"]
