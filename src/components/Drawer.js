import React, { Component } from 'react';
import { IconButton, Drawer as MUIDrawer, Divider, 
    List, ListItem, ListItemText, withStyles, Typography 
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {SubjectMenu} from '../data/DrawerMenu'

const drawerWidth = 240;

const useStyles = theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  });

class Drawer extends Component {

    render() {
        const { classes, toggleDrawer, open } = this.props

        return (
            <MUIDrawer
                open={open}
                onClose={toggleDrawer}
                className={classes.drawer}
                anchor="left"
                classes={{
                paper: classes.drawerPaper
                }}
             >
            <div className={classes.drawerHeader}>
              <Typography>
                  Subjects
              </Typography>
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {['Computer Engineering', 'Physics', 'Mathematics'].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </MUIDrawer>
        )
    }
}

export default withStyles(useStyles)(Drawer)