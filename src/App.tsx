import './App.css'
import { Outlet } from "react-router-dom";
import { AppbarClient } from './components/common/AppbarClient';
import { SidebarItem } from './components/common/SidebarItem';
import { HomeIcon, P2PTransferIcon, TransferIcon, TransactionsIcon } from './assets';

function App() {

  const isLoggedIn = true;

  return (
    <div className="mainBg">
      <AppbarClient />

      {
        isLoggedIn ?
          <div className="flex flex-col md:flex-row">
            <div className="pt-4 md:w-80 md:border-r md:border-slate-300 md:min-h-screen md:mr-4 md:pt-28">
              <div className="flex flx-row md:flex-col widthVx overflow-x-scroll md:overflow-x-hidden md:px-4">
                <SidebarItem href={"/home"} icon={<HomeIcon />} title="Home" />
                <SidebarItem href={"/wallet"} icon={<TransferIcon />} title="Wallet" />
                <SidebarItem href={"/transfer"} icon={<P2PTransferIcon />} title="Transfer" />
                <SidebarItem href={"/history"} icon={<TransactionsIcon />} title="History" />
              </div>
            </div>

            <Outlet />
          </div> :

          // TODO : Auth Component here
          <h1>Pls Login First</h1>
      }

    </div>
  )
}

export default App
