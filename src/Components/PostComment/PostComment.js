import React, { useState, useEffect } from 'react';
import CommentImage from '../CommentImage/CommentImage';
import '../PostComment/PostComment.css'


const PostComment = (props) => {
    const{name , body} = props.comment;
   const [commentImg , setCommentImg ] = useState([]);
//    FETCHING DATA FOR USER IMAGE
   useEffect(()=>{
       const imgUrl = `https://randomuser.me/api/`
       fetch(imgUrl)
       .then(response => response.json())
       .then(data => { 
        //    console.log(data.results);
           setCommentImg(data.results);
       })
   },[])
   

   const Imgemail = commentImg.map(email => email.email);
   const Imgname = commentImg.map((name) => {
       const fullName = `${name.name.first} ${name.name.last}`
       return fullName;
   });
    return (
        <>
        
        <div  className="comment" style={{backgroundColor:'goldenrod'}} >
            <div className="d-flex align-items-center">
     
                {
                    commentImg.map(cI => <CommentImage comment={cI} key={cI.id}></CommentImage>)
                }
            </div>
            <div>
                <p>By <strong>{Imgname}</strong> <br/>
                <small>{Imgemail}</small></p>
                <h3 style={{color: '#303f9f'}}>Title: {name}</h3>  
                <p>{body}</p>
           </div>
           
        </div>
       </> 
    
       
    );
};

export default PostComment;