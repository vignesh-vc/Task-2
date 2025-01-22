// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



mongoose.connect("mongodb+srv://ceit58vignesh24:mwxh0D9zoHXHGJEr@cluster0.0o66i.mongodb.net/passkey?retryWrites=true&w=majority&appName=Cluster0").then(function () {
    console.log("Connected to db")
}).catch(function () {
    console.log("Failed")
})
app.use('/api/users', userRoutes);

app.listen(5000, () => console.log(`Server is running..`));
