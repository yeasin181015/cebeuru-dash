import AiMonitoringIcon from "@/components/icons/AiMonitoringIcon";
import ItManagementIcon from "@/components/icons/ItManagementIcon";
import { FiSettings } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LuDatabaseBackup, LuNetwork } from "react-icons/lu";
import { MdDashboard, MdOutlineSettingsRemote } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import { To } from "react-router-dom";

export type Menu =
  | {
      name: string;
      href: string;
      icon: React.ReactElement;
      children?: never;
      isActive?: (currentPath: string) => boolean;
    }
  | {
      name: string;
      href?: never;
      icon: React.ReactElement;
      isActive?: (currentPath: string) => boolean;
      children: {
        name: string;
        href: string;
        isActive?: (currentPath: string) => boolean;
      }[];
    };

export const menu: Menu[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: <MdDashboard size={24} />,
  },
  {
    name: "IT Management",
    icon: <ItManagementIcon size={22} />,
    children: [
      {
        name: "Alarms/Triggers",
        href: "/alarms-triggers",
      },
      {
        name: "Asset Management",
        href: "/asset-management",
      },
      {
        name: "Asset Monitoring",
        href: "/asset-monitoring",
      },
      {
        name: "Asset Status",
        href: "/asset-status",
      },
      {
        name: "Patch Management",
        href: "/patch-management",
      },
      {
        name: "Security Logs",
        href: "/security-logs",
      },
    ],
  },
  {
    name: "Backup Management",
    href: "/backup-management",
    icon: <LuDatabaseBackup size={24} />,
  },
  {
    name: "Remote Connect",
    href: "/remote-connect",
    icon: <MdOutlineSettingsRemote size={24} />,
  },
  {
    name: "Performance Monitor",
    icon: <TbHeartRateMonitor size={24} />,
    children: [],
  },
  {
    name: "AI Monotoring",
    icon: <AiMonitoringIcon size={20} />,
    children: [],
  },
  {
    name: "Network Monitoring",
    icon: <LuNetwork size={24} />,
    children: [],
  },
  {
    name: "Reports",
    href: "/reports",
    icon: <HiOutlineDocumentReport size={24} />,
  },
  {
    name: "Settings",
    icon: <FiSettings size={24} />,
    children: [],
  },
];
