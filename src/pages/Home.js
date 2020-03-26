import React, { Component } from 'react'
import { Button, Typography, Container, withStyles } from '@material-ui/core'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '10vh'
    },
    content: {
        textAlign: 'center',
        marginTop: '15%',
    },
    button: {
        marginTop: theme.spacing(3), 
    }
});

export class Home extends Component {
    render() {
        const { classes } = this.props; 
        return (
            <div className={classes.root}>
            <NavBar />
            <Container component="main" className={classes.content} maxWidth="sm">
                <Typography variant="h1">HW Overflow</Typography>
                <Button
                    color='primary' 
                    variant='contained'
                    className={classes.button}
                    size="large"
                    href="/SignUp"
                >
                    Sign Up
                </Button>
            </Container>
            <Footer />
        </div>
        );  
    }
}

export default withStyles(useStyles)(Home)
