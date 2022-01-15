import {  Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigStore";
import { decrement, increment } from "./counterSlice";



export default function Contact (){
    const dispatch = useAppDispatch();
    const {data, title} = useAppSelector(state => state.counter);

    return (
        <>
            <Typography variant="h2" sx={{marginTop: 15}}>
                {title}
            </Typography>
            <Typography variant="h5" sx={{marginTop: 2}}>
               He is {data} years old.
            </Typography>
            <ButtonGroup>
                <Button variant="contained" color="primary" onClick={() => dispatch(increment(1))}>Increment</Button>
                <Button variant="contained" color="secondary" onClick={() => dispatch(decrement(1))}>Decrement</Button>
                <Button variant="contained" color="error" onClick={() => dispatch(decrement(5))}>Decrement by 5</Button>
            </ButtonGroup>
        </>
    

    )
}

