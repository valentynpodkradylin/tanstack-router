import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main")({
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
        <Link to={"/main/"}>Home</Link>
        <Link to={"/main/about"}>About</Link>
        <Link to={"/modal"}>Modal</Link>
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
