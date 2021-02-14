import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './component/Main';
import ChattingList from './component/chattingList/ChattingList';
import SignIn from './component/Signin'
import ChattingDetail from './component/ChattingDetail';
import {UserContext,userReducer} from './contexts/UserContext';
import {useContext, useReducer} from 'react';

function App() {
  const value = useContext(UserContext);
  const [state, userDispatch] = useReducer(userReducer, value);
  
  return (
    <UserContext.Provider alue={{...state,userDispatch}}>
      <Router>
        <Route exact path="/" component={SignIn}/>
        <Route exact path="/chattingList" component={ChattingList}/>
        <Route exact path="/main" component={Main}/>
        <Route exact path="/chattingDetail" component={ChattingDetail}/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
