import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    // const [active, setActive] = useState("/");

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <nav className={!sidebar ? "navbar" : "navbar active"}>
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle" onClick={showSidebar}>
                        <Link to="#" className="menu-bars">
                        {sidebar ? <RiIcons.RiMenuFoldLine /> : <RiIcons.RiMenuUnfoldLine />}
                            
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} onClick={sidebar?showSidebar:null}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className={sidebar ? "title active" : "title"}>{item.title}</span>
                        {/* {sidebar? <span>{item.title}</span>:null} */}
                                    </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            {/* <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <RiIcons.RiMenuFoldLine />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                     { item.icon } 
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav> */}
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;
