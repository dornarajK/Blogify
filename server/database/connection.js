const mongoose = require('mongoose');

const connectionDB= async () =>{
  try{
    //? mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URL,)

    console.log(`Mangodb connected: ${con.connection.host}`)
  }catch(er){
    console.log(err)
    process.exit(1)
  }
}
module.exports= connectionDB

