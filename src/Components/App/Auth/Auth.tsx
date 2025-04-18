

export const msalConfig = {
    auth: {
      clientId: "5bfa2aed-bd36-44f2-a920-f0803d1f7b62",
      authority: "https://login.microsoftonline.com/648ca8d9-38e9-44ca-bc27-20e5a79ee859",
      redirectUri: "http://localhost:5173/reportsdashboard.github.io/",
    },
  };
  
  export const loginRequest = {
    scopes: ["User.Read", "Sites.Read.All"],
  };