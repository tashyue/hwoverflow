import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, 
  InputBase, withStyles, fade, Button, 
  IconButton, Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    }, 
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 300,
            },
        },
    },
  });
  
  class NavBar extends Component {

    state = {
      auth: true,
      anchorEl: null,
    }
    // Handle Functions
    handleMenu = event => {
      this.setState({
        anchorEl: event.currentTarget
      })
    };

    handleClose = () => {
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
      const { classes } = this.props;
      const { auth,  anchorEl } = this.state;
      const open = Boolean(anchorEl);

      

      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                HW Overflow
              </Typography>          
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                      <SearchIcon />
                  </div>
                  <InputBase
                      placeholder="Search..."
                      classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search'}}
                  />
              </div>
              {/* Authenticated user */}
              {auth && (
                <div>
                  <IconButton
                  color="inherit"
                  aria-haspopup="true"
                  aria-controls="menu-appbar"
                  aria-label="account of current user"
                  onClick={this.handleMenu}
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
                    onClose={this.handleClose}
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
        </div>
      );
    }
  }

  export default withStyles(useStyles)(NavBar);