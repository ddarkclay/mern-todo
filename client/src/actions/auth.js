import * as api from '../api';
import { AUTH } from '../constants/actionTypes'

export const signIn = (formData, histroy) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })
        histroy.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData, histroy) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data })
        histroy.push('/')
    } catch (error) {
        console.log(error)
    }
}