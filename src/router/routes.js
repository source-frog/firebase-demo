import Index from "@/views/Index";
import Dashboard from "@/views/Dashboard";

const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      requiresAuthentication: false,
    },
    children: [
      {
        path: "",
        component: Index,
      },
    ],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: {
      requiresAuthentication: true,
    },
    children: [
      {
        path: "",
        component: Dashboard,
      },
    ],
  },
];

export default routes;
