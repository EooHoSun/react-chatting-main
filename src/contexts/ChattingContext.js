import { Switch } from '@material-ui/core';
import React from 'react';

const ChattingContext =   React.createContext({
    room : {
        id : null,
        name : null,
        user_count : null,
        user_list:[],
        created_at : null,
    },
    messageList : [],
    userInfo : {
        userId:'',
        userNm:'',
    }
});

const reducer = ( state, action ) => {
    switch (action.type) {
        case 'init-message':
            return {
                ...state,
                messageList : []
            };
        case 'insert-message':
            console.log('insert-message');
            console.log('state',state);
            console.log('action',action);
            return {
                ...state,
                messageList: [...state.messageList].concat({
                    id : state.messageList.length+1,
                    primary : "hosun",
                    secondary : action.message,
                    person : '/static/images/avatar/1.jpg'
                }).reverse()
            };
        default:
            break;
    }
};

export {ChattingContext, reducer};