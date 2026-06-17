const User = require("../models/User");

const {
    hashPassword,
    comparePassword
} = require("../utils/password");

const generateToken = require("../utils/generateToken");


// REGISTER USER

const registerUser = async(req,res)=>{

try{

const {
name,
email,
password,
role
}=req.body;


// Check existing user

const existingUser =
await User.findOne({email});


if(existingUser){

return res.status(400).json({
message:"User already exists"
});

}


// Hash password

const hashedPassword =
await hashPassword(password);


// Create user

const user =
await User.create({

name,

email,

password:hashedPassword,

role

});


// Generate token

const token =
generateToken(
user._id,
user.role
);



res.status(201).json({

message:"Registration successful",

token,

user:{
id:user._id,
name:user.name,
role:user.role
}

});


}
catch(error){

res.status(500).json({

message:error.message

});

}

};




// LOGIN USER


const loginUser = async(req,res)=>{

try{


const {
email,
password
}=req.body;



const user =
await User.findOne({email});



if(!user){

return res.status(404).json({

message:"User not found"

});

}



const isMatch =
await comparePassword(
password,
user.password
);



if(!isMatch){

return res.status(401).json({

message:"Invalid password"

});

}



const token =
generateToken(
user._id,
user.role
);



res.json({

message:"Login successful",

token,

user:{
id:user._id,
name:user.name,
role:user.role
}

});


}
catch(error){

res.status(500).json({

message:error.message

});

}
};
module.exports={
registerUser,
loginUser
};