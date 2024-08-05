const mongoose = require('mongoose');
const  colors = require('colors');


//connect to mongodb
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect('mongodb+srv://adi4255saini:Aditya%40123@question.iaalcmq.mongodb.net/?retryWrites=true&w=majority&appName=Question');
        //const conn = await mongoose.connect('mongodb://localhost:27017/questions');
        console.log(`connected mogodb database ${conn.connection.host}`.bgMagenta.white);
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = connectDB; 