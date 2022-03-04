const express =require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require("body-parser");
const path=require('path');

const connectDB=require('./server/database/connection')

const app=express();

dotenv.config({path:'config.env'})
<<<<<<< HEAD
const port=process.env.port || 3000
=======
const port=process.env.PORT || 5000
>>>>>>> dcdc120bd9d1bba6100d3fd4fcedb5634994afbb

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))


//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


//loadrouters
app.use('/',require('./server/routes/router'))
app.listen(port,()=>{
<<<<<<< HEAD
console.log(`Server is running on http://localhost:${port}`)
})
=======
console.log(`Server is running on http://localhost:${PORT}`)
})
>>>>>>> dcdc120bd9d1bba6100d3fd4fcedb5634994afbb
