import React from 'react';
import me from './faizur.jpg';
import { makeStyles, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    profile: {
        textAlign: 'center',
        padding: '20px',
        margin: '0 50px'
    },
    photo: {
        borderRadius: '50%',
        width: '250px',
        height: '250px',
        border: '5px solid goldenrod',                                                         
        margin: '30px 0'
    },
    paper: {
        backgroundColor: '#cyan',
        padding: '10px 20px'
    }
}) 
const Profile = () => {
    const classes = useStyles();

    return (
        <section className={classes.profile}>
            <Paper className={classes.paper} variant="outlined">
            <h3 style={{color:'aqua'}}> <strong> My Profile </strong></h3>
            <img src={me} alt="" className={classes.photo} />
            <Typography variant="h4" style={{color:'blueviolet', fontWeight: '900'}}>
                Md. Faizur Rahman Khan
            </Typography>
            <p style={{color:'goldenrod', fontWeight: '800'}} >Email : khan.nayeem8662@gmail.com </p>
            </Paper>
        </section>
    );
};

export default Profile;