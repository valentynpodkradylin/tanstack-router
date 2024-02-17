import { Comment, Post } from "../../types";

import axios from "axios";

export async function getPosts() {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
}

export async function getPost(postId: string) {
  const response = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return response.data;
}

export async function getPostComments(postId: string) {
  const response = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return response.data;
}
