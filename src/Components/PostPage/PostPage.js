import React, {useEffect, useState} from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import axios from 'axios';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './Post/PostStyles';
import {useHistory} from 'react-router-dom';

const PostPage = () => {

    const user = useSelector(state=> state.user);
    const history = useHistory();
     
    const PostsLoading = () =>{
        axios.get(`http://localhost:8080/PostManager/PostByUserId/${user.id}`).then(res => {
            console.log(res.data);
            editPosts(res.data)
          }).catch(error => {
              console.log(error)
          })
    }

    useEffect(()=> {
        PostsLoading()
    }, [])

    const [Posts, editPosts] = useState([]);
    const classes = useStyles();

    const deleteItem = (event, key) => {
        event.stopPropagation();
        axios.delete(`http://localhost:8080/PostManager/PostById/${key}`).then(res => {
            console.log(res.data);
            editPosts(Posts.filter(post=> post.id != key))
          }).catch(error => {
              console.log(error)
          })
    }

    const onPostClick= (postId) => {
         history.push({
            pathname: '/PostEditor',
            state: { postId: postId }
          })
    }

    return(
        <>
           { user.id !== -1 ? 
           <div>
               <div className = {classes.centerItems}> 
               <IconButton onClick = {()=>  history.push('/PostEditor')}><AddCircleIcon style={{ color: 'red', fontSize: 70}}/></IconButton>
               </div>
                <div style={{overflow: 'auto', height: '80vh'}}>
                {Posts && Posts.map(post => {
                    return(
                        <Post post={post} key={post.id} onDelete ={deleteItem} onPostClick={onPostClick}/>
                    )
                })}
                </div>
            </div>:
            <div>Not aloud </div> }
        </>
    )
}

export default PostPage;