import {
    makeStyles,
} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    centerItems: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: '5vh'
    },
    container: {
        width: '50vw',
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textField: {
        width: '20vw',
        marginTop: '2vh',
        backgroundColor: 'rgba(227,221,237,0.5)'
    },
    textBody:{
        width: '40vw',
        marginTop: '3vh',
        backgroundColor: 'rgba(227,221,237,0.5)'
    },
    colorsPickerCard: {
        width: '16vw',
        height: '16vh',
        backgroundColor: 'rgba(227,221,237,0.5)',
        justifyContent: 'flex-start!important',
        marginTop: '4vh'
    },
    iconsPickerCard:{
        backgroundColor: 'rgba(227,221,237,0.5)',
        justifyContent: 'flex-start!important',
        marginTop: '2vh',
        width: '16vw',
        height: '6vh',
    },
    picker: {
        marginTop: '0.5vh'
    },
    pickerContainer:{ 
        marginTop: '0.5vh',
        display: 'flex',
        flexDirection: 'column'
    },
    select:{
        marginLeft: '1vw',
        width: '10vw',
        marginTop: '3vh',
        backgroundColor: 'rgba(227,221,237,0.5)',
        color: 'yellow'
    }
}));
export default useStyles;