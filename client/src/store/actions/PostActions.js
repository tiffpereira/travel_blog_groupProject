import { GetPosts, GetComments } from '../../services/PostService'
import { GET_POSTS, GET_COMMENTS } from '../types'

export const LoadPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await GetPosts()

            dispatch({
                type: GET_POSTS,
                payload: posts 
            })
            console.log(posts, 'dispatching posts')
        } catch (error) {
            throw error 
        }
    }
}

export const LoadComments = (id) => {
    return async (dispatch) => {
        try {
            console.log(id, 'id comments')
            const comments = await GetComments(id)

            dispatch({
                type: GET_COMMENTS,
                payload: comments  
            })
            console.log(comments, 'dispatching comments')
        } catch (error) {
            throw error 
        }
    }
}
