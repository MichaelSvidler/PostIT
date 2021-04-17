import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './LoginStyles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Logo from '../../Images/PostIt.png'

export default function Login () {
    const classes = useStyles();
 
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
                />
                <TextField label="Password" 
                variant="outlined"
                type="password"
                className = {classes.field}
                 />
            </form>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button   variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}>Login</Button>
            </CardActions>
        </Card>
      </div>
    )
}