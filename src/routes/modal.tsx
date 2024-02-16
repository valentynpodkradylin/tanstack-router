import {
  Link,
  Outlet,
  createFileRoute,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createFileRoute("/modal")({
  component: Modal,
});

function Modal() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "green",
          padding: 10,
        }}
      >
        <div
          onClick={() => navigate({ to: "../" })}
          style={{ cursor: "pointer", fontWeight: 600 }}
        >
          Go Back!
        </div>
        <div
          style={{
            flex: "1",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Link to={"/modal/teams"}>Teams</Link>
        </div>
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
  );
}
