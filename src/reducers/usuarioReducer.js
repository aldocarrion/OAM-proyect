import {GET_USUARIOS, DEL_USUARIO, ADD_USUARIO, GET_USUARIO, UPDATE_USUARIO} from '../actions/types';


const initialState = {
    users: [
        
      ],
    user:{

    }, 
    searchField:'e'
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_USUARIOS:
            return {
                ...state, 
                users: action.payload
            };
        case GET_USUARIO:
          return{
            ...state,
            user: action.payload
          }
        case DEL_USUARIO:
            return{
              ...state,
              users: state.users.filter(user => user.id !== action.payload)
            }
        case ADD_USUARIO:
            return{
              ...state,
              users: [action.payload, ...state.users]
            }
        case UPDATE_USUARIO:
          return{
            ...state,
            users: state.users.map(user => user.id === action.payload.id ? (user = action.payload) : (user))
          }
        default:
            return state;

    }
}