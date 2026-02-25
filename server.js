const path = require('path');

// Define the public directory
const public_dir = path.join(__dirname, "../public");

app.use(express.static(public_dir));