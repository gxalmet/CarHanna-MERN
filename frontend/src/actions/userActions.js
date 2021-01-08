import Axios from 'axios';

import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../constants/userConstants";


export const signIn = (email, password) => async(dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const url = `/api/users/signin`;

        const { data } = await Axios.post(url, { email, password });

        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        });
    }
}

export const signOut = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_SIGNOUT });
}

export const register = (name, surname, email, password) => async(dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
        const url = `/api/users/register`;

        const { data } = await Axios.post(url, { name, surname, email, password });

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        });
    }
}
export const update = ({ userId, name, surname, email, password }) => async(dispatch, getState) => {

    const { userSignIn: { userInfo } } = getState();

    dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, name, surname, email, password } });
    try {
        const url = `/api/users/updateuser` + userId;

        const { data } = await Axios.put(url, { name, surname, email, password }, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token
            }
        });

        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        });
    }
}