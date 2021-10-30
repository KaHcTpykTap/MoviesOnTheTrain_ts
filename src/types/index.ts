export interface Action {
    type: string;
    payload: any;
}

export interface State {
    movies: Array<Movie>;
    genres: Array<Genre>;
    movie?: Movie;
}

export interface PropsDetails {
    movie: Movie;
    genres: Array<Genre>;
}

export interface PropsLikes {
    id: number;
    likes: number;
}

export interface PropsMovieCard {
    movie: Movie
}

export interface DetailsMovie {
    title: string;
    release_date: string;
    genre_ids: Array<number>;
    backdrop_path: string;
    overview: string;
    id?: number
}

export interface Movie {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: Array<number>;
    id: number;
    original_language?: string;
    original_title?: string;
    overview: string;
    popularity?: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    likes?: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Genres {
    genres: Array<Genre>;
}

export interface PropsItem {
    movie: Movie;
    image: string
    genres: Array<string>;
}


export type Dispatch = (action: Action) => void;