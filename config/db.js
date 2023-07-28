
const mongoose=require('mongoose')

const connection=mongoose.createConnection('mongodb+srv://haile0938048261kebede:YhPrA3M58vOlqdNU@todoapp.q9zisgp.mongodb.net/?retryWrites=true&w=majority').on('open',()=>{
    console.log("Mongodb connected");
}).on('error',()=>{
    console.log("Mongodb connection error");
});

module.exports=connection