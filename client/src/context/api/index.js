import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5005/api' })
  API.interceptors.request.use((req)=>{
  if (localStorage.getItem('token')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
  }
  return req
})

export const fetchPost =(id) => API.get(`/posts/${id}`)
export const fetchPosts = (page) => API.get(`/posts?page=${page}`)
export const createPost = (newPost) => API.post('/posts', newPost)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)

export const signIn = (formData) => API.post('/users/signIn', formData)
export const signUp = (formData) => API.post('/users/signUp', formData)
export const fetchUserData = (id) => API.post(`/users/${id}`)