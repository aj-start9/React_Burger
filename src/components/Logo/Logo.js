import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo (1).png';
import classes from './Logo.css';

const logo =(props)=> (
<div className={classes.Logo} onClick={props.click}>
        <img src={burgerLogo} alt="Logo"/>
</div>)


export default logo;