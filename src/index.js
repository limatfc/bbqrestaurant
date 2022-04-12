import { createRoot } from "react-dom/client";
import TasksProvider from "./store/tasks-provider";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <TasksProvider>
    <App />
  </TasksProvider>
);
