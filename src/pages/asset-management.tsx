type Props = {};
import { useState } from "react";
import ApexCharts from "../components/charts/ApexCharts";
const AssetManagementPage = ({}: Props) => {
  const [menu, setMenu] = useState("Specifictions");

  const data = [
    {
      name: "System Name",
      value: "CEBURU_WINDOWS10",
    },
    {
      name: "Disk",
      value: "249 GB",
    },
    {
      name: "Memory",
      value: "18 GB",
    },
    {
      name: "IP Adrress",
      value: "172.16.0.8",
    },
    {
      name: "Manufacture",
      value: "VMware7,1",
    },
    {
      name: "Model",
      value: "VMware7,1",
    },
    {
      name: "Serial Number/Service Tag",
      value: "asdasdasdasd asdasdas",
    },
    {
      name: "Warranty Status",
      value: "",
    },
    {
      name: "Device Time Zone",
      value: "Mountain Standard Time (Mexico)",
    },
    {
      name: "Operating Sytem",
      value: "Windows",
    },
    {
      name: "Os Version",
      value: "10 Enterprise",
    },
    {
      name: "Os Archirtecture",
      value: "64bit",
    },
    {
      name: "Lost Discovery",
      value: "05-15-2023, 07:39:52",
    },
    {
      name: "Agent Status",
      value: "10.0",
    },
    {
      name: "Lost Discovery",
      value: "05-15-2023, 07:39:52",
    },
    {
      name: "Lost Boot-Up",
      value: "05-15-2023, 07:39:52",
    },
    {
      name: "Loggen In User",
      value: "System",
    },
  ];
  const cpuBytes = [0, 25, 50, 75, 100, 120, 150];
  const cpuTime = [
    "10:35",
    "10:40",
    "10:45",
    "10:50",
    "10:55",
    "11:00",
    "11:05",
  ];
  const memoryGB = [10.8, 11.2, 11.4, 11.6, 12.9, 13.0, 13.9];
  const memoryTime = [
    "10:35",
    "10:40",
    "10:45",
    "10:50",
    "10:55",
    "11:00",
    "11:05",
  ];
  const labels = [
    "Specifictions",
    "Triggers",
    "Monitoring",
    "AI Prediction",
    "Log",
    "Health Check",
    "Settings",
  ];
  labels.map((item) => console.log(item));
  return (
    <div className="bg-white rounded">
      <div className="p-5">
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Details</h2>
          <h2>
            Hose Name: CEBURU_WINDOWS10
            <span className="ml-12">Probe: 172.16.0.18</span>
          </h2>
        </div>
        <div className="flex gap-x-6 text-lg font-semibold mb-5">
          {labels.map((item) => (
            <h2
              className={
                menu === item
                  ? "text-green-500 cursor-pointer"
                  : "cursor-pointer text-gray-500"
              }
              onClick={() => setMenu(item)}
            >
              {item}
            </h2>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex-1 bg-[#F4F7FF] rounded-lg">
            <div className="p-5 ">
              {data.map((item: any) => (
                <div className="grid grid-cols-2 mb-3">
                  <div>
                    <div className="px-4 py-2 rounded-tl-md rounded-bl-md text-white bg-[#51BEB5] flex justify-between">
                      <h2>{item.name}</h2>
                      <h2>:</h2>
                    </div>
                  </div>
                  <div className="bg-white flex items-center whitespace-nowrap">
                    <h2 className="ml-3 text-sm">{item.value}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F4F7FF] rounded ml-5 h-fit">
            <ApexCharts
              defaultValue="1 hour"
              title="CPU Utilizato"
              isBoolean={true}
              cpuBytes={cpuBytes}
              cpuTime={cpuTime}
            />
            <hr />
            <hr />
            <hr />
            <ApexCharts
              cpuBytes={memoryGB}
              cpuTime={memoryTime}
              title="Used Memory"
              isBoolean={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManagementPage;
