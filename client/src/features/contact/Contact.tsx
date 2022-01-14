import {  Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CounterState, decrement, increment } from "./CounterReducer";

export default function Contact (){
    const dispatch = useDispatch();
const {data, title} = useSelector((state: CounterState) => state);

    return (
        <>
            <Typography variant="h2" sx={{marginTop: 15}}>
                {title}
            </Typography>
            <Typography variant="h5" sx={{marginTop: 2}}>
               He is {data} years old.
            </Typography>
            <ButtonGroup>
                <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>Increment</Button>
                <Button variant="contained" color="secondary" onClick={() => dispatch(decrement())}>Decrement</Button>
                <Button variant="contained" color="error" onClick={() => dispatch(decrement(5))}>Decrement by 5</Button>
            </ButtonGroup>
        </>
    

    )
}