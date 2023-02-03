import axios from "axios";
import { SERVER_URL } from "../constants";

const PostService = {
  getAllPosts: (page) => axios.get(`${SERVER_URL}/posts?page=${page}`),
};

export default PostService;
