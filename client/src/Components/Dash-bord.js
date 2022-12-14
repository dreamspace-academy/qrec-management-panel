import React, { useState } from 'react';
import './Dash-board.css'
import {
    FaTh,
    FaBars,
    FaUser,
    FaTasks,
    FaWrench,
    FaPowerOff,
    FaQrcode
} from "react-icons/fa";
import { Link } from 'react-router-dom';




const DASH = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "Staff",
            icon: <FaUser />
        },
        {
            path: "/attendance",
            name: "Attendance",
            icon: <FaTasks />
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <FaWrench />
        },
        {
            path: "/login",
            name: "Log-out",
            icon: <FaPowerOff />
        },
        
    ]
    return (
        <div className="DashBoardItem">
            <div style={{ width: isOpen ? "200px" : "50px", }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none", transition: "all 2s : all 2s" }} className="logo fw-bold">qRec</h1>
                    <div style={{ marginLeft: isOpen ? "60px" : "0px", transition: "all 0.9s : all 0.9s" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <Link to={item.path} key={index} className="link" activeclassname="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </Link>
                    ))
                }
            </div>
            <main className='overflow-auto'>{children}</main>
        </div>
    );
};

export default DASH;