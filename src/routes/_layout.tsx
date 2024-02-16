import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contacts">contacts</Link>
        <Link to="/team">team</Link>
      </div>
      <Outlet />
    </div>
  ),
});
