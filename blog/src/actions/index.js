import jsonPlaceHolder from '../axios/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPosts = () => dispatch => {
    jsonPlaceHolder.get('/posts').then((response) => {
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    })
}

export const fetchUsers = () => dispatch => _fetchUsers(dispatch);


const _fetchUsers = _.memoize((dispatch) => {
    jsonPlaceHolder.get('/users').then((response) => {
        dispatch({
            type: 'FETCH_USERS',
            payload: response.data
        })
    })
})

