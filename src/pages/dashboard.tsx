import Card from "@/components/shared/Card";
import ReactApexChart from "react-apexcharts";
import themeConfig, { themeColors } from "@tailwind.config";
import colors from "tailwindcss/colors";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Tab } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

type Props = {};

const Dashboard = ({}: Props) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {/* Asset Analysis */}
        <Card>
          <Card.Body>
            <Card.Title className="flex items-center">
              Asset Analysis
              <button className="ms-auto text-slate-500" type="button">
                <HiOutlineDotsVertical size={20} />
              </button>
            </Card.Title>
            <ReactApexChart
              type="donut"
              options={{
                colors: [
                  themeColors.primary[500],
                  themeColors.danger[500],
                  colors.emerald[500],
                  colors.amber[500],
                  themeColors.primary[500],
                  colors.purple[500],
                ],
                chart: {
                  toolbar: {
                    show: false,
                  },
                  fontFamily: "Poppins, sans-serif",
                },
                stroke: {
                  width: 0,
                },
                legend: {
                  position: "right",
                },
                plotOptions: {
                  pie: {
                    offsetY: 20,
                    donut: {
                      labels: {
                        show: true,
                        name: {
                          show: true,
                          fontSize: "14px",
                          fontWeight: 500,
                          color: colors.slate["400"],
                        },
                        value: {
                          show: true,
                          fontSize: "28px",
                          fontWeight: "bold",
                          color: colors.slate["700"],
                          formatter: function (val: string) {
                            return Intl.NumberFormat().format(Number(val));
                          },
                        },
                        total: {
                          show: true,
                          label: "Total Users",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: colors.slate["400"],
                          formatter: function (w: any) {
                            const total = w.globals.seriesTotals.reduce(
                              (a: number, b: number) => {
                                return a + b;
                              },
                              0
                            );

                            return Intl.NumberFormat().format(total);
                          },
                        },
                      },
                    },
                  },
                },
              }}
              series={[20, 35, 21, 18, 21, 11]}
              labels={[
                "Active Devices",
                "Offline Devices",
                "New Devices",
                "Online Devices",
                "Ignored Devices",
                "Failed Devices",
              ]}
            />
          </Card.Body>
        </Card>

        {/* Critical Machins */}

        <Card>
          <Card.Body>
            <Card.Title className="flex items-center">
              Critical Machines
              <button className="ms-auto text-slate-500" type="button">
                <HiOutlineDotsVertical size={20} />
              </button>
            </Card.Title>

            <div className="mt-2">
              <Tab.Group>
                <Tab.List className="tab-list">
                  <Tab
                    className={({ selected }) =>
                      twMerge("tab", selected && "active")
                    }
                  >
                    Memory
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      twMerge("tab", selected && "active")
                    }
                  >
                    CPU
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      twMerge("tab", selected && "active")
                    }
                  >
                    Disk
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      twMerge("tab", selected && "active")
                    }
                  >
                    Network
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="mt-6 space-y-6">
                      {/* Make a progress bar */}
                      <div>
                        <div className="mb-1 flex text-sm dark:text-white">
                          <span className="">ACOSV-REPORT</span>
                          <span className="ms-auto text-xs">
                            70.5/
                            <span className="text-slate-600">from 100</span>
                          </span>
                        </div>
                        <div className="w-full h-4 mb-4 mt-2 bg-slate-200 rounded-full dark:bg-slate-700">
                          <div
                            className="h-4 bg-purple-600 rounded-full dark:bg-purple-500"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      {/* Make a progress bar */}
                      <div>
                        <div className="mb-1 flex text-sm dark:text-white">
                          <span className="">ACOSV-REPORT</span>
                          <span className="ms-auto text-xs">
                            70.5/
                            <span className="text-slate-600">from 100</span>
                          </span>
                        </div>
                        <div className="w-full h-4 mb-4 mt-2 bg-slate-200 rounded-full dark:bg-slate-700">
                          <div
                            className="h-4 bg-emerald-500 rounded-full dark:bg-emerald-500"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      {/* Make a progress bar */}
                      <div>
                        <div className="mb-1 flex text-sm dark:text-white">
                          <span className="">ACOSV-REPORT</span>
                          <span className="ms-auto text-xs">
                            70.5/
                            <span className="text-slate-600">from 100</span>
                          </span>
                        </div>
                        <div className="w-full h-4 mb-4 mt-2 bg-slate-200 rounded-full dark:bg-slate-700">
                          <div
                            className="h-4 bg-indigo-500 rounded-full dark:bg-indigo-500"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      {/* Make a progress bar */}
                      <div>
                        <div className="mb-1 flex text-sm dark:text-white">
                          <span className="">ACOSV-REPORT</span>
                          <span className="ms-auto text-xs">
                            70.5/
                            <span className="text-slate-600">from 100</span>
                          </span>
                        </div>
                        <div className="w-full h-4 mb-4 mt-2 bg-slate-200 rounded-full dark:bg-slate-700">
                          <div
                            className="h-4 bg-danger-600 rounded-full dark:bg-danger-500"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>Some content 2</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </Card.Body>
        </Card>

        {/* Trigger History */}
        <Card>
          <Card.Body>
            <Card.Title className="flex items-center">
              Trigger History
              <button className="ms-auto text-slate-500" type="button">
                <HiOutlineDotsVertical size={20} />
              </button>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
