# Project Specification

## Overview
Kensheets is a web application that allows users to upload CSV files, parse data, and visualize statistics through charts. It includes features such as analytics panels, theme switching, and data export.

## Dependencies

The project relies on the following npm packages:

- **react**: UI library for building components.
- **react-dom**: Rendering React components to the DOM.
- **chart.js**: Rendering charts for data visualization.
- **react-chartjs-2**: React wrapper for Chart.js.
- **file-saver**: Exporting data as files (e.g., CSV).
- **@babel/core**, **@babel/preset-env**, **@babel/preset-react**: Transpiling modern JavaScript and JSX.
- **webpack**, **webpack-cli**, **webpack-dev-server**: Bundling and serving the application.
- **eslint**: Linting JavaScript code.
- **jest** (optional): Running unit tests.

For development, the project also uses:

- **nodemon**: Automatically restarting the development server on code changes.
- **dotenv**: Managing environment variables.

All dependencies are listed in `package.json` and can be installed via:

```bash
npm install
```

## Build & Run

```bash
npm run build   # Build the production bundle
npm start       # Start the development server
```

## Features
- File upload and parsing (CSV).
- Statistical calculations (mean, median, mode, etc.).
- Chart rendering with customizable themes.
- Data export functionality.
- Analytics panel displaying key metrics.

## License
MIT
