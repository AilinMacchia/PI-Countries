const { Router } = require('express');
const { Activities, Countries } = require("../db.js");
const router = Router();



router.post('/', async function (req, res){
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        let actividad = await Activities.create({
            name,
            difficulty,
            duration,
            season,
        });
        const paisActividad = await Countries.findAll({
            where: { name: countries },
        });
        actividad.addCountries(paisActividad);
        res.status(200).send("Activity Created")
    }catch (e) {
        console.log(e)
    }
});

router.get("/", async function(req, res){
    const activities = await Activities.findAll();
    res.status(200).send(activities);
});


router.delete("/", async function(req,res){
    try{
        const {name}= req.query;
        if(!name){
            const activities = await Activities.findAll();
            return res.status(200).send(activities);
        }if(!Activities){
            return res.status(200).send("No se encontraron actividades")
        }else{
            const activity= await Activities.destroy({where:{name:[name]}})
            return res.status(200).send("Activity Deleted")
        }
    }catch(e){
        console.log(e)
    }
})


module.exports=router



// {
//     "name": "ski",
//     "difficulty": 4,
//     "duration": 1,
//     "season":"spring",
//     "countries":"Argentina"
// } 