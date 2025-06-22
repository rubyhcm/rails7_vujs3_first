<div align="center">
  <!-- You can change this to a real logo if you have one -->
  <a href="https://github.com/your_username/vue3_122020">
    <img src="https://vuejs.org/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Vue 3 and Rails Todo List Manager</h3>

  <p align="center">
    A simple and effective Todo List application built with a powerful combination of Vue.js 3 for the frontend and Ruby on Rails for the backend API.
    <br />
    <a href=https://github.com/rubyhcm/rails7_vujs3_first/issues>Report Bug</a>
    ·
    <a href=https://github.com/rubyhcm/rails7_vujs3_first/issues>Request Feature</a>
  </p>
</div>

[![status](https://img.shields.io/badge/status-done-brightgreen)](https://shields.io)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#-about-the-project">About The Project</a>
      <ul>
        <li><a href="#-built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#-getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#-installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#-usage">Usage</a></li>
    <li><a href="#-running-tests">Running Tests</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-license">License</a></li>
    <li><a href="#-author">Author</a></li>
  </ol>
</details>

## 📖 About The Project

This project serves as a practical example of how to integrate a modern JavaScript framework (Vue.js) with a robust backend framework (Ruby on Rails). It demonstrates RESTful API design, frontend state management, and component-based architecture.

### ✨ Built With

This project was built with the following technologies:

- [![Ruby][Ruby-shield]][Ruby-url]
- [![Rails][Rails-shield]][Rails-url]
- [![Vue.js][Vue.js-shield]][Vue.js-url]
- [![Node.js][Node.js-shield]][Node.js-url]

## 🚀 Getting Started

This section will guide a new developer to get a copy of the project up and running on their local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- Ruby (check `.ruby-version` for the specific version)
- Bundler (`gem install bundler`)
- Node.js & npm

### 🔧 Installation

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
    ```

## ▶️ Usage

To run the application, you will need to start both the Rails server and the Vue development server in separate terminal windows.

1.  **Start the Rails API server**
    (From the project root directory)

    ```sh
    rails s -p 3001
    ```

    The API will be running on `http://localhost:3001`.

2.  **Start the Vue.js development server**
    (From the `frontend` directory)
    ```sh
    npm run serve
    ```
    The frontend application will be available at `http://localhost:8080` (or another port specified in the output).

## ✅ Running Tests

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

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE.txt` for more information. (You would need to create this file).

## ✍️ Author

**James** - _Software Engineer_

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Ruby-shield]: https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white
[Ruby-url]: https://www.ruby-lang.org/
[Rails-shield]: https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white
[Rails-url]: https://rubyonrails.org/
[Vue.js-shield]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D
[Vue.js-url]: https://vuejs.org/
[Node.js-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.js-url]: https://nodejs.org/
