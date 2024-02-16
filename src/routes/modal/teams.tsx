import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/modal/teams")({
  component: () => <div>Hello /modal/teams!</div>,
});
