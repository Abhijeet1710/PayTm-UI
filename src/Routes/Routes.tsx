import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import Home from "../components/dashboard/Home";
import App from "../App";
import Transfer from "../components/transfer/Transfer";
import Wallet from "../components/wallet/Wallet";
import History from "../components/history/History";

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