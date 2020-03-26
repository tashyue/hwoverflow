import React, { Component } from 'react';
import { AppBar, Toolbar, withStyles, Button, 
  IconButton, Menu, MenuItem, Link,} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from "./SearchBar";
import Drawer from "./Drawer";

const drawerWidth = 240;

const useStyles = theme => ({
    root: {
      flexGrow: 1,
      display: 'flex'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
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
  
class NavBar extends Component {
  state = {
    auth: true,
    anchorEl: null,
  }
  
  // Handle Functions
  handleMenuOpen = event => {
    this.setState({
      anchorEl: event.currentTarget
    })
  };

  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
    })
  };

  handleLogout = event => {
    this.setState({
      anchorEl: false,
      auth: false,
    })
  };

  render() {
    const { classes, toggleDrawer } = this.props;
    const { auth,  anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar 
          position="static"
        >
          <Toolbar>
            {auth && (
              <IconButton 
                edge="start" 
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
              >
              <MenuIcon />
            </IconButton>
            )}
            <Link 
              variant="h6" 
              color="textSecondary" 
              className={classes.title}
              underline="none"
              href="/">
              {"HW Overflow"}
            </Link>          
            <SearchBar />
            {/* Authenticated user */}
            {auth && (
              <div>
                <IconButton
                color="inherit"
                aria-haspopup="true"
                aria-controls="menu-appbar"
                aria-label="account of current user"
                onClick={this.handleMenuOpen}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleMenuClose}
                >
                  {/* Set onClick to navigate to respective pages */}
                  <MenuItem>Profile</MenuItem> 
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
            {/* Non-authenticated user */}
            {!auth && (
              <Button 
              color="inherit"
              variant="text"
              href="/Login"
            >
              Login
            </Button>
            )}
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawer} toggleDrawer={toggleDrawer}/>
      </div>
    );
  }
}

export default withStyles(useStyles)(NavBar);