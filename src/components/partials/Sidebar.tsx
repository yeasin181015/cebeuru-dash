import logo from "@/assets/images/logo.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { menu } from "@/config/menu";
import React from "react";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <div className="w-72 bg-dark-900 text-white">
      {/* Sidebar Header */}
      <div className="h-20 flex items-center justify-center">
        <img src={logo} alt="logo" className="w-48" />
      </div>
      {/* Sidebar Toggle */}
      <div className="flex items-center py-3 px-7">
        <HiOutlineMenuAlt2 className="text-white" size={24} />
        <div className="text-white text-sm ms-3">
          <p>Companies</p>
          <p className="text-xs">AFLAC</p>
        </div>
        <FiChevronDown className="text-white ms-auto" size={16} />
      </div>
      {/* Sideber Menu */}
      <ul className="space-y-1">
        {menu.map((item, index) => {
          return (
            <li key={index} className="px-4">
              <Link
                to={item.href || "/"}
                className="group flex items-center py-3 px-3 hover:bg-primary-500 hover:bg-opacity-10 rounded hover:text-primary-500"
              >
                {item.icon &&
                  React.cloneElement(item.icon, {
                    className: "text-white group-hover:text-primary-500",
                  })}
                <span className="ms-3 text-sm">{item.name}</span>
                {item.children && (
                  <FiChevronDown
                    className="ms-auto group-hover:text-primary-500"
                    size={16}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
