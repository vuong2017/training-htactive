import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Secret from "./components/Secret";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: false,
    },
    {
        path: "/contact",
        component: Contact,
        exact: false,
    },
    {
        path: "/secret",
        component: Secret,
        exact: false,
    },
];
