const mongoose = require('mongoose');

uri="mongodb+srv://kiranghosh520_db_user:Kiran@2003@kronapi.b8k2pr4.mongodb.net/kronAPI?retryWrites=true&w=majority&appName=kronAPI"

const connectDB = async () => {
    console.log("connect db");
    
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
