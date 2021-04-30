import {
    makeStyles,
} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    centerItems: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    expenseItem: {
        width:"65%",
        fontSize: '1rem',
        fontWeight: 'bold',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        padding: "0.3rem",
        margin: "1rem 0",
        borderRadius: "19px",
    },
    expenseItemDescription: {
        display: 'flex',
        flexDirection: 'row-reverse',
        gap: '1rem',
        alignItems: 'flex-end',
        flexFlow: 'column-reverse',
        justifyContent: 'flex-start',
        flex: '1'
    },
    expense_item_h2: {
        color: 'white',
        fontSize: '1rem',
        flex: '1',
        margin: '0 1rem'

    },
    expense_item__price: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#40005d',
        border: '1px solid white',
        padding: '0.5rem',
        borderRadius: '15px'
    },
    DeleteItemStyle: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'red',
        border: '1px solid white',
        padding: '0.5rem',
        borderRadius: '15px'
    }
}));
export default useStyles;