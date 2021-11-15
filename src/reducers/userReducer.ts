import {CHANGE_MOVIES, SET_GENRES, SET_MOVIE} from "../actions/userActions";
import {Action, State} from "../types";


const initialState: State = {
    movies: JSON.parse(localStorage.getItem('movies') as string),
    genres: JSON.parse(localStorage.getItem('genres') as string),
    movie: JSON.parse(localStorage.getItem('movie') as string)
};

export const userReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SET_MOVIE:
            return {...state, movie: action.payload}
        case CHANGE_MOVIES:
            return {...state, movies: action.payload}
        case SET_GENRES:
            return {...state, genres: action.payload}
        default:
            return state;
    }
}