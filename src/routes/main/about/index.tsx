import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div style={{ display: "grid", gap: "15px", fontWeight: 700 }}>
      <Outlet />
      {[1, 2, 3, 4, 5].map((i) => (
        <Link
          key={i.toString()}
          to="/main/about/$aboutId"
          params={{ aboutId: i.toString() }}
        >
          {i}: {Math.random(10).toString(36)}
        </Link>
      ))}
    </div>
  );
}
