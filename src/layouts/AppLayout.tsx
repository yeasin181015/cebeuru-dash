import Head from "@/components/Head";
import Header from "@/components/partials/Header";
import Sidebar from "@/components/partials/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Head />
      <div className="flex">
        <Sidebar />
        <div className="bg-dark-900 flex-grow min-h-screen">
          <Header />
          <main
            className="bg-[#F4F7FF] rounded-tl-2xl p-6 overflow-auto"
            style={{
              height: "calc(100vh - 5rem)",
            }}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
