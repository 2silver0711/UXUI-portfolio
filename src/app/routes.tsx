import { createHashRouter, Navigate } from "react-router";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { RootLayout } from "./components/RootLayout";

export const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "profile", Component: Profile },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetail },
      { path: "*", Component: () => <Navigate to="/" replace /> },
    ],
  },
]);