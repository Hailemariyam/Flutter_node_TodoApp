const UserModel = require('./model/user.model')
const app =require('./app');

const db=require('./config/db')
const port=3000;

app.get('/',(req,res)=>{
    res.send("hello ");
})

app.listen(port, ()=>{
    console.log('Server listening on port http://localhost:${port}');
});