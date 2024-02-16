import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_modal/contacts/")({
  component: () => (
    <div>
      <div style={{ display: "grid", gap: "10px" }}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Link
            to="/contacts/$id"
            key={item.toString()}
            params={{ id: item.toString() }}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  ),
});
