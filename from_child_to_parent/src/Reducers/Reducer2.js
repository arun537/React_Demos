export const reducerforAction = (state = {name : 'anand'}, action) => {
    switch(action.type){
        case 'ACTION_FOR_FIRST':
            return {...state, name : action.payload}
        default:
            return state
    }
}