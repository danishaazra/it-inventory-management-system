@echo off
echo Starting local development server...
echo.
echo The application will be available at:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
cd dist
python -m http.server 8000

