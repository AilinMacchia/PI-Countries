const { Router } = require('express');
const { Activities, Countries } = require("../db.js");
const axios = require("axios");
const router = Router();
const { Op } = require("sequelize");


router.get("/", async function(req,res){
    let {data}= await axios.get("https://restcountries.com/v3/all");
        const country = data.map((c) => {
            return {
                id: c.cca3,
                name: c.name.common,
                image: c.flags[1],
                continent: c.continents?c.continents[0]: "",
                capital: c.capital ? c.capital[0] : "No tiene capital",
                subregion: c.subregion,
                area: c.area,
                population: c.population,
                map: c.maps.googleMaps
            };
        });

    await Countries.bulkCreate(country, {
        ignoreDuplicates: true,
    });

    let{name}=req.query;
    if (name) {
        try {
            const countryName = await Countries.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    }
                },
                include: [Activities],
            })

            if (countryName.length === 0) {
                res.status(404).send("No existe el pais.");
               
            } else {
                res.send(countryName)
            }
        } catch (error) {
            res.send(error)
        }
    }else{
        try{
            let countries = await Countries.findAll({include: Activities});
            res.send(countries);
        }catch(e){
            res.send(e)
        }
    }

});

router.get("/:id", async function(req, res){
    const { id } = req.params;
  
    try {
      let country = await Countries.findByPk(id.toUpperCase(), {
        include: Activities
      });
      res.send(country);
    } catch (error) {
      res.send(error)
    }
  })


module.exports= router