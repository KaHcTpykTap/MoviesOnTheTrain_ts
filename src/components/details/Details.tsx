import React from 'react';
import {DetailsContainer} from "./styles/DetailsStyles";
import {Col, Container, Row} from "react-bootstrap";
import {edit, home} from "../../utils/constants";
import {useHistory} from "react-router-dom";
import Item from "../item/Item";
import {PropsDetails} from "../../types";
import {useSelector} from "react-redux";

const Details = () => {

    const history = useHistory();
    const genres = useSelector((state: PropsDetails) => state.genres);
    const movie = useSelector((state: PropsDetails) => state.movie);
    const image = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

    const getGenres = (): Array<string> => {
        const genre = [];
        if(movie.genre_ids) {
            for (let i = 0; i < genres.length; i++) {
                if (movie.genre_ids!.includes(genres[i].id)) {
                    genre.push(genres[i].name)
                }
            }
        }
        return genre;
    }

    return (
        <DetailsContainer>
            <div className='header'>
                <h1>Movie Details</h1>
            </div>
            <Container>
                <Row>
                    <Col md={{span: 4, offset: 4}} xs={12} className='item'>
                        <button onClick={() => history.push(edit)}>Edit</button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 4, offset: 4}} xs={12} className='item'>
                        <Item image={image} movie={movie} genres={getGenres()}/>
                    </Col>
                    <Row>
                        <Col md={{span: 4, offset: 4}} xs={12} className='item'>
                            <button className='button_home' onClick={() => history.push(home)}>Home page</button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </DetailsContainer>
    )
}

export default Details;