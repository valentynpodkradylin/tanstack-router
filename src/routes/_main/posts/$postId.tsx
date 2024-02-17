import { Comment, Post } from "../../../types";
import {
  postCommentsQueryOptions,
  postQueryOptions,
} from "../../../services/posts";

import { Item } from "../../../components/Item";
import { createFileRoute } from "@tanstack/react-router";

interface LoaderData {
  post: Post;
  comments: Comment[];
}

export const Route = createFileRoute("/_main/posts/$postId")({
  loader: async ({
    context: { queryClient },
    params: { postId },
  }): Promise<LoaderData> => {
    const post = await queryClient.ensureQueryData(postQueryOptions(postId));
    const comments = await queryClient.ensureQueryData(
      postCommentsQueryOptions(postId)
    );

    return { post, comments };
  },
  component: PostId,
});

function PostId() {
  const { post, comments } = Route.useLoaderData();

  return (
    <div>
      <Item>{JSON.stringify(post)}</Item>
      <div
        style={{
          margin: "20px 0 0 0",
          display: "grid",
          gap: 20,
          paddingInline: 20,
        }}
      >
        <div>Comments:</div>
        {comments.map((comment) => (
          <Item key={comment.id} bg="rgba(127, 39, 255, 0.2)">
            {JSON.stringify(comment, null, 2)}
          </Item>
        ))}
      </div>
    </div>
  );
}
