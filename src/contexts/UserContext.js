import { Switch } from '@material-ui/core';
import React from 'react';

const UserContext =   React.createContext({
    userInfo : {
        userId:'',
        userNm:'',
    }
});

const userReducer = ( state, action ) => {
    switch (action.type) {
        case 'init-userInfo':
        case 'update-userInfo':
        default:
            break;
    }
};

export {UserContext, userReducer};