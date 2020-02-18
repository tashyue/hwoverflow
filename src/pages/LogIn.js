import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

const styles = {
    textAlign: 'center'
}


class LogIn extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <p>yooooo</p>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

LogIn.propTypes = {
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(LogIn);