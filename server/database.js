const mongoose=require("mongoose");

async function connectDB(){

    try {
        const db="mongodb://localhost:27017/startup"
        await mongoose.connect(db)
        console.log("DB Connected :)")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDB