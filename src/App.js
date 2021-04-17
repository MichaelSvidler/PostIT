import Login from './Components/Login/Login';
import useStyles from './AppStyles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.backgroundImage} >
        <Login/>
    </div>
  );
}

export default App;
