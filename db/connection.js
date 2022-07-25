const mongo = require("mongoose");
mongo.connect("mongodb+srv://ImageGallery:ImageGallery@imagegallery.nq5jnvb.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("DataBase Connected");
}).catch((err)=>{
    console.log(err);
})
