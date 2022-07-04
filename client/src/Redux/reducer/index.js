import { GET_ALL, GET_BY_NAME, GET_COUNTRY, POST_ACTIVITY,GET_ACTIVITIES,DELETE_ACTIVITY,SORT_POPULATION,SORT_ALPHABET,SORT_AREA,FILTER_CONTINENT,FILTER_ACTIVITIES} from '../actions/index'


const initialState = {
    countries: [],
    countriesSearch: [],
    countryDetail: {},
    activities: [],
    filteredCountries: [],
    error:""
}



function rootReducer(state = initialState,action) {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                countries: action.payload,
            }  
        case GET_BY_NAME:
            if(action.payload.length===0){
                return{
                    ...state,
                    error:"Country Not Found"
                }
            }else{
                return {
                    ...state,
                    countriesSearch: action.payload,
                    error:""
                }  
            }    
        case GET_COUNTRY:
            return {
                ...state,
                countryDetail: action.payload
            }
        case POST_ACTIVITY:
            return {
                ...state
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case DELETE_ACTIVITY:
            return{
                ...state,
                activities:state.activities.filter(a=>a.name !== action.payload)
            }
        case SORT_ALPHABET:
            let orderedAlphabet
            if(state.filteredCountries.length>0){
                orderedAlphabet = [...state.filteredCountries]
            }else{
                orderedAlphabet = [...state.countries]
            }
            if(action.payload==="A-Z"){
                orderedAlphabet = orderedAlphabet.sort((a, b) => {
                    if(a.name < b.name) {
                        return -1;
                    }
                    if(a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })
            }else if(action.payload==="Z-A"){
                orderedAlphabet = orderedAlphabet.sort((a, b) => {
                    if(a.name < b.name) {
                        return 1;
                    }
                    if(a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
            }else{
                orderedAlphabet=[...state.countries]
            }    
                return {
                    ...state,
                    filteredCountries: orderedAlphabet,
                }
        case SORT_POPULATION:
            let orderedPopulation
            if(state.filteredCountries.length>0){
                orderedPopulation = [...state.filteredCountries]
            }else{
                orderedPopulation = [...state.countries]
            }
            if(action.payload==="descendant"){
                orderedPopulation = orderedPopulation.sort((a, b) => {
                   if(a.population < b.population) {
                       return -1;
                   }
                   if(a.population > b.population) {
                       return 1;
                   }
                   return 0;
               })
            }else if(action.payload==="ascendant"){
               orderedPopulation = orderedPopulation.sort((a, b) => {
                   if(a.population < b.population) {
                       return 1;
                   }
                   if(a.population > b.population) {
                       return -1;
                   }
                   return 0;
               })
            }else{
            orderedPopulation=[...state.countries]
            }       
                return {
                    ...state,
                    filteredCountries: orderedPopulation,
                }
        case FILTER_CONTINENT:
            let filteredContinent = [];
            state.countries.forEach((c) => {
                if(c.continent === action.payload) {
                    return filteredContinent.push(c)
                }
            })
            return {
                ...state,
                filteredCountries: filteredContinent
            }
        case FILTER_ACTIVITIES:
            let filteredActivities = [];
            state.countries.forEach((country) => {
                country.Activities.forEach((activity) => {
                    if(activity.name === action.payload) {
                        return filteredActivities.push(country);
                    }
                })

            })
            return {
                ...state,
                filteredCountries: filteredActivities,
            }
        case SORT_AREA:
            let ordenedArea
            if(state.filteredCountries.length>0){
                ordenedArea = [...state.filteredCountries]
            }else{
                ordenedArea = [...state.countries]
            }

            if(action.payload==="descendant"){
                ordenedArea = ordenedArea.sort((a, b) => {

                   if(a.area < b.area) {
                       return -1;
                   }
                   if(a.area > b.area) {
                       return 1;
                   }
                   return 0;
               })
            }else if(action.payload==="ascendant"){
            ordenedArea = ordenedArea.sort((a, b) => {
                   if(a.area < b.area) {
                       return 1;
                   }
                   if(a.area > b.area) {
                       return -1;
                   }
                   return 0;
               })
            }else{
                ordenedArea=[...state.countries]
            }    
                return {
                    ...state,
                    filteredCountries: ordenedArea,
                }
        default: {
            return state
        }
    }
}


export default rootReducer;