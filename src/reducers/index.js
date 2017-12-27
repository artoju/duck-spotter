export default function reducer(state={
    sightings: [],
    species: [],
    loading: false,
    error: null,
}, action) {
    switch (action.type) {
        case "FETCH_SPECIES": {
            return {...state, loading: true}
        }
        case "FETCH_SPECIES_REJECTED": {
            return {...state, loading: false, error: action.payload}
        }
        case "FETCH_SPECIES_FULFILLED": {
            return {...state, species: action.payload, loading: false,}
        }
        case "FETCH_SIGHTINGS": {
            return {...state, loading: true,}
        }
        case "FETCH_SIGHTINGS_FULFILLED": {
            return {...state, sightings: action.payload, loading: false,}
        }
        case "FETCH_SIGHTNGS_REJECTED": {
            return {...state, loading: false, error: action.payload}
        }
        case "ADD_SIGHTING": {
            return {...state, loading: true,}
        }
        case "ADD_SIGHTING_FULFILLED": {
            return {...state, sightings: [...state.sightings, action.payload], loading: false,}
        }
        case "ADD_SIGHTING_REJECTED": {
            return {...state, loading: false,}
        }
        default: return state;
    }
}