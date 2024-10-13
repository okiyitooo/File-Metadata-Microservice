Markdown
# File Metadata Microservice

This is a Node.js and Express.js based microservice that allows users to upload files and view their metadata (file name, type, and size).

**This project was inspired by the "File Metadata Microservice" challenge on freeCodeCamp.**

## Features

*   **File Upload:**
    *   Provides an endpoint to upload files.
    *   Uses `multer` to handle file uploads.
*   **Metadata Extraction:**
    *   Extracts the file name, type, and size from the uploaded file.
    *   Returns the metadata as a JSON response.

## API Endpoint

*   **POST /api/fileanalyse:**
    *   Upload a file using a form with a file input field (`name="upfile"`).
    *   Response: `{ name: "filename", type: "file_mimetype", size: file_size_in_bytes }`

## Project Structure

*   `index.js`: Main server file.
*   `public/`: Static files (HTML, CSS, JavaScript for the frontend).
*   `views/`: HTML templates.

## Installation and Setup

1.  Clone the repository: `git clone <repository_url>`
2.  Install dependencies: `npm install`
3.  Start the server: `npm start`

## Usage

1.  Access the app in your web browser.
2.  Use the provided form to upload a file.
3.  The file metadata will be displayed on the page.

## Example Usage

**Upload a file:**

1.  Go to the app in your browser.
2.  Click on the "Choose File" button.
3.  Select a file from your computer.
4.  Click the "Upload" button.

**Response:**

```json
{
  "name": "my-image.jpg",
  "type": "image/jpeg",
  "size": 256000
}

**Technologies Used**
Node.js
Express.js
Multer
HTML
CSS
JavaScript