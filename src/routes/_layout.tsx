import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
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
          backgroundColor: "orange",
        }}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
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
