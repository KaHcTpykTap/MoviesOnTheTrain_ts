import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {LikeContainer} from "./styles/LikesStyles";
import {Rating} from "@mui/material";
import {setLikes} from "../../actions/userActions";
import {PropsLikes} from "../../types";

const Likes = ({id, likes}: PropsLikes) => {

    const [value, setValue] = useState<number | null>(likes);
    const dispatch = useDispatch();

    return (
        <LikeContainer>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(e: any, newValue: number | null): void => {
                    setValue(newValue);
                    dispatch(setLikes(id, newValue));
                }}
            />
        </LikeContainer>
    );
};

export default Likes;