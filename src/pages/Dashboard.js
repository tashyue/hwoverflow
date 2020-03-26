import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { withStyles, Container, Grid, 
    Card, Typography, CardContent, CardMedia } from '@material-ui/core';

const useStyles = theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9 aspect ratio
    },
    cardContent: {
        flexFlow: 1,
    },
});

const cards = [1, 2, 3, 4];

class Dashboard extends Component {
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <NavBar />
                <main>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            imaage="https://source.unsplash.com/random"
                                            title="Image Title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Video Description
                                            </Typography>
                                            <Typography>
                                                Username
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
        );
    }
}

export default withStyles(useStyles)(Dashboard);