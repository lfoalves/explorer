require('express-async-errors');
const express = require('express');
const { routes } = require('./routes');
const { AppError } = require('./utils/AppError');
const uploadConfig = require('./configs/upload');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())
app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))
app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})


const PORT = 5050;
app.listen(PORT, () => console.log('Server is running on PORT', PORT))

process.on('uncaughtException', (error) => console.error(error))