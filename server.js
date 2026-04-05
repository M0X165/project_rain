const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('frontend'));

// PostgreSQL connection
const pool = new Pool({
    user: 'admin',
    host: 'postgres_db',
    database: 'contactdb',
    password: 'secret',
    port: 5432,
});

// Hardcoded database (team members from About page)
const hardcodedDB = {
    team: [
        { id: 1, name: 'Atanas Mitev', role: 'Product manager' },
        { id: 2, name: 'Ivailo Gerchev', role: 'Designer' },
        { id: 3, name: 'Maxim Simeonov', role: 'Programmer' }
    ],
    solutions: [
        { id: 1, name: 'Rainwater Harvesting', description: 'Collect and store rain for non‑potable use.' },
        { id: 2, name: 'Kinetic Energy Conversion', description: 'Convert falling drops to electric energy.' },
        { id: 3, name: 'Water Purification', description: 'Clean and bottle collected water for reuse.' }
    ]
};

// API: Get team members (hardcoded)
app.get('/api/team', (req, res) => {
    res.json(hardcodedDB.team);
});

// API: Get solutions (hardcoded)
app.get('/api/solutions', (req, res) => {
    res.json(hardcodedDB.solutions);
});

// API: Submit contact form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }
    
    try {
        await pool.query(
            'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
            [name, email, message]
        );
        res.status(201).json({ success: true });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ success: false, error: 'Database error' });
    }
});

// API: Get all contacts (for admin purposes)
app.get('/api/contacts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ success: false, error: 'Database error' });
    }
});

// Serve pages
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'about.html'));
});

app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'contacts.html'));
});

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  - GET  /              Home page');
    console.log('  - GET  /about         About page');
    console.log('  - GET  /contacts      Contacts page');
    console.log('  - POST /api/contact   Submit contact form');
    console.log('  - GET  /api/contacts  View all contacts (admin)');
    console.log('  - GET  /api/team      Get team members');
    console.log('  - GET  /api/solutions Get solutions');
});
