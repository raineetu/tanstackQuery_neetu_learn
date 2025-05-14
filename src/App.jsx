import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./components/Router/Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
