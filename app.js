const express = require("express");
const app = express();
require("./db/connection");
const imgData = require("./db/schema");
const cors = require("cors");

const port  =  process.env.PORT || 3001 ;
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());


app.get('/show', (req, res) => {
    let show = imgData.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.post('/', (req, res) => {
    
    let newdata = new imgData(req.body);
    newdata.save();
    res.redirect("https://imagegalleryhub.netlify.app/");
})


app.delete('/delete/:id', (req, res) => {
    let id = req.params['id'] ;
    let deleteData = imgData.deleteOne({ _id:id })
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
        })
})

app.put('/edit', (req, res) => {
    let name = {name:req.body.name , url:req.body.url , details:req.body.details }
    
    let edit = imgData.updateOne({_id:req.body._id},name)
    .then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })

})

app.get('/data/:id',(req,res)=>{
    let id = req.params['id'];
    let matchdata= imgData.find({ _id:id})
    .then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
})

app.listen(port, () => {
    console.log("running..");
});