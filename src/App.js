import Login from './Components/Login/Login';
import useStyles from './AppStyles';
import PostPage from './Components/PostPage/PostPage';
import {Route, Switch} from 'react-router-dom';
function App() {
  const classes = useStyles();

  return (
    <div className={classes.backgroundImage} >
        <Switch>
          <Route path ="/Login" component = {Login}/>
          <Route path ="/PostPage" component = {PostPage}/>
          <Route path = "/" component={Login}/>
        </Switch>
    </div>
  );
}

export default App;
