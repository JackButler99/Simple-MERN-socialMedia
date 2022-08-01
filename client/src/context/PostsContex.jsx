import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST } from '../constants/actionTypes'
import * as api from './api/index.js'
import React, {useReducer, createContext, useContext} from 'react'
import { useNavigate} from 'react-router-dom'
import postsReducer from './reducers/posts'
import { UserAuth } from '../context/AuthContext';

const PostsContext = createContext()

const initState = {
  isLoading: true, 
  posts:[]
}


export const PostsContextProvider = ({children}) => {
  const [postsState, dispatch] = useReducer(postsReducer, initState)
  const createPost = async (post) =>{
    try{
      dispatch({type: START_LOADING})
      const {data} = await api.createPost(post)
      dispatch({type: CREATE, payload: data})
      dispatch({type: END_LOADING})
      
    }catch (error){
      console.log(error)
    }
  } 

  const getPosts = async(page)  => {
    try {
      dispatch ({type: START_LOADING})
      const { data } = await api.fetchPosts(page)
      
      dispatch({type: FETCH_ALL, payload: data})
      dispatch({type: END_LOADING})
    }catch (error) {
      console.log(error)
    }
  }

  const getPost = async (id)  => {
    try {
      dispatch ({type: START_LOADING})

      const {data} = await api.fetchPost(id)
      dispatch({type: FETCH_POST, payload: data})
      dispatch({type: END_LOADING})
    }catch (error){
      console.log(error)
    }
  }

  const updatePost = async (id, post)  => {
    try {
      const {data} = await api.updatePost(id, post)
      dispatch({type: UPDATE, payload: data})
    }catch(error){
      console.log(error)
    }
  }

  const likePost = async(id) => {
    const user = UserAuth()
    try {
      const {data} = await api.likePost(id, user?.token)
      console.log(data)
      dispatch({type: LIKE, payload: data})
    } catch (error){
      console.log(error)
    }
  }

  const deletePost = async (id)  => {
    try {
      await api.deletePost(id)
      dispatch({ type: DELETE, payload: id})
    }catch (error){
      console.log(error)
    }
  }


  return (
    <PostsContext.Provider value = {{ postsState, createPost, getPosts, getPost, deletePost, updatePost, likePost }} >
      {children}
    </PostsContext.Provider>
  )
}

export function PostsContexts(){
  return useContext(PostsContext)
}