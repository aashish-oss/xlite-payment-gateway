# Xlite Payment Gateway - Server Startup Script
# PowerShell script to setup and start the server

Write-Host "🚀 Xlite Server Setup & Start" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found! Please install Node.js first." -ForegroundColor Red
    Write-Host "   Download from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Navigate to server directory
$serverPath = Join-Path $PSScriptRoot "server"
if (-not (Test-Path $serverPath)) {
    Write-Host "❌ Server folder not found!" -ForegroundColor Red
    exit 1
}

Set-Location $serverPath
Write-Host "📁 Changed to server directory" -ForegroundColor Green

# Check if node_modules exists
$nodeModulesPath = Join-Path $serverPath "node_modules"
if (-not (Test-Path $nodeModulesPath)) {
    Write-Host ""
    Write-Host "📦 Installing server dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Dependencies installed!" -ForegroundColor Green
} else {
    Write-Host "✅ Dependencies already installed" -ForegroundColor Green
}

# Check .env file
$envPath = Join-Path $serverPath ".env"
if (-not (Test-Path $envPath)) {
    Write-Host ""
    Write-Host "⚠️  .env file not found! Creating from .env.example..." -ForegroundColor Yellow
    $envExamplePath = Join-Path $serverPath ".env.example"
    if (Test-Path $envExamplePath) {
        Copy-Item $envExamplePath $envPath
        Write-Host "✅ .env file created. Please update SMTP_PASSWORD!" -ForegroundColor Yellow
    }
}

# Check if SMTP_PASSWORD is set
$envContent = Get-Content $envPath -ErrorAction SilentlyContinue
$hasPassword = $envContent | Select-String -Pattern "SMTP_PASSWORD=(?!<Gmail App Password>)" | Where-Object { $_.Line -notmatch "<Gmail App Password>" }

if (-not $hasPassword) {
    Write-Host ""
    Write-Host "⚠️  WARNING: SMTP_PASSWORD not configured!" -ForegroundColor Yellow
    Write-Host "   Forms will not work until you set Gmail App Password." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "   Steps to get Gmail App Password:" -ForegroundColor Cyan
    Write-Host "   1. Go to: https://myaccount.google.com/security" -ForegroundColor White
    Write-Host "   2. Enable 2-Step Verification" -ForegroundColor White
    Write-Host "   3. Go to App Passwords → Generate" -ForegroundColor White
    Write-Host "   4. Copy the 16-character password" -ForegroundColor White
    Write-Host "   5. Update server\.env file: SMTP_PASSWORD=your_password" -ForegroundColor White
    Write-Host ""
}

Write-Host ""
Write-Host "🎯 Starting server..." -ForegroundColor Cyan
Write-Host "   Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

# Start the server
npm run dev
