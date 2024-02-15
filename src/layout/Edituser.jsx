import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { RxDashboard } from "react-icons/rx";
import { MdSupervisorAccount } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserAlt, FaEnvelope, FaLock, FaPhoneAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
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
      <div className="flex-1 bg-gray-100">
  <div className="text-center mt-8">
    <h1 className='text-4xl text-neutral-700'>แก้ไขข้อมูลส่วนตัว</h1>
    <hr className="my-4 border-neutral-500 w-9/12 mx-auto" />
  </div>
  <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-8">
    <h2 className="text-2xl mb-6 text-center">ข้อมูลส่วนตัว</h2>
    <form className="space-y-4">
      <div className="flex items-center">
        <FaUserAlt className="mr-4 text-gray-400" />
        <label className="text-gray-600 w-24">ชื่อจริง</label>
        <input type="text" className="input-field" placeholder="ชื่อจริง" />
      </div>
      <div className="flex items-center">
        <FaUserAlt className="mr-4 text-gray-400" />
        <label className="text-gray-600 w-24">นามสกุล</label>
        <input type="text" className="input-field" placeholder="นามสกุล" />
      </div>
      <div className="flex items-center">
        <FaEnvelope className="mr-4 text-gray-400" />
        <label className="text-gray-600 w-24">Email</label>
        <input type="email" className="input-field" placeholder="Email" />
      </div>
      <div className="flex items-center">
        <FaUserAlt className="mr-4 text-gray-400" />
        <label className="text-gray-600 w-24">ตำแหน่ง</label>
        <input type="text" className="input-field" placeholder="ตำแหน่ง : พนักงาน" />
      </div>
      <div className="flex items-center">
        <FaCircleCheck className="mr-4 text-gray-400" />
        <label className="text-gray-600 w-24">สถานะปัจจุบัน</label>
        <input type="text" className="input-field" placeholder="สถานะปัจจุบัน : อยู่" />
      </div>
      <div className="flex justify-center">
        <button type="submit" className="btn btn-active btn-neutral px-10 py-2 mx-2">
          ยืนยัน
        </button>
        <Link to="/Account">
        <button type="submit" className="btn btn-active btn-neutral px-10 py-2 mx-2">
          ยกเลิก
        </button>
        </Link>
      </div>
    </form>
  </div>
</div>
</div>

  );
}
