import React, {useState} from 'react';
import {EditContainer} from "./styles/EditStyles";
import {Col, Container, Row} from "react-bootstrap";
import {details} from "../../utils/constants";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PropsDetails} from "../../types";
import {overwriteMovie} from "../../actions/userActions";


const Edit = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const genres_ = useSelector((state: PropsDetails) => state.genres);
    const movie = useSelector((state: PropsDetails) => state.movie);
    const [name, setName] = useState<string>(movie!.title);
    const [year, setYear] = useState<string>(`${movie!.release_date}`);

    const getGenres = (): string => {
        const genre = [];
        if (movie!.genre_ids) {
            for (let i = 0; i < genres_.length; i++) {
                if (movie!.genre_ids.includes(genres_[i].id)) {
                    genre.push(genres_[i].name)
                }
            }
        }
        return genre.join();
    }

    const [genres, setGenres] = useState<string>(getGenres());
    const [image, setImage] = useState<string>(`https://image.tmdb.org/t/p/w500/${movie!.backdrop_path}`);
    const [overview, setOverview] = useState<string>(`${movie!.overview}`);

    const handleClick = (): void => {
        const backdrop_path = image.substring(32);
        const newGenres = genres.split(",");
        dispatch(overwriteMovie(movie.id, name, year, overview, backdrop_path, newGenres));
        history.push(details);
    }

    return (
        <EditContainer>
            <Container>
                <Row>
                    <Col md={{span: 6, offset: 3}} xs={12} className='item'>
                        <h1 className='h1'>Edit Movie</h1>
                        <input
                            placeholder="Name"
                            onChange={event => setName(event.target.value)}
                            type='text'
                            value={name}
                        />
                        <input
                            placeholder="Year"
                            onChange={event => setYear(event.target.value.trim())}
                            type='date'
                            value={year}
                        />
                        <input
                            placeholder="Genres -> Drama, Crime..."
                            onChange={event => setGenres(event.target.value)}
                            type='text'
                            value={genres}
                        />
                        <textarea
                            placeholder="Image -> zero or real picture"
                            onChange={event => setImage(event.target.value.trim())}
                            value={image}
                        />
                        <textarea
                            placeholder="Overview"
                            onChange={event => setOverview(event.target.value)}
                            value={overview}
                        />
                        <button onClick={handleClick}>Save</button>
                        <button onClick={() => history.push(details)}>Details Page</button>
                    </Col>
                </Row>
            </Container>
        </EditContainer>
    );
};

export default Edit;