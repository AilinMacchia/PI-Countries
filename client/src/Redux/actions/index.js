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
export const SET_LOADING="SET_LOADING"

export function getAllCountries() {
    return function (dispatch) {
        try {
            dispatch({type:SET_LOADING})
            axios.get("http://localhost:3001/countries/")   
            .then(res => {
              console.log(res.data)
                    dispatch({
                        type: GET_ALL,
                        payload: res.data
                    })
                })
        } catch (e) {
            console.log("getAllCountries " + e)
        }
    }
}

export function getByName(name) {
    return function (dispatch) {
        try {
            return axios.get(`http://localhost:3001/countries?name=${name}`)
                .then(res => {
                    console.log("action "+ res)
                    if (!res.msg) {
                        dispatch({
                            type: GET_BY_NAME,
                            payload: res.data
                        })
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }
}
export function getCountry(id) {
    return function (dispatch) {
        try {
            return axios.get(`http://localhost:3001/countries/${id}`)
                .then(res => {
                    console.log(res.data)
                    dispatch({
                        type: GET_COUNTRY,
                        payload: res.data
                    })

                })
        } catch (e) {
            console.log(e)
        }
    }
}

export const postActivity = (payload) => {
    return dispatch => {
        try {
                axios.post(`http://localhost:3001/activities`, payload)
                .then((res) => {
                    dispatch({
                        type: POST_ACTIVITY,
                        payload:res.data
                    })
                })
        } catch (e) {
            console.log(e)
        }
    }
}

export function sortPopulation(type) {
  console.log("entro")  
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
      axios
        .get("http://localhost:3001/activities")
        .then((activities) => {
          dispatch(setActivities(activities.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
}
  
function setActivities(payload) {
    return {
      type: GET_ACTIVITIES,
      payload,
    };
}
  
  
