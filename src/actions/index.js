import axios from "axios";

export function fetchSpecies() {
    return function(dispatch, getState) {
        dispatch({type: "FETCH_SPECIES"});
        axios.get("http://localhost:8081/species")
        .then((response) => {
            dispatch({type: "FETCH_SPECIES_FULFILLED", payload: response.data})
        })
        .catch((err) =>{
            dispatch({type: "FETCH_SPECIES_REJECTED", payload: err})
        })
    }
}

export function addSighting(species, description, dateTime, count) {
    return function(dispatch, getState) {
        dispatch({type: "ADD_SIGHTING"});
        axios.post("http://localhost:8081/sightings", {        
        species,
        description,
        dateTime,
        count,
        })
        .then((response) => {
            dispatch({type: "ADD_SIGHTING_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "ADD_SIGHTING_REJECTED", payload: err})
        })
    }
}

export function fetchSightings() {
    return function(dispatch, getState) {
        dispatch({type: "FETCH_SIGHTINGS"});
        axios.get("http://localhost:8081/sightings")
        .then((response) => {
            dispatch({type: "FETCH_SIGHTINGS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_SIGHTINGS_REJECTED", payload: err})
        })
    }
}