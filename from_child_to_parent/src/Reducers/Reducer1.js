export const reducer1 = (state = {surName : 'Kumar'}, action) => {
    switch (action.type){
        case 'ACTION_FOR_SECOND':
            return {...state, surName : action.payload}
        default:
            return state;
    }
}