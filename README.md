# Maddy Walters Portfolio Website

A simple portfolio website, currently hosted at https://maddywalters.com.

## Available Commands
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

### `npm test`

Launches the test runner in the interactive watch mode.

---

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

---

### `docker build -t maddy-website .`

Build the website in a Docker container, from the `node:16.14.2-alpine` base image.

---

### `docker run -p 80:80 --name maddy-website --rm maddy-website`

Run the Docker container, built by the previously mentioned `docker build -t maddywebsite .` command.

---
