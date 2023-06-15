import Error404 from "@/components/Error404";
import AppLayout from "@/layouts/AppLayout";
import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { PuffLoader } from "react-spinners";

// Pages
const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const AssetManagementPage = React.lazy(
  () => import("@/pages/asset-management")
);

export const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "/asset-management",
          element: <AssetManagementPage />,
        },
      ],
    },

    {
      path: "*",
      element: <Error404 />,
    },
  ];

  const element = useRoutes(routes);

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <PuffLoader color="#8b5cf6" size={70} />
        </div>
      }
    >
      {element}
    </Suspense>
  );
};
