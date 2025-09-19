#  R&J Movies

Welcome to **R&J Movies**\! This project is a dynamic single-page application built with **React** and **TypeScript**. It serves as a user-friendly platform for browsing, searching, and discovering a wide range of movies.

##  Features

  * **Browse Movies:** See a curated list of trending movies right on the homepage.
  * **Search Functionality:** Find any movie by its title using the intuitive search bar.
  * **Detailed Movie Information:** Click on any movie to view comprehensive details, including the plot, release date, and ratings.
  * **Responsive Design:** The application is fully responsive, providing a great user experience on both desktop and mobile devices.

-----

##  Technologies Used

This project is built using modern web development technologies to ensure a fast, scalable, and maintainable codebase.

  * **React:** A powerful JavaScript library for building user interfaces.
  * **TypeScript:** A statically-typed superset of JavaScript that helps catch errors early and improves code quality.
  * **Vite:** A fast build tool that provides an efficient development environment.
  * **React Router:** For seamless client-side routing and navigation.
 

-----

## Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have **Node.js** and **npm** (or **Yarn**) installed on your machine.

  * **Node.js**: [Download from here](https://nodejs.org/)
  * **npm**: Comes with Node.js
  * **Yarn**: You can install it globally via `npm install --global yarn`

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    cd [your-repository-name]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use Yarn
    yarn install
    ```

-----

##  API Key Setup

This application relies on a third-party API to fetch movie data. You'll need to get your own API key to make it work.

1.  **Get an API Key:**

      * Sign up for a free account on a movie database service like [The Movie Database (TMDb)](https://www.themoviedb.org/).
      * Go to your account settings and generate a new API key.

2.  **Create an `.env` file:**

      * In the root directory of your project, create a new file named `.env`.
      * Add your API key to this file in the following format, replacing `your-api-key-here` with your actual key.

    <!-- end list -->

    ```env
    VITE_API_KEY=your-api-key-here
    ```

     **Note:** The `VITE_` prefix is essential for Vite to expose this environment variable to your frontend code.

-----

##  Running the Application

To run the application in development mode:

```bash
npm run dev
# or with Yarn
yarn dev
```

The app will be available at `http://localhost:5173`.

Live Link to view the project `https://legendary-rj-movies.vercel.app/`

##  License

Copyright (c) 2025 RhonaJoy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files , to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

-----

