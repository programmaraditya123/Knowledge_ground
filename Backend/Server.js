const express = require('express');
const app = express();
const cors = require('cors');
//const AdminRoutes = require('./Routes/AdminRoutes');
const UserRoutes = require('./Routes/UserRoutes');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const PartRoute = require('./Routes/PartRoute');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect DataBase
connectDB();

//routes


app.get('/',(req, res) => {
    res.send('This is server.js page')
});


app.use("/api/v1/user",UserRoutes);
app.use("/api/v1/parts",PartRoute)
 


app.listen('8080',() => {
    console.log('Server is runing on port 8080')
});