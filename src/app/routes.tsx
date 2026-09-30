import { useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  useLocation,
} from "react-router";
import { Footer, HomePage, Navbar } from "../App";

function Root() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView();
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      {
        path: "about",
        lazy: async () => ({
          Component: (await import("../pages/AboutPage")).default,
        }),
      },
      {
        path: "products",
        lazy: async () => ({
          Component: (await import("../pages/ProductsPage")).default,
        }),
      },
      {
        path: "products/:slug",
        lazy: async () => ({
          Component: (await import("../pages/ProductDetailPage")).default,
        }),
      },
      {
        path: "catalogues",
        lazy: async () => ({
          Component: (await import("../pages/CataloguesPage")).default,
        }),
      },
      {
        path: "clients",
        lazy: async () => ({
          Component: (await import("../pages/ClientsPage")).default,
        }),
      },
      {
        path: "services/:service?",
        lazy: async () => ({
          Component: (await import("../pages/ServicesPage")).default,
        }),
      },
      {
        path: "gallery",
        lazy: async () => ({
          Component: (await import("../pages/GalleryPage")).default,
        }),
      },
      {
        path: "contact",
        lazy: async () => ({
          Component: (await import("../pages/ContactPage")).default,
        }),
      },
      {
        path: "*",
        lazy: async () => ({
          Component: (await import("../pages/NotFoundPage")).default,
        }),
      },
    ],
  },
], { basename: import.meta.env.BASE_URL });
