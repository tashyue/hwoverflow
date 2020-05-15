import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Card, CardContent, Typography, withStyles, Container, Grid, Avatar, Divider, Paper } from '@material-ui/core'
import Layout from '../components/Layout'


const useStyles = theme => ({
    title: {
        textAlign: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    video: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export class VideoView extends Component {
    render() {
        const { classes } = this.props

        return (
            <Layout>
                {/* Change URL to specific video */}
                <Typography variant="h4" component="h2" className={classes.title} >
                    Video Title
                </Typography>
                <Grid container className={classes.video} minWidth='sm'>
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                        controls/>
                    <Grid item>
                        <Typography variant="h6">
                            Comments
                        </Typography>
                    </Grid>
                    <Paper style={{padding: "40px 20px"}}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar />
                            </Grid>
                            <Grid item justifyContent="left" xs>
                                <Typography>
                                    Jacob Jennings
                                </Typography>
                                <Typography>
                                    This is a sample comment
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider variant="fullWidth" style={{ margin: "30px 0" }}/>
                    </Paper>
                    
                </Grid>
            </Layout>   
        )
    }
}

export default withStyles(useStyles)(VideoView)
