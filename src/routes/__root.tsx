import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanstackDevtools } from "@tanstack/react-devtools";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>404 route not found</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  },
});

function RootComponent() {
  return (
    <>
      <div id="root">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <TanstackDevtools
        config={{
          position: "bottom-left",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
}
