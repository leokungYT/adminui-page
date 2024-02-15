import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { RxDashboard } from "react-icons/rx";
import { MdSupervisorAccount } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const guestNav = [
  { to: "/RecordIN", text: "Reacord IN" },
  { to: "/RecordOut", text: "Reacord OUT" },
  { to: "/Detail", text: "Detail" },

];

const userNav = [
  { to: "/", text: "Home" },
  { to: "/new", text: "New Todo" },
];

export default function Nav() {
  const { user, logout } = useAuth();
  const finalNav = user?.id ? userNav : guestNav;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className={`bg-[#1E2022] text-neutral-content h-auto w-64 flex-none ${isMenuOpen ? 'block' : ''} md:block`}>
        <div className="flex flex-col h-screen justify-between">
          <div className="p-4">
            <Link to="/">
              <div className="text-3xl scroll-pl-1.5 w-full p-4 text-white">Admin Page</div>
              <div className="text-text-xl text-neutral-400 scroll-pl-1.5 w-full p-4">main menu</div>
            </Link>
            <ul className="menu menu-vertical text-lg flex flex-col space-y-4">
              <li>
                <Link to="/">
                  <RxDashboard />
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="/Account">
                  <MdSupervisorAccount />
                  Account
                </a>
              </li>
              {finalNav.map(el => (
                <li key={el.to}>
                  <Link to={el.to} className="flex items-center">
                    <BsFillClipboard2DataFill /> {el.text}
                  </Link>
                </li>
              ))}
              {user?.id && (
                <li>
                  <Link to="#" onClick={handleLogout}>Logout</Link>
                </li>
              )}
              <li>
                <a href="" className="mt-80 text-center	items-center">
                  <IoIosLogOut />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

{/* Login Page */}
<div className="flex-1">
  {/* Your login page content here */}
  <div>
    <p className='text-6xl text-center mt-24 text-neutral-700'>Admin Page</p>
    <center><hr className="my-4 border-b-2 border-neutral-500 mt-6 w-9/12 text-center item-center px-6" /></center>
    <p className='text-6xl text-center mt-12 text-neutral-700'>*ใช้งานเฉพาะเจ้าหน้าที่</p>
  </div>
  <center>
    <div class="w-3/5	 h-56 bg-[#1E2022] text-center item-center mt-4 pt rounded-xl">
      <div className='text-white text-3xl m-16'>
        <p className='mt-6 pt-10	'>จำนวนสมาชิกทั้งหมด</p>
      </div>
      <div className='text-white text-3xl m-16'>
        <FaUser className='inline-block text-white' /> 0 คน
      </div>
    </div>
  </center>
</div>
    </div>
  );
}
