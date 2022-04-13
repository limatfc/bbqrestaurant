import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { DataProvider } from "./store/DataProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);
