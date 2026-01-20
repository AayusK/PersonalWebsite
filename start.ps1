# Start script for Personal Website (PowerShell)

Write-Host "🚀 Starting Personal Website..." -ForegroundColor Cyan

# Start backend
Write-Host "🐍 Starting Flask backend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; python app.py"

# Wait a moment for backend to start
Start-Sleep -Seconds 2

# Start frontend
Write-Host "Starting React frontend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev"

Write-Host ""
Write-Host "Personal Website is running!" -ForegroundColor Green
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host "   Backend: http://localhost:5000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Close the terminal windows to stop the servers" -ForegroundColor Cyan

