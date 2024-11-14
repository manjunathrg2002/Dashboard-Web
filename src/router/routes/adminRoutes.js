import { lazy } from "react";
const AdminDashboard = lazy(() => import("./../../views/admin/AdminDashboard"));
const Recruitment = lazy(() => import("../../views/admin/Recruitment"));
const Schedule = lazy(() => import("../../views/admin/Schedule"));
const Department = lazy(() => import("../../views/admin/Department"));
const Employee = lazy(() => import("../../views/admin/Employee"));
const Support = lazy(() => import("../../views/admin/Support"));
const Settings = lazy(() => import("../../views/admin/Settings"));


export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/recruitment",
    element: <Recruitment />,
    role: "admin",
  },
  {
    path: "admin/dashboard/schedule",
    element: <Schedule />,
    role: "admin",
  },
  {
    path: "admin/dashboard/employee",
    element: <Employee />,
    role: "admin",
  },
  {
    path: "admin/dashboard/department",
    element: <Department />,
    role: "admin",
  },
  {
    path: "admin/dashboard/support",
    element: <Support />,
    role: "admin",
  },
  {
    path: "admin/dashboard/settings",
    element: <Settings />,
    role: "admin",
  },
];
