import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaPhoneAlt } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import { FaHome } from "react-icons/fa";

const guestNav = [
  { to: "/Home", text: "หน้าเข้า-ออกงาน" },
  { to: "/register", text: "สมัครสมาชิก" },
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
    <div></div>
  );
}
