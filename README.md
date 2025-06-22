# Vue 3 and Rails Todo List Manager

## About The Project

A more detailed description of your project. What problem does it solve? What technologies does it use? You can mention that this is a Ruby on Rails backend with a Vue.js frontend.

## Getting Started

This section will guide a new developer to get a copy of the project up and running on their local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (check `.ruby-version` for the specific version)
- Bundler
- Node.js
- Yarn or npm

### Installation

1.  **Clone the repository**

2.  **Install Backend Dependencies**

    ```sh
    bundle install
    ```

3.  **Setup the Database**

    ```sh
    rails db:create
    rails db:migrate
    # Optional: Seed the database with initial data
    # rails db:seed
    ```

4.  **Install Frontend Dependencies**
    ```sh
    cd frontend
    npm install
    # or if you use yarn:
    # yarn install
    ```

## Usage

To run the application, you will need to start both the Rails server and the Vue development server.

1.  **Start the Rails API server**
    From the project root:

    ```sh
    rails s -p 3001
    ```

    The API will be running on `http://localhost:3001`.

2.  **Start the Vue.js development server**
    In a new terminal, navigate to the frontend directory and run:
    ```sh
    cd frontend
    npm run serve
    # or if you use yarn:
    # yarn serve
    ```
    The frontend application will be available at `http://localhost:8080` (or another port specified in the output).

## Running Tests

- **Backend (RSpec/Minitest):**
  ```sh
  # From the project root
  bundle exec rspec
  ```
- **Frontend (Jest/Cypress):**
  ```sh
  # From the /frontend directory
  npm run test
  ```
