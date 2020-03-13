import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(3, 2),
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography 
                    variant="subtitle2"
                    color="textSecondary"
                >
                    About Us
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    // paragraph
                    >
                    HW Overflow aims to bring an advanced and progressive educational
                    learning platform to students everywhere. It allows students to 
                    communicate and collaborate over a wide range of topics from the 
                    comfort of their own home.
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;