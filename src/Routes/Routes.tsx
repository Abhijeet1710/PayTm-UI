import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/dashboard/Home";
import App from "../App";
import Transfer from "../components/pages/transfer/Transfer";
import Wallet from "../components/pages/wallet/Wallet";
import History from "../components/pages/history/History";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/wallet",
                element: <Wallet />
            },
            {
                path: "/transfer",
                element: <Transfer />
            },
            {
                path: "/history",
                element: <History />
            }
        ]
    }
])