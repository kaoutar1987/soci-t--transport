const mongoose = require('mongoose')


const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://admin:admin@localhost:port/sociteTransport?authSource=admin",
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
          });

          console.log("database connection success")

    }catch(err){
        console.log(err);

    }
};
module.exports =connectDB;