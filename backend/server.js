const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger-config');
const app = require('./src/app');
const express=require('express');
const path=require('path');
//For API docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(express.static(path.join(__dirname, '../frontend/dist')));
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
  console.log(`API docs available at http://localhost:${PORT}/api-docs`);
});
