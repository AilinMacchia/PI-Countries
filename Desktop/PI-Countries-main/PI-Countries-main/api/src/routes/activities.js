const { Router } = require('express');
const { Activities, Countries, Country_Activity } = require("../db.js");
const router = Router();



router.post('/', async function (req, res){
    const { name, difficulty, duration, season, countries } = req.body;

    try {
        if (!name) res.status(404).send("El campo nombre es obligatorio");
        if (!countries) res.status(404).send('Debe haber un país como minimo');

        let actividad = await Activities.create({
            name,
            difficulty,
            duration,
            season,
        });
        const paisActividad = await Countries.findAll({
            where: { name: countries },
        });
        
        actividad.addCountry(paisActividad);

        res.status(200).send('¡Se creo una actividad exitosamente!')
    } catch (error) {
        console.log(error)
    }
});

router.get("/", async function(req, res){
    const activities = await Activities.findAll();
    res.status(200).send(activities);
});

module.exports=router



// {
//     "name": "ski",
//     "difficulty": 4,
//     "duration": 1,
//     "season":"spring",
//     "countries":"Argentina"
// } 