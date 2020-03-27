import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { withStyles, Container, Grid, 
    Card, Typography, CardContent, CardMedia, Link, Divider } from '@material-ui/core';
import { VideoCard } from '../components/VideoCard';
import Layout from '../components/Layout';

const useStyles = theme => ({
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9 aspect ratio
    },
    cardContent: {
        flexFlow: 1,
    },
});

const thumbnail = [1, 2, 3, 4, 5, 6, 7, 8];

class Dashboard extends Component {
    render() {
        const { classes } = this.props
        return (
            <Layout>
                <React.Fragment>
                    <main>
                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" component="h2">
                                        Computer Engineering
                                    </Typography>
                                </Grid>
                                {thumbnail.map((card) => (
                                    <Grid item 
                                    key={card} 
                                    xs={6} sm={3}
                                    alignItems="center"
                                    alignContent="center">
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image Title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h6" component="h2">
                                                    Video Description
                                                    <Link variant="body1" component="h6">
                                                        {"Class name"}
                                                    </Link>
                                                    <Link variant="body2" component="h6" href="/Profile">
                                                        {"Username"}
                                                    </Link>
                                                </Typography>
                                            </CardContent>
                                            {/* TODO: Add card actions */}
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </main>
                </React.Fragment>
            </Layout>
            
        );
    }
}

export default withStyles(useStyles)(Dashboard);