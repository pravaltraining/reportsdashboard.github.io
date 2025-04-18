import * as React from 'react';
import DashboardComponent from '../Dashboard/Dashboard';
import './App.scss';

const AppComponent: React.FC = () => {
    return (
        <div>
            <DashboardComponent />
        </div>
    );
};
export default AppComponent;


// import React, { useEffect, useState } from "react";
// import { useMsal } from "@azure/msal-react";
// import { loginRequest } from "./Auth/Auth";

// const App = () => {
//   const { instance, accounts } = useMsal();
//   const [items, setItems] = useState([]);
//   const [siteId, setSiteId] = useState(null);

//   const login = async () => {
//     const response = await instance.loginPopup(loginRequest);
//     console.log("Logged in user:", response.account);
//   };

//   const getAccessToken = async () => {
//     const result = await instance.acquireTokenSilent({
//       ...loginRequest,
//       account: accounts[0],
//     });
//     return result.accessToken;
//   };

//   const getSiteId = async (token: string) => {
//     const res = await fetch(
//       "https://graph.microsoft.com/v1.0/sites/pravaltech.sharepoint.com:/sites/DTDev",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const data = await res.json();
//     return data.id;
//   };

//   const fetchListItems = async () => {
//     const token = await getAccessToken();
//     let resolvedSiteId = siteId;

//     if (!resolvedSiteId) {
//       resolvedSiteId = await getSiteId(token);
//       setSiteId(resolvedSiteId);
//     }

//     const response = await fetch(
//       `https://graph.microsoft.com/v1.0/sites/${resolvedSiteId}/lists/Technology Register/items?expand=fields`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const data = await response.json();
//     setItems(data.value);
//     console.log(data.value)
//   };

//   useEffect(() => {
//     if (accounts.length > 0) {
//       fetchListItems();
//     }
//   }, [accounts]);

//   return (
//     <div>
 
//       <h1>SharePoint List Items</h1>
//       {accounts.length === 0 ? (
//         <button onClick={login}>Login</button>
//       ) : (
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>{item.fields.Title}-{item.fields.Description}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App;


