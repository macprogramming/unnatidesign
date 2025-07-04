const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected')
}).catch(err => console.log(err));


const homebannerRoute = require('./routes/homebannerRoute');
const topicscategoryRoute = require('./models/topicscategory');
app.use('/api/homebanner', homebannerRoute);
app.use('/api/topicscategory', topicscategoryRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})