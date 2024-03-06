import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { RiDashboardLine } from "react-icons/ri";
import { MdSupervisorAccount } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const guestNav = [
  { to: "/RecordIN", text: "Record IN" },
  { to: "/RecordOut", text: "Record OUT" },
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
  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState([
    { id: 1, firstName: "จีรศักดิ์1", lastName: "พิมพ์คำไหล", checkIn: "09.00น.", checkOut: "17.00น.", date: "01/01/2566" },
    { id: 2, firstName: "จีรศักดิ์2", lastName: "พิมพ์คำไหล", checkIn: "09.00น.", checkOut: "17.00น.", date: "01/01/2566" },
    { id: 3, firstName: "จีรศักดิ์3", lastName: "พิมพ์คำไหล", checkIn: "09.00น.", checkOut: "17.00น.", date: "01/01/2566" },
    { id: 4, firstName: "จีรศักดิ์4", lastName: "พิมพ์คำไหล", checkIn: "09.00น.", checkOut: "17.00น.", date: "01/01/2566" }

  ]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = tableData.filter((item) => {
    return Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="flex">
      <nav className={`bg-[#1E2022] text-neutral-content h-auto w-64 flex-none md:block`}>
        <div className="flex flex-col h-screen justify-between">
          <div className="p-4">
            <Link to="/">
              <div className="text-3xl scroll-pl-1.5 w-full p-4 text-white">Admin Page</div>
              <div className="text-text-xl text-neutral-400 scroll-pl-1.5 w-full p-4">main menu</div>
            </Link>
            <ul className="menu menu-vertical text-lg flex flex-col space-y-4">
              <li>
                <Link to="/">
                  <RiDashboardLine />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/Account">
                  <MdSupervisorAccount />
                  Account
                </Link>
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
                <a href="" className="mt-80 text-center items-center">
                  <IoIosLogOut />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex-1">
        <div className="text-center">
          <p className='text-6xl mt-8 text-neutral-700'>Detail</p>
          <center><hr className="my-4 border-b-2 border-neutral-500 w-9/12 text-center item-center px-6" /></center>
        </div>
        <div className="max-w-[80%] mx-auto">
          <div className="flex justify-between items-center">
            <p className='text-3xl  text-neutral-700 pl-4'>Detail</p>
            <input type="text" className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-3/6 mt-4" onChange={handleSearch} placeholder="Search..." />
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
                {filteredData.map(row => (
                  <tr key={row.id}>
                    <td className="px-4 py-2 border border-gray-300 text-center">{row.id}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{row.firstName}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{row.lastName}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{row.checkIn}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{row.checkOut}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{row.date}</td>
                  </tr>
                ))}
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
