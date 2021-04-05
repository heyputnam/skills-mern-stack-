const Skill = require('../models/skill')


async function index(req, res){
    // try catch is NOT an if/else statment (only use for error with async await)
   try {
        //get all the skills from skill model
    const skills = await Skill.find({})
    //sending back json (send skills as JSON data as an HTTP responce)
    res.status(200).json(skills);
   } catch (error) {
       console.log(error);
       res.status(400).json({error: 'oh no an error'})
   }}


async function create(req, res){
    try{
        await Skill.create(req.body);
        res.status(201).json({msg: 'skill success'})
        index(req,res);
    }catch(error){
        res.status(404).json({error: 'something bad happen here'})
    }
}


module.exports = {
    index,
    create
}