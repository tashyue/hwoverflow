// import React, { Component } from 'react'
// import { withStyles, Card, CardContent, 
//     CardMedia, Typography } from '@material-ui/core';

// const useStyles = theme => ({
//     cardGrid: {
//         paddingTop: theme.spacing(8),
//         paddingBottom: theme.spacing(8),
//     },
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     cardMedia: {
//         paddingTop: '56.25%', // 16:9 aspect ratio
//     },
//     cardContent: {
//         flexFlow: 1,
//     },
// });

// export class VideoCard extends Component {
//     render() {
//         const { classes } = this.props;
//         return (
//             <div>
//                 <Card className={classes.card}>
//                     <CardMedia
//                         className={classes.cardMedia}
//                         image="https://source.unsplash.com/random"
//                         title="Image Title"
//                     />
//                     <CardContent className={classes.cardContent}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             Video Description
//                         </Typography>
//                         <Typography>
//                             Username
//                         </Typography>
//                     </CardContent>
//                     {/* TODO: Add card actions */}
//                 </Card>
//             </div>
//         )
//     }
// }

// export default withStyles(useStyles)(VideoCard);