import { ADD_TO_TEAM, REMOVE_TO_TEAM, SET_AVAILABILITY, SET_DOMAIN, SET_GENDER } from "../action-types/actionTypes"

export const addToTeam = (data) => {
    return {
        type: ADD_TO_TEAM,
        payload: data
    }
}
export const removeToTeam = (data) => {
    return {
        type: REMOVE_TO_TEAM,
        payload: data
    }
}
export const setDomain = (data) => {
    console.log(data);
    return {
        type: SET_DOMAIN,
        payload: data
    }
}
export const setGender = (data) => {
    return {
        type: SET_GENDER,
        payload: data
    }
}
export const setAvailability = (data) => {
    return {
        type: SET_AVAILABILITY,
        payload: data
    }
}