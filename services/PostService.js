import axios from "../helpers/axiosConfig";

const PostService = {
  getAllPosts: (page) => axios.get(`/posts?page=${page}`),
  getPostById: (id) => axios.get(`/posts/${id}`),
  createPost: (post) => axios.post(`/posts`, post),
};

export default PostService;
