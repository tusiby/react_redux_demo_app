const initialState = {
    list:[]
}
export function dictionary(state = initialState, action){
    switch (action.type) {
        case 'ADD_WORD_SUCCESS':
            return { 
                ...state,
                list: [...state.list, action.value],
                loading: false
            }
        case 'REMOVE_WORD_SUCCESS':
            return { 
                ...state,
                list: state.list.filter((item, index) => index !== action.value),
                loading: false
            }
        default:
        return state
    }
}