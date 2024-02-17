import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main")({
  component: Main,
});

function Main() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px",
          display: "flex",
          zIndex: 1000,
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "rgba(255, 137, 17, 0.9)",
        }}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/posts"}>Posts</Link>
      </div>
      <div
        style={{
          marginTop: 60,
          height: "100%",
          padding: "10px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
