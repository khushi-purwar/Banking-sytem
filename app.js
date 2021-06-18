
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bankRoutes = require('./routes/bank')
// const seedDB = require('./seed');


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// database connection
mongoose.connect('mongodb://localhost:27017/BankApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("DB Connected!!!")
    })
    .catch((err) => {
        console.log("Something Went Wrong!!!")
        console.log(err.message);
    })

// seedDB();

app.use(bankRoutes);

app.listen(3080, () => {
    console.log("Server started at port 3080")
})
