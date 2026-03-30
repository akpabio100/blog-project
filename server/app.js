const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cron = require('node-cron');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON body

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

cron.schedule('* * * * *', () => {
  console.log('Cron job is running every minute');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));