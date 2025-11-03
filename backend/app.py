from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sqlite3
from datetime import datetime
from contextlib import closing

app = Flask(__name__)
CORS(app)

# Database configuration
DATABASE = 'contact_messages.db'

def get_db():
    """Create database connection"""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initialize the database with the messages table"""
    with closing(get_db()) as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                subject TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()

# Initialize database on startup
init_db()

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({'error': f'{field} is required'}), 400
        
        # Save to database
        with closing(get_db()) as conn:
            conn.execute('''
                INSERT INTO messages (name, email, subject, message)
                VALUES (?, ?, ?, ?)
            ''', (data['name'], data['email'], data['subject'], data['message']))
            conn.commit()
        
        print(f"Contact Form Submission saved to database:")
        print(f"Name: {data['name']}")
        print(f"Email: {data['email']}")
        print(f"Subject: {data['subject']}")
        print(f"Message: {data['message']}")
        
        return jsonify({'message': 'Message received successfully'}), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'An error occurred processing your request'}), 500

@app.route('/api/contact', methods=['GET'])
def get_contacts():
    """Retrieve all contact messages"""
    try:
        with closing(get_db()) as conn:
            cursor = conn.execute('''
                SELECT id, name, email, subject, message, created_at
                FROM messages
                ORDER BY created_at DESC
            ''')
            messages = []
            for row in cursor.fetchall():
                messages.append({
                    'id': row['id'],
                    'name': row['name'],
                    'email': row['email'],
                    'subject': row['subject'],
                    'message': row['message'],
                    'created_at': row['created_at']
                })
        
        return jsonify({'messages': messages}), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'An error occurred retrieving messages'}), 500

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)


