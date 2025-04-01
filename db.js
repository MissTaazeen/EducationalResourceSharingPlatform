const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(Process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });console.log('MongoDB connected');
    }catch (error){
        console.error('Mongoose connection failed:', error);
        process.exit(1);
    }
};
module.exports = connectDB;

