import { GET_ALL,SET_LOADING, GET_BY_NAME, GET_COUNTRY, POST_ACTIVITY,GET_ACTIVITIES,SORT_POPULATION,SORT_ALPHABET,SORT_AREA,FILTER_CONTINENT,FILTER_ACTIVITIES} from '../actions/index'


const initialState = {
    countries: [],
    countriesSearch: [],
    countryDetail: {},
    activities: [],
    filteredCountries: [],
    loading: false
}



function rootReducer(state = initialState,action) {
    switch (action.type) {
        case SET_LOADING:
            return {
            ...state,
            loading:true
        }
        case GET_ALL:
            return {
                ...state,
                countries: action.payload,
                loading:false,
            }  
        case GET_BY_NAME:
            console.log("reducer "+ action.payload)
            return {
                ...state,
                countriesSearch: action.payload
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
        
        case SORT_ALPHABET:
            let orderedAlphabet
            if(state.filteredCountries.length>0){
                orderedAlphabet = [...state.filteredCountries]
            }else{
                orderedAlphabet = [...state.countries]
            }
            console.log(orderedAlphabet)
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
            state.countries.map((c) => {
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
            state.countries.map((country) => {
                country.Activities.map((activity) => {
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