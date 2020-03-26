import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = theme => ({
    footer: {
        padding: theme.spacing(3, 2),
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
    }
});

class Footer extends Component {
    render() {
        const { classes } = this.props;
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
    
}

export default withStyles(useStyles)(Footer);