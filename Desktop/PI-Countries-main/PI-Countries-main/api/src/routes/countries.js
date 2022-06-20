const { Router } = require('express');
const { activities, Countries } = require("../db.js");
const axios = require("axios");
const router = Router();
const { Op } = require("sequelize");


router.get("/", async function(req,res){
    let {data}= await axios.get("https://restcountries.com/v3/all");
        const country = data.map((c) => {
            return {
                id: c.cca3,
                name: c.name.common,
                image: c.flags.png,
                continent: c.continents[0],
                capital: c.capital ? c.capital[0] : "No tiene capital",
                subregion: c.subregion,
                area: c.area,
                population: c.population,
            };
        });

    await Countries.bulkCreate(country);

    let{name}=req.query;
    if(name){
        try{
            let country = await Countries.findAll({
                where:{
                    name: {
                        [Op.iLike]: `%${name}%`,
                    }
                },
                include:  [activities],
            })
            if(country.length===0){
                res.send("Pais no Encontrado")
            }else{
                res.send(country)
            }
        }catch(e){
            res.send(e)
        }
    }else{
        try{
            let countries = await Countries.findAll();
            res.send(countries);
        }catch(e){
            res.send(e)
        }
    }

})