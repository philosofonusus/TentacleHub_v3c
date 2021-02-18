import {
    ADD_FAVOURITE,
    REMOVE_FAVOURITE, REMOVE_USER,
    SET_LIST,
    SET_SEARCH_QUERY,
    SET_USER,
    SORT_LIST_BY_DATE,
    SORT_LIST_BY_RATING,
    TOGGLE_SEARCHINGTAG
} from "./types";

import axios from "axios";

export  const userTokenStorage = "userToken"

let sort_type = SORT_LIST_BY_DATE

export const authUser = () => {
    return async (dispatch, getState) => {
        if (!(getState().user)) {
            if (!localStorage.getItem(userTokenStorage)) localStorage.setItem(userTokenStorage, '')
            const res = await axios.post('http://localhost:5000/api/auth/token', {token: localStorage.getItem(userTokenStorage)})
            if(!res) return
            dispatch({type: SET_USER, payload: res.data})
        }
    }
}


export const setList = (val) => {
    return{
        type: SET_LIST,
        payload: {val: val.filter(Boolean), sort_type}
    }
}

export const loginUser = (form, remember, request) => {
    return async dispatch => {
        const data = await request('http://localhost:5000/api/auth/login', 'POST', {...form})
        if(!data) return
        if(remember) localStorage.setItem(userTokenStorage, data.token)
        dispatch({type: SET_USER, payload: data.user})
    }
}

export const logoutUser = () => {
    localStorage.setItem(userTokenStorage, "")
    return {type: REMOVE_USER}
}

export const registerUser = (form, request) => {
    return async dispatch => {
        const data = await request('http://localhost:5000/api/auth/register', "POST",{...form})
        if(!data) return
        localStorage.setItem(userTokenStorage, data.token)
        dispatch({type: SET_USER, payload: data.user})
    }
}

export const removeFavourite = (id, userId) => {
    return {
        type: REMOVE_FAVOURITE,
        payload: {id, userId}
    }
}
export const addFavourite = (id) => {
    return {
        type: ADD_FAVOURITE,
        payload: id
    }
}
export const listSortByDate = () => {
    sort_type = SORT_LIST_BY_DATE
    return {
        type: SORT_LIST_BY_DATE
    }
}
export const listSortByRating = () => {
    sort_type = SORT_LIST_BY_RATING
    return {
        type: SORT_LIST_BY_RATING
    }
}
export const toggleSearchingTag = (tag) => {
    return {
        type: TOGGLE_SEARCHINGTAG,
        payload: tag
    }
}
export const setSearchQuery = (val) => {
    return{
        type: SET_SEARCH_QUERY,
        payload: val
    }
}
