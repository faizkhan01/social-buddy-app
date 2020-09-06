import React from 'react';
import '../Posts/Post.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    title: {
      fontSize: 20,
    },
    

  });

const Posts = (props) => {
    const classes = useStyles();
    // DESTRUCTURING TITLE FROM PROPS
    const {title , id} = props.post;

const history = useHistory();
const handleClick = (id) => {
  const url = `/posts/${id}`;
  history.push(url);
}
   

    return (
        <>
        <CssBaseline />
        <Card id='post-tile'>
        <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
         {title}
        </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.root} onClick= {() => handleClick(id)}> Show Details </Button>
        </CardActions>
        </Card>
          
        </>
    );
};

export default Posts;