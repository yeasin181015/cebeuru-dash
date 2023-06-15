import logo from "@/assets/images/logo.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { Menu, menu } from "@/config/menu";
import React, { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

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
          if (item.children) {
            return (
              <SidebarDropdownMenu
                key={index}
                name={item.name}
                icon={item.icon}
                children={item.children}
              />
            );
          }

          return (
            <SidebarMenu
              key={index}
              href={item.href}
              name={item.name}
              icon={item.icon}
            />
          );
        })}
      </ul>
    </div>
  );
};

interface SidebarMenuProps {
  href: string;
  name: string;
  icon: React.ReactElement;
  isActive?: (currentPath: string) => boolean;
}

const SidebarMenu = ({ href, name, icon }: SidebarMenuProps) => {
  const { pathname } = useLocation();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <li className="px-4">
      <Link
        to={href}
        className={twMerge(
          "group flex items-center py-3 px-3 hover:bg-primary-500 hover:bg-opacity-10 rounded hover:text-primary-500 transition-colors duration-150",
          href &&
            isActive(href) &&
            "bg-primary-500 bg-opacity-10 text-primary-500 font-medium"
        )}
      >
        {icon &&
          React.cloneElement(icon, {
            className: twMerge(
              "text-white group-hover:text-primary-500 transition-colors duration-150",
              href && isActive(href) && "text-primary-500"
            ),
          })}
        <span className="ms-3 text-sm">{name}</span>
      </Link>
    </li>
  );
};

interface SidebarDropdownMenuProps {
  name: string;
  icon: React.ReactElement;
  isActive?: (currentPath: string) => boolean;
  children: {
    name: string;
    href: string;
    isActive?: (currentPath: string) => boolean;
  }[];
}

const SidebarDropdownMenu = ({
  name,
  icon,
  children,
}: SidebarDropdownMenuProps) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="px-4">
      <a
        href="javascript:void(0)"
        className={twMerge(
          "group flex items-center py-3 px-3 hover:bg-primary-500 hover:bg-opacity-10 rounded hover:text-primary-500 transition-colors duration-150"
        )}
        onClick={toggle}
      >
        {icon &&
          React.cloneElement(icon, {
            className: twMerge(
              "text-white group-hover:text-primary-500 transition-colors duration-150"
            ),
          })}
        <span className="ms-3 text-sm">{name}</span>
        <FiChevronDown
          className="ms-auto group-hover:text-primary-500 transition-colors duration-150"
          size={16}
        />
      </a>
      {isOpen && (
        <ul className="space-y-4 py-2">
          {children.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.href}
                  className="text-sm pl-12 hover:text-primary-500 transition-colors duration-150"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
