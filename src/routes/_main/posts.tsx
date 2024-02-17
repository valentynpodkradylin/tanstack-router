import { Outlet, createFileRoute } from "@tanstack/react-router";

import { Item } from "../../components/Item";

export const Route = createFileRoute("/_main/posts")({
  component: () => (
    <div>
      <div style={{ margin: "20px 0", position: "sticky", top: 80 }}>
        <Item bg="rgb(117, 194, 246, 0.8)">POSTS LAYOUT</Item>
      </div>
      <Outlet />
    </div>
  ),
});
