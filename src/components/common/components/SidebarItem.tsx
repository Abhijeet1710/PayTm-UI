import React from "react";
import { Link, useLocation } from "react-router-dom";

export const SidebarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {    
    const selected = href == useLocation().pathname

    return <Link to={href}>
        <div className={`flex ${selected ? "hover:bg-[#5e4599] selectedNav primaryBackgroundColor" : "text-slate-500"} cursor-pointer  p-2 md:pl-8 md:mt-2`} onClick={() => { }}>
            <div className="pr-2">
                {icon}
            </div>
            <div className={`font-bold ${selected ? "text-[#ffff]" : "text-slate-500"}`}>
                {title}
            </div>
        </div>
    </Link>
}