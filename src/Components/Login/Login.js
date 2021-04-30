import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import useStyles from './LoginStyles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Logo from '../../Images/PostIt.png'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUser} from '../../Redux/User/UserSlice'

export default function Login () {
    const classes = useStyles();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    const userLogin = () =>{
        axios.post('http://localhost:8080/userManager/userByNameAndPassword', {
            "password": password,
            "userName": userName
          }).then(res => {
            console.log(res.data);
            dispatch(setUser({
                userName: res.data[0].userName,
                id: res.data[0].id
            }))
            history.push('/PostPage');
          }).catch(error => {
              console.log(error)
              alert("wrong user name or/and password")
          })
    }

    return(
        <div className={classes.container}>
                <img src = {Logo}
                className = {classes.Logo}></img>
            <Card className={classes.root} variant="outlined" raised = {true}
            > 
            <CardContent>   
            <form className={classes.form} >
                <TextField
                label="User Name"
                variant="outlined"
                className = {classes.field}
                value = {userName}
                onChange = {(event) => setUserName(event.target.value)}
                />
                <TextField label="Password" 
                variant="outlined"
                type="password"
                className = {classes.field}
                value = {password}
                onChange = {(event) =>setPassword(event.target.value)}
                 />
            </form>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button   variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick = {userLogin}>Login</Button>
            </CardActions>
        </Card>
        
      </div>
    )
}