import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import CampaignPage from "./pages/CampaignPage.tsx";
import LayoutDashboard from "./layout/LayoutDashboard.tsx";


const router = createBrowserRouter([
  {
    element: <LayoutDashboard></LayoutDashboard>,
    children: [
      {
        path: "/",
        element: <DashboardPage></DashboardPage>
      },
      {
        path: "/Campaign",
        element: <CampaignPage></CampaignPage>
      },
      {
        path: "/Payment",
        element: <DashboardPage></DashboardPage>
      },
      {
        path: "/Withdraw",
        element: <DashboardPage></DashboardPage>
      },
      {
        path: "/Campaign",
        element: <DashboardPage></DashboardPage>
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUpPage></SignUpPage>
  },
  {
    path: "/sign-in",
    element: <SignInPage></SignInPage>
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
