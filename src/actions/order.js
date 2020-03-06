import {TOGGLE_MODAL, ADD_ORDER, CHANGE_NAME, CHANGE_TBL_NUM} from '../actions';
import service from '../utils/request';

export const toggleModal = (payload) => {
    return { type: TOGGLE_MODAL, payload }
};

export const addOrder = (payload) => {
    return { type: ADD_ORDER, payload }
};

export const changeName = (payload) => {
    return { type: CHANGE_NAME, payload }
};

export const changeTableNumber = (payload) => {
    return { type: CHANGE_TBL_NUM, payload }
};

export const submitOrder = async function(payload) {
    await service.post('/order', payload)
    .then(response => {
        console.log(response)
    })
    .catch(e => {
        console.log(e)
    })
}