import {
  Outlet,
  createRootRouteWithContext,
  redirect,
} from "@tanstack/react-router";

import { QueryClient } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const routeWithContext = createRootRouteWithContext<{
  queryClient: QueryClient;
}>();

export const Route = routeWithContext({
  beforeLoad: () => {
    redirect({
      to: "/a",
    });
  },
  component: Root,
});

function Root() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
