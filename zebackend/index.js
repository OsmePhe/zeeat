const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbService = require("./dbService");
const T = new Twit({
    consumer_key : process.env.REACT_APP_CONSUMER_KEY,
    consumer_secret : process.env.REACT_APP_CONSUMER_SECRET,
    access_token : process.env.REACT_APP_ACCESS_TOKEN,
    access_token_secret : process.env.REACT_APP_ACCESS_TOKEN_SECRET,
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
const Joi = require("joi");

app.use(express.json());
const courses = [
    {id:1, name: "course1"},
    {id:2, name: "course2"},
    {id:3, name: "course3"}
]
//All results
app.get("/", (req,res) => {
    const db = dbService.getDbServiceInstance();
    const result = db.getAllData();
    
    result
    .then(data => res.json({data : data}))
    .catch(err => console.log(err));
});

//All etablissements
app.get("/etablissements", (req,res) => {
    const db = dbService.getDbServiceInstance();
    db.getEtablissement(req,res);
});

//Plats etablissements
app.get("/platsEtablissement/:nom_etablissement", (req,res) => {
    const db = dbService.getDbServiceInstance();
    db.getPlatsEtablissement(req.params.nom_etablissement.replace(/%20/g, " "),res);
});

//Login Client
app.post("/login", (req,res) => {
    const db = dbService.getDbServiceInstance();
    db.postLogin(req,res);
});

//Register Client
app.post("/register", (req,res) => {
    const db = dbService.getDbServiceInstance();
    db.postRegister(req,res);
});

//PUT
 app.put("/api/courses/:id", (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        return res.status(404).send("Not found zebi");
    }else{
       res.send(course);
    }
    const { error } = validateCourse(req.body);
    if(error){
        //400 bad request
        return res.status(400).send(error.details[0].message);
    }
    course.name = req.body.name;
    res.send(course);
 });

function validateCourse(course){

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}



const port = process.env.PORT || 5000

app.listen(port, ()=>console.log(`Listening on port ${port}...`));