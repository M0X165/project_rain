CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data (optional)
INSERT INTO contacts (name, email, message) VALUES 
('Test User', 'test@example.com', 'This is a test message'),
('Demo Contact', 'demo@example.com', 'Interested in your solution')
ON CONFLICT DO NOTHING;
