import React, {Reducer, useContext, useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import {Container} from '@material-ui/core';
import MenuBarComp from './chatting/MenuBarComp';
import MessagesComp from './chatting/MessagesComp';
import InputComp from './chatting/InputComp';

import {ChattingContext, reducer} from '../contexts/ChattingContext';

function ChattingDetail() {
  const value = useContext(ChattingContext);
  const [state, dispatch] = useReducer(reducer, value);

  useEffect(()=>{
    init();
  },[]);

  //사용자 정보 불러오기
  const init = () =>{
    dispatch({type:'init-message'});

  };

  return (
    <ChattingContext.Provider value={{...state,dispatch}} style={styles.app}>
      <MenuBarComp></MenuBarComp>
      <MessagesComp></MessagesComp>
      <InputComp></InputComp>
    </ChattingContext.Provider>
  );
}

const styles = {
  app : {
    height : '100vh',
    display:'flex',
    flexDirection:'column'
  },
};




export default ChattingDetail;
