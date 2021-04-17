import {makeStyles,} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
      },
    root: {
        width: '30vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    field:{
        backgroundColor: 'rgba(255,255,255,0.8)',
       marginTop: '1vh',
       width: '20vw'
    },
    button: {
        margin: '1vw',
        
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center'
    },
    textDisign: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(132,211,255,0.8)'
    },
    Logo: {
        width: 'auto',
        height: '40%'
    }
}));

export default useStyles;