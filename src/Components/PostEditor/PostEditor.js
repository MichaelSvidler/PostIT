import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import useStyles from './PostEditorStyles';
import TextField from '@material-ui/core/TextField';
import { CirclePicker } from 'react-color';
import { IconButton, Select, MenuItem } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CakeIcon from '@material-ui/icons/Cake';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import StartIcon from '@material-ui/icons/Star';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useLocation, useHistory } from "react-router-dom";

const PostEditor = () => {
    const user = useSelector(state=> state.user);
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#3f51b5')
    const [iconName , setIconName] = useState('FavoriteIcon');
    const [isRead, setIsRead] = useState(false);
    const [priority, setPriority] = useState(3);
    const [id, setId] = useState(0);

    useEffect(() => {
        if(location && location.state && location.state.postId) {
            axios.get(`http://localhost:8080/PostManager/post/${location.state.postId}`).then(result => {
                setTitle(result.data.title);
                setBody(result.data.body);
                setBackgroundColor(result.data.color);
                setIconName(result.data.icon);
                setIsRead(result.data.readFlag);
                setId(result.data.id);
                setPriority(result.data.priority);
            }).catch(error => {

            })
        }
        else console.log("new")
     }, [location]);
 

    const handleChangeComplete = (color) => {
        setBackgroundColor(color.hex)
    };

    const iconColor = (icon) => {
        if (iconName === icon) return '#ff5722';
        return 'gray';
    }

    const saveNote = () => {
        axios.post('http://localhost:8080/PostManager/AddPost', {
            body: body,
            title: title,
            user_id: user.id,
            color: backgroundColor,
            icon: iconName,
            readFlag: isRead,
            id: id,
            priority: priority
        }).then(result => {
            history.push('/PostPage')
        }).catch(error => {

        })
    }

    return(
        <div className={classes.centerItems}>
            {user.id == -1 ? <div> Hamor blat</div> : 
            <Paper elevation={3} className={classes.container} style={{ backgroundColor: backgroundColor}}>
                <form className={classes.root} autoComplete="on">
                    <div>
                        <IconButton onClick={()=> setIsRead(!isRead)} >
                                {isRead? <VisibilityIcon style={{fontSize: 40, marginTop: '0.3vh'}} ></VisibilityIcon>: 
                                        <VisibilityOffIcon style={{fontSize: 40 , marginTop: '0.3vh'}}></VisibilityOffIcon>}
                        </IconButton>
                        <TextField className={classes.textField} 
                        id="filled-basic" 
                        label="Title" 
                        variant="filled"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                         inputProps={{ maxLength: 50 }} />
                        <Select
                            id="priority"
                            value={priority}
                            onChange={(event=> setPriority(event.target.value))}
                            className={classes.select}
                            >
                            <MenuItem value={1}><StartIcon /></MenuItem>
                            <MenuItem value={2}><StartIcon/><StartIcon/></MenuItem>
                            <MenuItem value={3}><StartIcon/><StartIcon/><StartIcon/></MenuItem>
                            <MenuItem value={4}><StartIcon/><StartIcon/><StartIcon/><StartIcon/></MenuItem>
                            <MenuItem value={5}><StartIcon/><StartIcon/><StartIcon/><StartIcon/><StartIcon/></MenuItem>
                        </Select>
                    </div>
                    <TextField className={classes.textBody} 
                    id="filled-basic"
                    label="Body" 
                    variant="filled"
                    multiline
                    rows={8}
                    rowsMax={8}
                    value={body}
                    inputProps={{ maxLength: 50 }}
                    onChange={(event) => setBody(event.target.value)} />
                </form>
                <div className={classes.pickerContainer}>
                    <Card className={classes.iconsPickerCard}>
                        <IconButton onClick={()=> setIconName('EmojiEmotionsIcon')}><EmojiEmotionsIcon style={{color: iconColor('EmojiEmotionsIcon')}}/></IconButton>
                        <IconButton onClick={()=> setIconName('FavoriteIcon')} ><FavoriteIcon style={{color: iconColor('FavoriteIcon')}}/></IconButton>
                        <IconButton onClick={()=> setIconName('SentimentVeryDissatisfiedIcon')}><SentimentVeryDissatisfiedIcon style={{color: iconColor('SentimentVeryDissatisfiedIcon')}} /></IconButton>
                        <IconButton onClick={()=> setIconName('FastfoodIcon')}><FastfoodIcon style={{color: iconColor('FastfoodIcon')}} /></IconButton>
                        <IconButton onClick={()=> setIconName('CakeIcon')}><CakeIcon style={{color: iconColor('CakeIcon')}}/></IconButton>
                    </Card>
                    <Card className={classes.colorsPickerCard}>
                        <CirclePicker 
                            color = {backgroundColor}
                            className = {classes.picker}
                            onChangeComplete={handleChangeComplete} />
                    </Card>
                </div> 
                <Button
                    style={{marginTop: '2vh'}}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    disabled = {title === '' || body === ''}
                    onClick = {saveNote}
                >
                    Save
                </Button>
            </Paper>}
        </div>
    )
}

export default PostEditor;