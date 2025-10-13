const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes.js')

// TODO - Update your mongoDB Atals Url here to Connect to the database
const DB_URL = process.env.DB_URL || "mongodb+srv://nguyensteven578_db_user:WWeB6p1G9Ao8dLFK@clustercomp3123.qnimjux.mongodb.net/?retryWrites=true&w=majority&appName=ClusterComp3123";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use('/api', noteRoutes);

// Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
    app.listen(PORT, () => {
    console.log("Server is listening on port 8081");
});
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
