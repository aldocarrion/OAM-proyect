import { ADD_USUARIO, DEL_USUARIO, GET_USUARIOS, GET_USUARIO, UPDATE_USUARIO } from './types';
import axios from 'axios';

export const getUsuarios = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');// enter link to system server
    dispatch({
        type: GET_USUARIOS,
        payload: res.data
    });
    
};
export const getUsuario = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: GET_USUARIO,
        payload: res.data
    });
    
};



export const delUsuario = (id) => async dispatch => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch( {
        type: DEL_USUARIO,
        payload: id
    });
};

export const addUsuario = (user) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', user)
    dispatch({
        type: ADD_USUARIO,
        payload: res.data
    });
}
export const updateUsuario = (user) => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
    dispatch({
        type: UPDATE_USUARIO,
        payload: res.data
    });
}



