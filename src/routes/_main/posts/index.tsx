import { Link, createFileRoute } from "@tanstack/react-router";

import { Item } from "../../../components/Item";
import { postsQueryOptions } from "../../../services/posts";

export const Route = createFileRoute("/_main/posts/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions),
  component: Posts,
});

function Posts() {
  const posts = Route.useLoaderData();

  return (
    <div style={{ display: "grid", gap: "20px" }}>
      {posts.map((post) => (
        <Link
          key={post.id}
          to="/posts/$postId"
          params={{ postId: String(post.id) }}
        >
          <Item>{JSON.stringify(post)}</Item>
        </Link>
      ))}
    </div>
  );
}
