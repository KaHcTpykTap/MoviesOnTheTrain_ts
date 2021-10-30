import React, {useState} from 'react';
import {CreateContainer} from "./styles/CreateStyles";
import {home} from "../../utils/constants";
import {useHistory} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {DetailsMovie, State} from "../../types";
import {appendMovie} from "../../actions/userActions";

const Create = () => {

    const history = useHistory();
    const genresData = useSelector((state: State) => state.genres);

    const [name, setName] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [genresNames, setGenresNames] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [overview, setOverview] = useState<string>('');

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(appendMovie(getItem()));
        setName('');
        setYear('');
        setGenresNames('');
        setImage('');
        setOverview('');
        history.push(home);
    }

    const arrGenreIds = (): Array<number> => {
        const rem = [];
        if (genresNames) {
            for (let i = 0; i < genresData.length; i++) {
                if (genresNames.includes(genresData[i].name)) {
                    rem.push(genresData[i].id)
                }
            }
        }
        return rem;
    }

    const getItem = (): DetailsMovie => ({
            title: name,
            release_date: year,
            genre_ids: arrGenreIds(),
            backdrop_path: image.substring(32),
            overview,
        })

    return (
        <CreateContainer>
            <Container>
                <Row>
                    <Col md={{span: 6, offset: 3}} xs={12} className='item'>
                        <h1 className='h1'>Create Movie</h1>
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
                            onChange={event => setGenresNames(event.target.value)}
                            type='text'
                            value={genresNames}
                        />
                        <textarea
                            placeholder="Image -> zero or real picture TMDB"
                            onChange={event => setImage(event.target.value.trim())}
                            value={image}
                        />
                        <textarea
                            placeholder="Overview"
                            onChange={event => setOverview(event.target.value)}
                            value={overview}
                        />
                        <button onClick={handleClick}>Create</button>
                        <button onClick={() => {
                            history.push(home);
                        }
                        }>Home page
                        </button>

                    </Col>
                </Row>
            </Container>
        </CreateContainer>
    );
}

export default Create;