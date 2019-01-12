const express = require('express');
const app = express();
const morgan = require("morgan");
const path = require('path');

// Routes
const msg = require(path.join(__dirname+'/routes/msg.js'))

// Middlewares
app.use(morgan('short'))
app.use(msg);

// Routes
app.get('/', (req, res) => {
  res.send("Hello world");
});

// Listen server
app.listen(3000, () => {
  console.log("Server on port 3000")
});


// Aprendi :D aunque me falta perfeccionar la parte del auth con JWT pero pos esta chidori ahora la app