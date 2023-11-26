const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Directory where your EJS templates are located

// Route to render the EJS template with default data
app.get('/', (req, res) => {
  const defaultData = {
    title: 'Node.js EJS Example',
    date: new Date().toDateString(),
  };
  
  // Render the 'template.ejs' file with the default data
  res.render('template', defaultData);
});

// Route to render the EJS template with additional data
app.get('/additional', (req, res) => {
  const additionalData = {
    title: 'Additional Data Example',
    description: 'This is additional data injected into the template.',
    value: 42,
  };
  
  // Render the 'template.ejs' file with the additional data
  res.render('additional', additionalData);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
