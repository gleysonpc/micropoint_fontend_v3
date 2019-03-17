import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "tim-icons icon-chart-pie-36",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/profile",
        name: "Profile",
        icon: "tim-icons icon-single-02",
        component: Profile,
        layout: "/admin"
    },
];

export default routes;