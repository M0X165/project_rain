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

// ========== HARDCODED DATABASE: PLACES ==========
// This is your hardcoded database of locations/places
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
    ]
};

// ========== API ENDPOINTS FOR PLACES ==========

// Get all places
app.get('/api/places', (req, res) => {
    res.json(hardcodedDB.places);
});

// Get place by ID
app.get('/api/places/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const place = hardcodedDB.places.find(p => p.id === id);
    if (place) {
        res.json(place);
    } else {
        res.status(404).json({ error: 'Place not found' });
    }
});

// Get places by country
app.get('/api/places/country/:country', (req, res) => {
    const country = req.params.country.toLowerCase();
    const places = hardcodedDB.places.filter(p => p.country.toLowerCase() === country);
    res.json(places);
});

// Get places by type
app.get('/api/places/type/:type', (req, res) => {
    const type = req.params.type.toLowerCase();
    const places = hardcodedDB.places.filter(p => p.type.toLowerCase() === type);
    res.json(places);
});

// Search places (query parameter: ?q=searchterm)
app.get('/api/places/search', (req, res) => {
    const searchTerm = req.query.q?.toLowerCase() || '';
    if (!searchTerm) {
        return res.json(hardcodedDB.places);
    }
    const results = hardcodedDB.places.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.city.toLowerCase().includes(searchTerm) ||
        p.country.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );
    res.json(results);
});

// ========== CONTACT FORM API (PostgreSQL) ==========

// Submit contact form
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

// Get all contacts (admin)
app.get('/api/contacts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ success: false, error: 'Database error' });
    }
});

// ========== SERVE PAGES ==========

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'about.html'));
});

app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'contacts.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// ========== START SERVER ==========

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`\nServer running on http://localhost:${PORT}`);
    console.log('\nAvailable pages:');
    console.log('  - http://localhost:3000/           Homepage');
    console.log('  - http://localhost:3000/about      About page');
    console.log('  - http://localhost:3000/contacts   Contacts page');
    console.log('\nHardcoded Places API endpoints:');
    console.log('  - GET  /api/places                 Get all places');
    console.log('  - GET  /api/places/1               Get place by ID');
    console.log('  - GET  /api/places/country/Bulgaria Get places by country');
    console.log('  - GET  /api/places/type/Research   Get places by type');
    console.log('  - GET  /api/places/search?q=Sofia  Search places');
    console.log('\nContact API endpoints (PostgreSQL):');
    console.log('  - POST /api/contact                Submit contact form');
    console.log('  - GET  /api/contacts               View all contacts');
});