import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import store from "./store.ts";
import { Provider } from "react-redux";
// @ts-expect-error maybe later :)
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
