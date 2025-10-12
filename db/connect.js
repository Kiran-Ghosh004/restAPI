const mongoose = require('mongoose');

// NOTE: I'm replacing 'Kiran@2003' with 'Kiran%402003'
const uri = "mongodb+srv://kiranghosh520_db_user:Kiran%402003@kronapi.b8k2pr4.mongodb.net/kronAPI?retryWrites=true&w=majority&appName=kronAPI";

const connectDB = async () => {
    console.log("connect db");
    
    return mongoose.connect(uri)
};

module.exports = connectDB;
