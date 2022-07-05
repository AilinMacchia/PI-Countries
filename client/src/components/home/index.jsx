import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries,getByName} from "../../Redux/actions/index";
import CountryCard from "../countryCard/index";
import s from "./index.module.css"
import image from "../../Images/prueba2.jpg"
import Loading from "../loading/index"


export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    const filtrados=useSelector(state=>state.filteredCountries)
    const search= useSelector(state=>state.countriesSearch)
    const[pageItems, setPageItems]=useState(0)
    const [currentPage,setCurrentPage]=useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(getByName(""))
        setCurrentPage(1)
        setPageItems(0)
    },[dispatch]);


    const filterCountries= ()=>{
        if(filtrados.length>0){
            if(currentPage===1){
                return filtrados.slice(pageItems,pageItems+9)
            }
            return filtrados.slice(pageItems-1,pageItems+9)
        }else if((search.length>0)){
            if(currentPage===1){
                return search.slice(pageItems,pageItems+9)
            }
            return search.slice(pageItems-1,pageItems+9)
        }else{
            if(currentPage===1){
                return allCountries.slice(pageItems,pageItems+9)
            }
            return allCountries.slice(pageItems-1,pageItems+9) 
        }
      
    }

    const NextHandler= ()=>{
        if(pageItems+1>=allCountries.length)return;
        setPageItems(pageItems+10)
        setCurrentPage(currentPage+1)
    }
    
    const PrevHandler= ()=>{
        const prevPage= currentPage-1
        if(prevPage<=0)return;
        setPageItems(pageItems-10)
        setCurrentPage(currentPage-1)
        
    }

    return (
        <div>
            <div className={s.background}> 
             <img src={image} className={s.stretch} alt="" />  
            </div>
            {loading === true? <Loading setLoading={setLoading} />  :
                <>
                    <div className={s.countries}>
                        {filterCountries()?.map((x) => {
                            return (
                                <CountryCard
                                    key={x.name}
                                    name={x.name}
                                    continent={x.continent}
                                    image={x.image}
                                    id={x.id}
                                />
                            );
                        })}
                    </div>
                </>
            }
            <div className={s.paginado}>
                <button className={s.button} onClick={PrevHandler}>Prev</button>
                <span className={s.texto}>{currentPage}</span>
                <button className={s.button} onClick={NextHandler}>Next</button>
                        
            </div>

        </div>   
        
    );

};