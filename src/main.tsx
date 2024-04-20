import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.tsx";


const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <App></App>
      },
      {
        path: "/sign-up",
        element: <SignUpPage></SignUpPage>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
