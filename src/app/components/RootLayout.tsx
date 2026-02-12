import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { ScrollToTop } from "./ScrollToTop";

export function RootLayout() {
  return (
    <div className="size-full">
      <Navigation />
      <Outlet />
      <ScrollToTop />
    </div>
  );
}