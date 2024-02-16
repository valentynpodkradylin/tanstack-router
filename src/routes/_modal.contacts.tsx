import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_modal/contacts")({
  component: () => (
    <div>
      Hello /_modal/contacts/! <Outlet />
    </div>
  ),
});
