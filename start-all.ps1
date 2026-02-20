# Xlite Payment Gateway - Start Frontend + Server Together
# This script starts both frontend and server in separate windows

Write-Host "🚀 Starting Xlite Payment Gateway..." -ForegroundColor Cyan
Write-Host ""

# Start server in new window
Write-Host "📡 Starting server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\server'; npm run dev" -WindowStyle Normal

# Wait a bit for server to start
Start-Sleep -Seconds 3

# Start frontend in new window
Write-Host "🌐 Starting frontend..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "✅ Both server and frontend are starting!" -ForegroundColor Green
Write-Host "   Server: http://localhost:3001" -ForegroundColor Gray
Write-Host "   Frontend: http://localhost:5173" -ForegroundColor Gray
Write-Host ""
Write-Host "⚠️  Make sure server\.env file has SMTP_PASSWORD configured!" -ForegroundColor Yellow
