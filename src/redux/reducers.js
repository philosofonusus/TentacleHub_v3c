import { combineReducers } from "redux";
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

const listReducer = (state = [], action) => {
    switch (action.type){
        case SET_LIST:
            const list = action.payload.val
            switch (action.payload.sort_type){
                case SORT_LIST_BY_RATING:
                    list.sort((a,b) => b.rating - a.rating)
                    break
                case SORT_LIST_BY_DATE:
                    list.sort((a,b)=> b.uploadedAt - a.uploadedAt);
                    break
                default:
                    break
            }
            return list
        case SORT_LIST_BY_DATE:
            if(!state) return state
            const _arr = state.slice()
            _arr.sort((a,b)=> b.uploadedAt - a.uploadedAt);
            return _arr
        case SORT_LIST_BY_RATING:
            if(!state) return state
            const __arr = state.slice()
            __arr.sort((a,b) => b.rating - a.rating)
            return __arr
        default:
            return state
    }
}
const searchParamsReducer = (state = {searchTags: [], searchQuery: ""}, action) => {
    switch (action.type){
        case SET_SEARCH_QUERY:
            return {...state, searchQuery: action.payload}
        case TOGGLE_SEARCHINGTAG:
            return state.searchTags.includes(action.payload)
                ? {...state, searchTags: state.searchTags.filter(el => el !== action.payload)}
                : {...state, searchTags: [...state.searchTags, action.payload]}
        default:
            return state
    }
}
const userReducer = (state = null, action) => {
    switch (action.type){
        case REMOVE_USER:
            return null
        case SET_USER:
            return action.payload
        case ADD_FAVOURITE:
            return {...state, favourites: [...state.favourites, action.payload]}
        case REMOVE_FAVOURITE:
            const clone = Object.assign(state)
            clone.favourites.splice(clone.favourites.indexOf(action.payload), 1)
            return clone
        default:
            return state
    }
}
export const rootReducer = combineReducers({list: listReducer, user: userReducer, searchParams: searchParamsReducer})
