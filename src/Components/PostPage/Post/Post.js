import React from 'react';
import useStyles from './PostStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import {useSelector} from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
const Post= () => {
    const classes = useStyles();
    
    
    return(
        
        
                <div className = {classes.centerItems}>
                    <div className = {classes.expenseItem} style={{backgroundColor: "white"}}>
                        <div>Title</div>
                        
                        <div className = {classes.expenseItemDescription} >
                            <IconButton><EditIcon/></IconButton>
                            <div className >icon</div>
                            {false ? <IconButton><VisibilityIcon /></IconButton> : <IconButton><VisibilityOffIcon /></IconButton> }
                            <IconButton><DeleteIcon/></IconButton>
                        </div>
                    </div>
                 </div> 
           
       
    )
}

export default Post;