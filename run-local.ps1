Write-Host "Starting local development server..." -ForegroundColor Green
Write-Host ""
Write-Host "The application will be available at:" -ForegroundColor Yellow
Write-Host "http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

Set-Location dist
python -m http.server 8000

