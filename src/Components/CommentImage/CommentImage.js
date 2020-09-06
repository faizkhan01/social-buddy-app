import React from 'react';

const CommentImage = (props) => {
    const {picture} = props.comment;

 const imgStyle = {
     borderRadius: '100%',
     margin: '15px' ,
     height: '80px' ,
 }
    return (
        <>
           <img src={picture.large} alt="" style={imgStyle}/>
    
        </>
    );
};

export default CommentImage;