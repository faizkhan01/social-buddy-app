import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Posts from '../Posts/Posts';
import Box from '@material-ui/core/Container';


const Home = () => {
    const [posts , setPosts] = useState([]);
  
    useEffect( () =>{
  //  USING AXIOS TO FETCH API

      const fetchPosts = async () =>{
        const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data);
      }
      fetchPosts();
    
    },[]);

    return (
   <>
<div style={{ width: '100%', background: 'cyan' }}>
  <div className="text-center m-3">
  <h1 style={{ color: 'blueViolet' }}> <strong>  My Posts </strong>  </h1>
  
  </div>
  {/* MATERIAL UI BOX */}
      <Box display="flex" component="span" p={1}>
      
    {
     posts.map(post => <Posts post={post} key={post.id}></Posts>  )
   }
      </Box>
     
    </div>
 </>
    );
};

export default Home;