import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import {Container} from '@material-ui/core';
import MessageComp from './MessageComp';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import {ChattingContext} from '../../contexts/ChattingContext';


function MessagesComp() {
    const classes = useStyles();
    const {messageList} = useContext(ChattingContext);

    return (
        <Container style={styles.container}>
            <List className={classes.list} style={styles.messages}>
            {messageList.map(({ id, primary, secondary, person }) => (<MessageComp props={{id, primary, secondary, person}}></MessageComp>))}
            </List>
        </Container>
    );
};
      
const styles = {
    container : {
        display:'flex',
        flexDirection:'column-reverse',
        height:'80vh',
        // backgroundColor:'#5A4D4A',
        overflowY:'scroll'
    },
    messages : {
        height:'90%',
        display:'flex',
        flexDirection:'column-reverse',
    }
};

const useStyles = makeStyles((theme) => ({
    list: {
      marginBottom: theme.spacing(2),
    },
  }));
export default MessagesComp;
  