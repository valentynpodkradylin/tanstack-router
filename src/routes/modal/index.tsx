import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/modal/")({
  component: () => (
    <>
      Modal Index
      <Outlet />
    </>
  ),
});
