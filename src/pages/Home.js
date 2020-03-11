import React from 'react'
import { Button, Typography } from '@material-ui/core'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        
    },
    content: {
        textAlign: 'center',
        marginTop: theme.spacing(8)
    },
    button: {
        marginTop: theme.spacing(3), 
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.content}>
                <Typography variant="h1">HW Overflow</Typography>
                <Button
                    color='primary'
                    variant='contained'
                    className={classes.button}
                    size="large"
                >
                    Sign Up
                </Button>
            </div>
            <Footer />
        </div>
    );
}

export default Home;