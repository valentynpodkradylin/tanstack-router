import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/modal")({
  component: () => (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          backgroundColor: "green",
        }}
      >
        <Link to={"/modal/teams"}>Teams</Link>
      </div>
      <div
        style={{
          height: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  ),
});
