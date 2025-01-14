import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'                             // comment out, or delete this line
import App from "./App.tsx";                        // leave the rest of this file alone
createRoot(document.getElementById("root")!).render(
 <StrictMode>
   <App />
 </StrictMode>);



