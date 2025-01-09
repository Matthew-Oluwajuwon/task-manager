import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProviderComponent } from "./components/ThemeProviderComponent.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderComponent>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProviderComponent>
  </StrictMode>
);
