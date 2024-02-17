import api from "../api";
import { queryOptions } from "@tanstack/react-query";

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: api.posts.getPosts,
});

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ["posts", { postId }],
    queryFn: () => api.posts.getPost(postId),
  });

export const postCommentsQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ["comments", { postId }],
    queryFn: () => api.posts.getPostComments(postId),
  });
