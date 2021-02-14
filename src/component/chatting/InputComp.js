import React,{useState, useReducer, useContext} from 'react';
import {Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {reducer, ChattingContext} from '../../contexts/ChattingContext';

function InputComp() {
    const classes = useStyles();
    const {dispatch} = useContext(ChattingContext);
    const [text, setText] = useState('');

    const inputChangeHandler = e => {
      setText(e.target.value);
    };
    const submitHandler = e => {
      e.preventDefault();
      if( !text ) return;
      
      dispatch({type:'insert-message', message:text});
      setText('');
    };

    


    return (
      <Container style={styles}>
            <Paper component="form" className={classes.root} onSubmit={submitHandler}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="메시지를 입력하세요"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={inputChangeHandler}
                value={text}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                <DirectionsIcon 
                  onClick={submitHandler}
                />
            </IconButton>
        </Paper>
      </Container>
    );
  }

const styles = {
    height:'10vh',
    backgroundColor:'#303F9F'
};
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '100%',
      height:'100%',
      backgroundColor:'#303F9F'
    },
    input: {
      flex: 1,
    },
    iconButton: {
    },
    divider: {
    },
  }));
  
  export default InputComp;
  