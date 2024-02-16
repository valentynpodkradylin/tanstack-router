import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/about/$aboutId")({
  component: AboutId,
});

function AboutId() {
  const { aboutId } = Route.useParams();

  return <h1>{aboutId}</h1>;
}
