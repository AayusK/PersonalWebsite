#!/bin/bash

# Start script for Personal Website

echo "Starting  Website..."

# Check if virtual environment exists for backend
if [ ! -d "backend/venv" ]; then
    echo "Creating Python virtual environment"
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    cd ..
else
    cd backend
    source venv/bin/activate
    cd ..
fi

# Start backend in background
echo " Starting Flask backend"
cd backend
source venv/bin/activate
python app.py &
BACKEND_PID=$!
cd ..

sleep 2

# Start frontend
echo "Starting React frontend"
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "Website is running!"
echo "   Frontend: http://localhost:3000"
echo "   Backend: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for user interrupt
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait

