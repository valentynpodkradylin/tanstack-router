import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_modal/contacts/$id")({
  component: ContactsId,
});

function ContactsId() {
  const { id } = Route.useParams();
  return <div>Current Id: {id}</div>;
}
