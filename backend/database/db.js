const mongoose = require('mongoose')


const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE,
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