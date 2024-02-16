import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/home")({
  component: () => <div>Hello A!</div>,
});
