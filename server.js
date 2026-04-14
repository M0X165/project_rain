const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('frontend'));

// PostgreSQL connection for contacts
const pool = new Pool({
    user: 'admin',
    host: 'postgres_db',
    database: 'contactdb',
    password: 'secret',
    port: 5432,
});

// ========== HARDCODED DATABASE ==========
const hardcodedDB = {
    places: [
        { 
            id: 1, 
            name: 'Sofia Rain Center', 
            country: 'Bulgaria',
            city: 'Sofia',
            type: 'Research Facility',
            description: 'Main research and development center for R.A.I.N. technology',
            established: '2022',
            coordinates: '42.6977° N, 23.3219° E'
        },
        { 
            id: 2, 
            name: 'Plovdiv Water Hub', 
            country: 'Bulgaria',
            city: 'Plovdiv',
            type: 'Collection Station',
            description: 'Rainwater collection and purification station',
            established: '2023',
            coordinates: '42.1354° N, 24.7453° E'
        },
        { 
            id: 3, 
            name: 'Varna Coastal Station', 
            country: 'Bulgaria',
            city: 'Varna',
            type: 'Testing Site',
            description: 'Coastal testing facility for humidity and rain collection',
            established: '2023',
            coordinates: '43.2141° N, 27.9147° E'
        },
        { 
            id: 4, 
            name: 'Burgas Energy Hub', 
            country: 'Bulgaria',
            city: 'Burgas',
            type: 'Energy Conversion',
            description: 'Kinetic energy conversion and storage facility',
            established: '2024',
            coordinates: '42.5048° N, 27.4626° E'
        },
        { 
            id: 5, 
            name: 'Rila Mountain Station', 
            country: 'Bulgaria',
            city: 'Rila',
            type: 'High-Altitude Research',
            description: 'Mountain facility for snow and rain harvesting research',
            established: '2024',
            coordinates: '42.1333° N, 23.5833° E'
        }
    ],
    // ========== ADD TEAM MEMBERS HERE ==========
    team: [
        { id: 1, name: 'Atanas Mitev', role: 'Product manager' },
        { id: 2, name: 'Ivailo Gerchev', role: 'Designer' },
        { id: 3, name: 'Maxim Simeonov', role: 'Programmer' }
    ]
};

// ========== API ENDPOINTS FOR PLACES ==========
app.get('/api/places', (req, res) => {
    res.json(hardcodedDB.places);
});

app.get('/api/places/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const place = hardcodedDB.places.find(p => p.id === id);
    if (place) {
        res.json(place);
    } else {
        res.status(404).json({ error: 'Place not found' });
    }
});

app.get('/api/places/search', (req, res) => {
    const searchTerm = req.query.q?.toLowerCase() || '';
    if (!searchTerm) {
        return res.json(hardcodedDB.places);
    }
    const results = hardcodedDB.places.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.city.toLowerCase().includes(searchTerm) ||
        p.country.toLowerCase().includes(searchTerm)
    );
    res.json(results);
});

// ========== API ENDPOINT FOR TEAM (ADD THIS) ==========
app.get('/api/team', (req, res) => {
    res.json(hardcodedDB.team);
});

// ========== CONTACT FORM API ==========
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
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

app.get('/api/contacts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ success: false, error: 'Database error' });
    }
});

// ========== SERVE WEB PAGES ==========
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'about.html'));
});

app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'contacts.html'));
});

// ========== START SERVER ==========
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log('\n✅ Available endpoints:');
    console.log('  - GET  /api/places     - All locations');
    console.log('  - GET  /api/team       - Team members');  // ← Now this works!
    console.log('  - POST /api/contact    - Submit contact form');
    console.log('  - GET  /api/contacts   - View all contacts');
});
