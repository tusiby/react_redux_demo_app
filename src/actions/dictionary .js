import { success } from './common'

export const addWord = (data) => {
    return dispatch => {
      dispatch(success(data, 'ADD_WORD'))
    }
}
export const removeWord = (index) => {
    return dispatch => {
      dispatch(success(index, 'REMOVE_WORD'))
    }
}
