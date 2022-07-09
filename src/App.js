import React from "react";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./routes";
import { AccountUploader, ErrorHandler } from "./hoc";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ErrorHandler>
      <AccountUploader>
        {useRoutes(routes)}
        <ToastContainer />
      </AccountUploader>
    </ErrorHandler>
  );
}

export default App;
