import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/pages/LandingPage";
import { Login } from "./components/pages/Login";
import { Dashboard } from "./components/pages/Dashboard";
import { AIChat } from "./components/pages/AIChat";
import { MoodTracker } from "./components/pages/MoodTracker";
import { Forum } from "./components/pages/Forum";
import { Profile } from "./components/pages/Profile";
import { AdminDashboard } from "./components/pages/AdminDashboard";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { AppLayout } from "./components/layouts/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/app",
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "chat", Component: AIChat },
      { path: "mood", Component: MoodTracker },
      { path: "forum", Component: Forum },
      { path: "profile", Component: Profile },
      { path: "admin", Component: AdminDashboard },
    ],
  },
]);
