# Recipe Book

## Overview

Recipe Book is a full-stack JavaScript application that allows users to browse and view detailed information about recipes. The application consists of two separate parts:

- **Backend**: Built with Node.js (Express or Nest.js) and TypeScript.
- **Frontend**: Built with React, TypeScript, Material UI, react-router-dom, and RTK Query. It is fully responsive and designed for mobile, tablet, and desktop devices.

## Project Structure

The project is organized into two separate folders:

- **/client**: Contains the React application.
- **/server**: Contains the Node.js API server.

## Features

### Backend

- **Get Available Recipes**: Supports filtering by ingredient, country, and category.
- **Get Recipe Details**: Retrieves detailed information for a specific recipe.

### Frontend

- **Recipe List Page**:
  - Displays a title based on the applied filter.
  - Shows a list of recipes (all by default) with clickable items leading to detailed views.
- **Recipe Info Page**:
  - Displays detailed information including recipe image, name (centered), country (clickable), instructions (centered), and ingredients (clickable).
  - A slide-out right sidebar is available on all devices to show recipes in the same category.
- **Responsive Design**: Uses Material UI components and breakpoints to ensure a smooth experience on all devices.
- **Routing**: Client-side routing is implemented with react-router-dom.
- **Data Fetching**: Utilizes Redux Toolkit Query (RTK Query) to fetch data from the backend API.

## Setup Instructions

### Prerequisites

- Node.js (v16 or above)
- npm (or yarn)

### Setup

1. Clone repository:
   ```bash
   git clone https://github.com/fernets/recipe-book.git
   ```
2. Install dependencies

```bash
npm install
```

```bash
npm run server:setup
```

```bash
npm run client:setup
```

3. Run application

```bash
npm run dev
```

4. Go to http://localhost:5173/

Also, you can import Postman collection from the file "Recipe Book API.postman_collection.json" to test backend separately.
