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
  state = {
    menu: SubjectMenu
  }

    render() {
        const { classes, toggleDrawer, open } = this.props
        const { menu } = this.state
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
              <List>
            <div className={classes.drawerHeader}>
              <ListItem >
                  <ListItemText primary="Subjects" />
              </ListItem>
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            
              {menu.map((menuItem) => (
                <ListItem button key={menuItem.text}>
                  <ListItemText primary={menuItem.text} />
                </ListItem>
              ))}
            </List>
          </MUIDrawer>
        )
    }
}

export default withStyles(useStyles)(Drawer)