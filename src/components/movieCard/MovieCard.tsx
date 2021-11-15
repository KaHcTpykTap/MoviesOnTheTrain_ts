import React from 'react';
import {MovieCardContainer} from "./styles/MovieCardStyles";
import {Card, Col} from "react-bootstrap";
import {details} from "../../utils/constants";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import Likes from "../likes/Likes";
import {changeMovie} from "../../actions/userActions";
import {PropsMovieCard} from "../../types";


const MovieCard = ({movie}: PropsMovieCard) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const image = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`;

    return (
        <MovieCardContainer>
            <Col onClick={() => {
                history.push(details);
                dispatch(changeMovie(movie));
            }}>
                <Card>
                    <Card.Img variant="bottom" src={image} alt='Card image' className='image'/>
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview.toString().substring(0, 80).concat('...')}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Likes id={movie.id} likes={movie.likes ? movie.likes : 0}/>
        </MovieCardContainer>
    )
}

export default MovieCard;