import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/about")({
  component: () => <div>Hello /main/about!</div>,
});
