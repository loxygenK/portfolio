import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "~/App";
import "~/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

function main() {
  const root = document.getElementById("root");
  if (root == undefined) {
    throw new Error(
      "No element with id 'root' found! Application will not be mounted."
    );
  }

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

main();
