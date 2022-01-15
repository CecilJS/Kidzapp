import { TableContainer, Paper, Table, TableBody, TableRow, TableCell} from "@mui/material";
import { useAppSelector } from "../../app/store/ConfigStore";
import { currencyFormat } from "../../app/util/util";

export default function BasketSummary() {
    const {basket} = useAppSelector(state => state.basket);
    const subtotal = basket?.items.reduce((acc, item) => acc + (item.price * item.quantity), 0) ?? 0;
    const deliveryFee = subtotal > 100 ? 0 : 10;

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal + deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{fontStyle: 'italic'}}>{`*Orders over ${currencyFormat(100)} qualify for free delivery`}</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}