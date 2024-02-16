import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/about")({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});
