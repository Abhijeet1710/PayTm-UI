import './App.css'
import { Outlet } from "react-router-dom";
import { AppbarClient } from './components/common/AppbarClient';
import { SidebarItem } from './components/common/SidebarItem';
import { HomeIcon, P2PTransferIcon, TransferIcon, TransactionsIcon } from './assets';
import Auth from './components/pages/auth/Auth';
import { useState } from 'react';

function App() {
  const isLoggedInUser = localStorage.getItem("PayTm_UserDetails") == "true";
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInUser)

  function setLoggedInTrue () {
    alert("Setting Logged In True")
    localStorage.setItem("PayTm_UserDetails", "true")
    setIsLoggedIn(true)
  }

  function setLoggedInFalse () {
    alert("Setting Logged In False")
    localStorage.setItem("PayTm_UserDetails", "false")
    setIsLoggedIn(false)
  }

  const session = isLoggedIn ? {
    data: {
      user: {
        name: "Abhijeet",
        email: "7558348607"
      }
    }
  } : {}

  return (
    <div className="mainBg">
      <AppbarClient session={session} onSignout={setLoggedInFalse} />

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
          <Auth onSignin={setLoggedInTrue}/>
      }

    </div>
  )
}

export default App
