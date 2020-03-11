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

const Login = () => {
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
                        Login
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                        />
                        <TextField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            color="primary"
                            className={classes.submit}
                            fullWidth
                            variant="contained"
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="body2">
                                    Forgot password?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2">
                                    Don't have an accout? Sign Up
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
        
    );
}

export default Login;