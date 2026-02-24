const mongoose=require('mongoose');
function connectDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
        console.log("error connecting to database",err)
        process.exit(1);//if server is connect to db then consume resources 
    });
}
module.exports=connectDB;