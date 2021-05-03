import React from 'react';
import useStyles from './PostStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import {useSelector} from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CakeIcon from '@material-ui/icons/Cake';
import { StarSharp } from '@material-ui/icons';

const Post= (props) => {
    const classes = useStyles();

    return(
        <div className = {classes.centerItems}>
            <div className = {classes.expenseItem} style={{backgroundColor: props.post.color, cursor: 'pointer'}} onClick ={()=> props.onPostClick(props.post.id)}>
                {props.post.icon === "EmojiEmotionsIcon" && <IconButton><EmojiEmotionsIcon/></IconButton>}
                {props.post.icon === "FavoriteIcon" && <IconButton><FavoriteIcon/></IconButton>}
                {props.post.icon === "SentimentVeryDissatisfiedIcon" && <IconButton><SentimentVeryDissatisfiedIcon/></IconButton>}
                {props.post.icon === "FastfoodIcon" && <IconButton><FastfoodIcon/></IconButton>}
                {props.post.icon === "CakeIcon" && <IconButton><CakeIcon/></IconButton>}
                <Typography>{props.post.title}</Typography>
               
                <div className = {classes.expenseItemDescription} >
                    <IconButton onClick ={(event)=> props.onDelete(event, props.post.id)}><DeleteIcon/></IconButton>
                    {props.post.readFlag ? <IconButton><VisibilityIcon /></IconButton> : <IconButton><VisibilityOffIcon /></IconButton>}                     
                    <span style={{color: 'orange', marginBottom: '1vh'}}>
                        {[...Array(props.post.priority)].map((star, index)=> (<StarIcon key={index}/>))}
                    </span>  
                </div>
            </div>
        </div> 
    )
}

export default Post;