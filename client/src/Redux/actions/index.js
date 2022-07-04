import axios from "axios"
export const GET_ALL = "GET_ALL";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_BY_NAME = "GET_BY_NAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES="GET_ACTIVITIES"
export const DELETE = "DELETE";
export const SORT_POPULATION = 'SORT_POPULATION';
export const SORT_ALPHABET = 'SORT_ALPHABET';
export const SORT_AREA = 'SORT_AREA';
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";
export const DELETE_ACTIVITY= "DELETE_ACTIVITY"

export function getAllCountries() {
  return dispatch =>{
    axios.get("/countries")   
      .then(res => {
        dispatch({
          type: GET_ALL,
          payload: res.data
        })
      })
      .catch(e=>
        console.log(e)
      )
            
  }
}

export function getByName(name) {
  return dispatch =>{
    axios.get(`/countries?name=${name}`)
      .then(res => {
        dispatch({
          type: GET_BY_NAME,
          payload: res.data
        })
      })
      .catch(e=>
        console.log(e)
      ) 
  }
}

export function getCountry(id) {
  return dispatch =>{
    axios.get(`/countries/${id}`)
      .then(res => {
        dispatch({
          type: GET_COUNTRY,
          payload: res.data
        })
      })
      .catch (e=>
        console.log(e)
      ) 
  }
}


export const postActivity = (payload) => {
  return dispatch => {
    axios.post(`/activities`, payload)
      .then((res) => {
        dispatch({
          type: POST_ACTIVITY,
          payload:res.data
        })
      })
      .catch (e=>
        console.log(e)
      ) 
        
  }
}

export function sortPopulation(type) { 
  return {
    type: SORT_POPULATION,
    payload: type,
  };
}
  
export function sortAlphabet(type) {
  return {
    type: SORT_ALPHABET,
    payload: type,
  };
}
  
export function filterContinent(type) {
  return {
    type: FILTER_CONTINENT,
    payload: type,
  };
}
  
export function filterActivities(type) {
  return {
    type: FILTER_ACTIVITIES,
    payload: type,
  };
}

export function sortArea(type) {
  return {
    type: SORT_AREA,
    payload:type,
  };
}

export function getActivities() {
  return function (dispatch) {
    axios.get("/activities")
      .then((activities) => {
        dispatch(setActivities(activities.data));
      })
      .catch((e) => {
        console.log(e);
      })
  }
}
  
function setActivities(payload) {
  return {
    type: GET_ACTIVITIES,
    payload,
  };
}
  
export const deleteActivity = (name) => async dispatch => {
  const res= await axios.delete(`/activities?name=${name}`)
  dispatch({
    type:DELETE_ACTIVITY,
    payload:res.data,
  })
}


