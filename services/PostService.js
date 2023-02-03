import axios from "axios";
import { SERVER_URL } from "../constants";

const PostService = {
  getAllPosts: () => axios.get(`${SERVER_URL}/posts`),
};

export default PostService;
