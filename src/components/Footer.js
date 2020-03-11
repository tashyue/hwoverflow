import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        textAlign: 'center',
        width: '100%',
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2>About Us</h2>
            <h3>
                Quick description of our product for 
                people to see on the home page of the website
            </h3>
        </div>
    );
}

export default Footer;