const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const authRoutes = require('./routes/authRoutes')

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('API running');
})

app.use('/api/auth', authRoutes);

connectDB();


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});