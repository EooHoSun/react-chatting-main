import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Container, makeStyles, AppBar, Toolbar, Typography, IconButton, MenuItem,Menu} from '@material-ui/core';
import { AccountCircle, MenuOpen } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

function MenuBarComp() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const open = Boolean(anchorEl);
  
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
      setMenuOpen(!menuOpen);
    };
    const menuOpenHandler = () => {
        setMenuOpen(!menuOpen);
    };
    const handleClose = () => {
        menuOpenHandler();
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar className={classes.toobar}>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                    <AccountCircle />

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
                        open={menuOpen}
                        onClose={handleClose}
                    >
                        <AvatarGroup max={3}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                        </AvatarGroup>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                    </IconButton>
                </div>
                <Typography variant="h6" className={classes.title}>
                    채팅방
                </Typography>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuOpen/>
                </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
      
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:'100%',
      backgroundColor:'#303F9F'

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    right : {
        display:'flex'
    },
    toobar:{
      backgroundColor:'#303F9F'
    }
  }));

  export default MenuBarComp;
  