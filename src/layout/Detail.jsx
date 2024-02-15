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
  <div className="text-center">
    <p className='text-6xl mt-8 text-neutral-700'>Detail</p>
    <center><hr className="my-4 border-b-2 border-neutral-500 w-9/12 text-center item-center px-6" /></center>
  </div>
  <div className="max-w-[80%] mx-auto">
    <div className="flex justify-between items-center">
      <p className='text-3xl  text-neutral-700 pl-4'>Detail</p>
      <input type="text" className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-3/6 mt-4" placeholder="Search..." />
    </div>
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="px-2 py-3 bg-gray-200 border border-gray-300">User_id</th>
            <th className="px-2 py-1 bg-gray-200 border border-gray-300">ชื่อจริง</th>
            <th className="px-2 py-1 bg-gray-200 border border-gray-300">นามสกุล</th>
            <th className="px-2 py-1 bg-gray-200 border border-gray-300">เวลาเข้างาน</th>
            <th className="px-2 py-1 bg-gray-200 border border-gray-300">เวลาออกงาน</th>
            <th className="px-2 py-1 bg-gray-200 border border-gray-300">วันเดือนปี</th>

          </tr>
        </thead>
        <tbody>
        <tr>
              <td className="px-4 py-2 border border-gray-300 text-center">1</td>
              <td className="px-4 py-2 border border-gray-300 text-center">จีรศักดิ์</td>
              <td className="px-4 py-2 border border-gray-300 text-center">พิมพ์คำไหล</td>
              <td className="px-4 py-2 border border-gray-300 text-center">09.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">17.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">01/01/2566</td>
              
            
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 text-center">2</td>
              <td className="px-4 py-2 border border-gray-300 text-center">จีรศักดิ์</td>
              <td className="px-4 py-2 border border-gray-300 text-center">พิมพ์คำไหล</td>
              <td className="px-4 py-2 border border-gray-300 text-center">09.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">17.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">01/01/2566</td>
              
            
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 text-center">3</td>
              <td className="px-4 py-2 border border-gray-300 text-center">จีรศักดิ์</td>
              <td className="px-4 py-2 border border-gray-300 text-center">พิมพ์คำไหล</td>
              <td className="px-4 py-2 border border-gray-300 text-center">09.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">17.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">01/01/2566</td>
              
            
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 text-center">4</td>
              <td className="px-4 py-2 border border-gray-300 text-center">จีรศักดิ์</td>
              <td className="px-4 py-2 border border-gray-300 text-center">พิมพ์คำไหล</td>
              <td className="px-4 py-2 border border-gray-300 text-center">09.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">17.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">01/01/2566</td>
              
            
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 text-center">5</td>
              <td className="px-4 py-2 border border-gray-300 text-center">จีรศักดิ์</td>
              <td className="px-4 py-2 border border-gray-300 text-center">พิมพ์คำไหล</td>
              <td className="px-4 py-2 border border-gray-300 text-center">09.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">17.00น.</td>
              <td className="px-4 py-2 border border-gray-300 text-center">01/01/2566</td>
              
            
            </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-center mt-12 pr-32">
  <div className="ml-auto">
    <button type="submit" className="btn btn-active btn-neutral px-16 md:px-8 mt-12 md:mt-0 mb-2 md:mb-0 ">
      หน้าต่อไป
    </button>
  </div>
</div>
</div>
</div>
  );
}
