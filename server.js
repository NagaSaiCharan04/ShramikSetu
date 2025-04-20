const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Allow CORS (for local developmenont)
app.use(cors());
app.use(express.json());

let workers = [];
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// POST endpoint to add a new worker
app.post('/workers', (req, res) => {
  const worker = req.body;
  if (!worker.name || !worker.skills || !worker.location || !worker.contact) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  workers.push(worker);
  res.status(201).json(worker);
  console.log(req.body);
});

// GET endpoint to retrieve all workers
app.get('/workers', (req, res) => {
  res.json(workers);
});

// GET endpoint to search for workers
app.get('/workers/search', (req, res) => {
  const { skill = '', location = '', availability = '' } = req.query;
  const filtered = workers.filter(worker => {
    return (
      worker.skills.toLowerCase().includes(skill.toLowerCase()) &&
      worker.location.toLowerCase().includes(location.toLowerCase()) &&
      worker.availability.toLowerCase().includes(availability.toLowerCase())
    );
  });
  res.json(filtered);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});