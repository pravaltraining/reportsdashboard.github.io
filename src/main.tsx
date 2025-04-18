
import { createRoot } from 'react-dom/client';

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./Components/App/Auth/Auth";
import  AppComponent  from "./Components/App/App";
import 'bootstrap/dist/css/bootstrap.min.css';

const msalInstance = new PublicClientApplication(msalConfig);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);
root.render(
  <MsalProvider instance={msalInstance}>
    <AppComponent />
  </MsalProvider>
);
