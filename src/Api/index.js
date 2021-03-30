import api from '../config/api'

import BackendService from '../Services/BackendService'

api.interceptors.request.use((req) => {
      req.headers.Authorization = BackendService();
    return req;
  });

export const fetchPosts = () => api.get('/posts')

export const createPaot = (newPost) => api.post('/posts', newPost)
export const likePost = (id) => api.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => api.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => api.delete(`/posts/${id}`);

export const signIn = (formData) => api.post('/users/login', formData);
export const signUp = (formData) => api.post('/users/signup', formData);