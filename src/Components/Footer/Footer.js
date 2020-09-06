import React from 'react';
import '../Footer/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
        <footer> <FontAwesomeIcon icon={faCopyright}/> Copyright 2020. All Rights Reserved To  Md. Faizur Rahman Khan </footer>
        </>
    );
};

export default Footer;