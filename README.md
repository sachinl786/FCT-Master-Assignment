# FCT-Master-Assignment

## Tech Stack

- **Backend**: Node.js, Express
- **AI Matching**: Fuse.js (fuzzy search)
- **API Docs**: Swagger UI
- **Logging**: Morgan + custom logger

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sachinl786//fluid-build.git
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

## Usage Examples
### Map Materials
```bash
curl -X POST http://localhost:3000/api/map-materials \
  -H "Content-Type: application/json" \
  -d '{
    "roomType": "Bathroom",
    "materials": [
      "marble floor",
      "chrome fixtures"
    ]
  }'
  ```
### Update Description
```bash
curl -X PUT http://localhost:3000/api/update-description \
  -H "Content-Type: application/json" \
  -d '{
    "code": "09 68 13",
    "newDescription": "Premium Marble Finish"
  }'
  ```


## View API Documentation
After starting the server, access the interactive Swagger docs at:
```bash
http://localhost:3000/api-docs
```

## Configuration
1. To modify the FCT Master Format data, edit:
```bash
src/data/fct-master-format.json
```

2. Logs are stored in:
```bash
src/logs/requests.log
```
