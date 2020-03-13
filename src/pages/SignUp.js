import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, Container, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import NavBar from '../components/NavBar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <Container maxWidth="xs">
                <CssBaseline />
                <div className={classes.root}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    id="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="lname"
                                    name="lastName"
                                    id="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            color="primary"
                            className={classes.submit}
                            fullWidth
                            variant="contained"
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Typography variant="body2">
                                    Already have an account? Sign In
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
        
    );
}

export default SignUp;