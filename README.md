# FCT-Master-Assignment

## Tech Stack

- **Backend**: Node.js, Express
- **AI Matching**: Fuse.js (fuzzy search)
- **API Docs**: Swagger UI
- **Logging**: Morgan + custom logger

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fluid-build.git
   cd fluid-build
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

## API Endpoints

| Endpoint   |      Method      |  Description |
|----------|:-------------:|------:|
| /api/map-materials |  POST | Map materials to FCT format |
| /api/update-description |    PUT   |   Update item descriptions |
| /api-docs | GET |    Swagger API documentation |