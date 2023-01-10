const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


mongoose.connect("mongodb+srv://maidin1901:inam@cluster0.lwiq1jo.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});()=>{
    console.log("connected to DB")
}


//Service Provider schema 
const ServiceProviderSchema = new mongoose.Schema({
    firstname: String,
    lastname : String,
    cnic : String,
    experience : Number,
    contact : String,
    email : String,
    password : String,
    serviceType : String,
    photo : []
})

const SP = new mongoose.model("Service Provider", ServiceProviderSchema)

//routes routes
app.post("/Login",(req,res)=>{
    const {email,password} =req.body;
    User.findone({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});
app.post("/Register",(req,res)=>{
    const {firstname,lastname,cnic,experience,contact,email,password,serviceType,photo} = req.body;
  SP.findOne({
    cnic : cnic,
    contact : contact,
    email : email
  },(err,data)=>{
    if(data){
        res.json({
            already_exists : true,
            message : 'Service Provider with same email,CNIC or contact already exists'
        })
    }
    else {
        const new_SP = new SP({
            firstname : firstname ,
            lastname : lastname ,
            experience : experience ,
            cnic : cnic ,
            contact : contact ,
            email : email ,
            serviceType : serviceType,
            password : password,
            photo : photo

        })
        new_SP.save((err)=>{
            if(err){
                res.json({
                    error_in_storage : true, 
                    message : 'Some error occurred in saving the Service Provider data'
                })
            }
            else {
                res.json({
                    success : true,
                    message : 'Data succesfully taken'
                })
            }
        })
    }
  })  
}) 

app.get('/',(req,res)=>{
    res.send('MaidIn Main Page')
})

app.listen(3000,()=>{
    console.log("started")
})