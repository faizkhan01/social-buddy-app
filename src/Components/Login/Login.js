import React from 'react';
import starterImg1 from '../../images/social-buddy-2.png';
import './Login.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="starter">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-6 col-lg-6 starter-text">
                <div>
                <h1 style={{color:'blueviolet'}}> <i class="fa fa-share-alt" aria-hidden="true"></i> Social Buddy </h1>
                <h3 style={{color:'goldenrod'}}> Let's Explore The World in your fingertips!!!</h3>
                <p style={{fontSize:'20px'}}> <strong> Lets Start By Logging In Below!!!  </strong> </p>
                <Link to={`/home`}>
                <Button variant="contained" style={{color:"blue", backgroundColor: 'cyan'}} disableElevation> <strong> Login </strong> </Button>
                </Link>
            </div>
                </div>
           <div className="col-12 col-md-6 col-lg-6">
           <div>
           <img src={starterImg1} alt="" className="img-fluid" /></div>
           </div>
                </div>
            </div>
           
        </div>
    );
};

export default Login;