import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Remove static fallback once the SPA has mounted (keeps SEO content for no-JS crawlers)
const fallback = document.getElementById("seo-fallback");
if (fallback) fallback.remove();
