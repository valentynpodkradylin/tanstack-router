import axios from "axios";

export async function getCommentsByPostId(postId: string) {
  const response = await axios.get<Comment>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
}
