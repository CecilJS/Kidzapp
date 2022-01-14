import { Typography } from "@mui/material";

export default function CheckoutPage() {
    return (
        <Typography variant='h3' sx={{marginTop: 15}}>
            Only logged in users should be able to see this!
        </Typography>
    )
}