import React, {useEffect} from 'react';
import {HomeContainer} from "./styles/HomeStyles";
import {Col, Row} from "react-bootstrap";
import MovieCard from "../movieCard/MovieCard";
import {useHistory} from "react-router-dom";
import {create} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenre, fetchMovies} from "../../actions/userActions";
import {State} from "../../types";

const Home = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector((state: State) => state.movies);

    useEffect(() => {
        if (!movies) {
           dispatch(fetchMovies());
           dispatch(fetchGenre());
        }
    })

    return (
        <HomeContainer>
            <div className='header'>
                <h1>Movie List</h1>
            </div>
            <Row xs={1} lg={4}>
                <Col className='buttonDiv'>
                    <button onClick={() => history.push(create)}>Create</button>
                </Col>
            </Row>
            {!movies ?
                <div className='loader'>Loading movies...</div>
                :
                (<Row xs={1} lg={4}>
                     {movies.map((item, idx) => (<MovieCard key={idx} movie={item}/>))}
                </Row>)
            }
        </HomeContainer>
    );
};

export default Home;